from app import application, db, models, auth
from app.models import tables, User, Form
from flask import Response, request, g, render_template
import json
import datetime
import jwt
import csv
import io


@auth.verify_token
def verify_token(token):
    try:
        id = User.decode_auth_token(token)
        if id:
            g.user = User.query.filter_by(id=id).first()
    except Exception as e:
        print(str(e))
        return False
    return g.user is not None


@auth.error_handler
def token_auth_error():
    return json.dumps({'code': 'auth_error'})


@application.route('/')
def home():
    return 'Mindtrails API'


@application.route('/admin', methods=["GET", "POST"])
def admin():
    with application.open_resource('static/form_schema.json') as json_file:
        schema_json = json.load(json_file)
    if request.method == 'GET':
        users = User.query.all()
    else:
        search = '%' + request.form['search'] + '%'
        users = User.query.filter(User.name.like(
            search) | User.email.like(search))
    users_array = []
    study_indexes = [['StudyIndex']]
    for user in users:
        users_array.append({
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'phone': user.phone,
            'study_index': schema_json[user.study_index]['name'],
            'question_index': user.question_index,
            'date_registered': str(user.date_registered)
        })
        study_indexes.append([user.study_index])
    return render_template('adminpage.html', users=users_array, study_indexes=study_indexes)


@application.route('/admin/users-csv', methods=["GET"])
def users_csv():
    try:
        csv_file = io.StringIO()
        writer = csv.writer(csv_file)
        writer.writerow(['User ID', 'Name', 'Email', 'Phone',
                         'Registered On', 'Current Study'])
        all_users = User.query.all()
        for user in all_users:
            writer.writerow([
                user.id,
                user.name,
                user.email,
                user.phone,
                user.date_registered,
                user.study_index
            ])
        return Response(
            csv_file.getvalue(),
            mimetype="text/csv",
            headers={
                "Content-disposition":
                "attachment; filename=users_data.csv"
            })
    except Exception as e:
        print(str(e))
        return({})


@application.route("/admin/user/<id>")
def admin_user_page(id):
    with application.open_resource('static/form_schema.json') as json_file:
        schema_json = json.load(json_file)
    user = User.query.filter_by(id=id).first()
    user_dict = {
        'id': id,
        'name': user.name,
        'study_index': schema_json[user.study_index]['name'],
        'email': user.email,
        'phone': user.phone,
        'date_registered': user.date_registered,
        'email_reminders': user.email_reminders,
        'text_reminders': user.text_reminders,
        'text_messages': user.text_messages,
    }
    forms = []
    for form in schema_json:
        answer_class = tables[form['name'] + 'Answers']
        user_answers = answer_class.query.filter_by(user_id=id).first()
        answers_dict = {
            'form_name': form['name'],
            'total_questions': len(form['columns']),
            'answers': []
        }
        if user_answers is not None:
            answers_dict['complete'] = user_answers.complete
            total_time = 0
            for question in form['columns']:
                answer = getattr(user_answers, question)
                if answer is not None:
                    total_time += answer['duration']
                    answers_dict['answers'].append(answer)
                answers_dict['question_index'] = user.question_index
            answers_dict['total_time'] = total_time
        else:
            answers_dict['complete'] = False
            answers_dict['question_index'] = 0
            answers_dict['total_time'] = 0
        forms.append(answers_dict)
    print(forms)
    return render_template("profilepage.html", user=user_dict, forms=forms)


@application.route("/api/signup", methods=["POST"])
def signup():
    try:
        post_data = request.data
        response = json.loads(post_data)
        email = response['email']
        password = response['password']
        name = response['name']
        phone = response['phone']
        email_reminders = response['emailReminders']
        text_messages = response['textMessages']
        text_reminders = response['textReminders']
        gift_cards = response['giftCards']

        user = User.query.filter_by(email=email).first()

        if user is not None:
            return json.dumps({'code': 'username_taken'})
        new_user = User(
            name=name,
            email=email,
            phone=phone,
            email_reminders=email_reminders,
            text_messages=text_messages,
            text_reminders=text_reminders,
            gift_cards=gift_cards,
            date_registered=datetime.datetime.now(),
            study_index=0,
            question_index=-1,
        )
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return json.dumps({'code': 'failure', 'message': str(e)})
    return json.dumps({'code': 'success'})


@application.route("/api/login", methods=["POST"])
def login():
    try:
        post_data = request.data
        response = json.loads(post_data)
        email = response['email']
        password = response['password']
        user = User.query.filter_by(email=email).first()
        if user is None:
            return json.dumps({'code': 'no_user'})
        if not user.check_password(password):
            return json.dumps({'code': 'incorrect_password'})
        token = user.encode_auth_token().decode()
        user.token = token
        g.user = user
    except:
        return json.dumps({'code': 'failure'})
    return json.dumps({
        'code': 'success',
        'token': user.token,
        'name': user.name,
        'formIndex': user.study_index,
        'questionIndex': user.question_index,
    })


@application.route("/api/updateuser", methods=["POST"])
@auth.login_required
def update_user():
    try:
        request_data = request.data
        User.query.filter_by(id=g.user.id).update(json.loads(request_data))
        db.session.commit()
        return json.dumps({'code': 'success'})
    except:
        return json.dumps({'code': 'failure'})


@application.route("/api/updatepassword", methods=["POST"])
@auth.login_required
def update_password():
    try:
        request_data = request.data
        request_dict = json.loads(request_data)
        user = User.query.filter_by(id=g.user.id).first()
        user.set_password(request_dict['new_password'])
        db.session.commit()
        return json.dumps({'code': 'success'})
    except Exception as e:
        return json.dumps({'code': 'failure', 'message': str(e)})


@application.route('/api/posttofile', methods=['POST'])
def post_to_file():
    forms_data = request.data  # stringified json from POST request
    forms = json.loads(forms_data)
    json_file = json.dumps(forms)  # json dump of request data
    # open forms.json with write access
    f = open('app/static/forms.json', 'w+')
    f.write(json_file)  # write json to open file
    return 'Successfully loaded forms.json into database'


@application.route('/api/filetodb', methods=['GET'])
def file_to_db():
    try:
        with application.open_resource('static/forms.json') as json_file:
            all_forms = json.load(json_file)

        for form in all_forms:
            new_form = Form(**form)
            db.session.add(new_form)
            db.session.commit()

        curr_forms = Form.query.all()
        i = 0
        for form in curr_forms:
            i += 1
            print(form.name)
        return str(i) + ' total forms added into database'
    except Exception as e:
        return str(e)


@application.route('/api/formtoschema', methods=['GET'])
def form_to_schema():
    with application.open_resource('static/forms.json') as json_file:
        data = json.load(json_file)

    forms = []

    for x in data:
        form = {}
        form['name'] = x['name']
        question_keys = []
        for question in x['fields']:
            question_keys.append(question['key'])
        form['columns'] = question_keys
        forms.append(form)

    json_file = json.dumps(forms)

    f = open('app/static/form_schema.json', 'w+')
    f.write(json_file)
    return 'Good'


@application.route('/api/eligible', methods=['POST'])
def check_eligibility():
    try:
        options = {'dryness', 'breathing', 'trembling',
                   'worry', 'panic', 'heart', 'scared'}
        response_json = request.data
        response_dict = json.loads(response_json)
        if not response_dict['over18']:
            return json.dumps({'eligible': False})
        sum = 0
        total = 0
        for option in options:
            if response_dict[option] != 555:
                sum += response_dict[option]
                total += 1
        if total == 0:
            return json.dumps({'eligible': False})
        return json.dumps({'eligible': sum / total * 14 > 10})
    except Exception as e:
        return json.dumps({'code': 'failure', 'message': str(e)})


@application.route('/api/allforms', methods=['GET'])
@auth.login_required
def get_all_forms():
    try:
        form_query = Form.query.all()  # query all forms in the database
        all_forms = []  # empty array to insert forms into
        for form in form_query:  # for each form returned from the query
            all_forms.append({  # add on the form
                'name': form.name,  # name of form
                'title': form.title,  # title of form
                'description': form.description,  # description of form
                # fields is a string, so needs to be json loaded into object
                'fields': json.loads(form.fields),
            })
        return json.dumps({
            'code': 'success',
            'forms': all_forms
        })
    except:
        return json.dumps({'code': 'failure'})


@application.route('/api/progress', methods=['GET'])
@auth.login_required
def progress():
    try:
        user = User.query.filter_by(id=g.user.id).first()
        print('user is at q', user.question_index)
        form_query = Form.query.all()
        all_forms = []
        for form in form_query:
            all_forms.append({
                'name': form.name,
                'title': form.title,
                'description': form.description,
                'fields': form.fields,
            })
        return json.dumps({
            'code': 'success',
            'formIndex': user.study_index,
            'questionIndex': user.question_index,
            'forms': all_forms
        })

    except Exception as e:
        return json.dumps({'code': 'failure', 'message': str(e)})


@application.route('/api/nextform', methods=['POST'])
@auth.login_required
def next_form():
    try:
        with application.open_resource('static/form_schema.json') as json_file:
            schema_json = json.load(json_file)
        response_json = request.data
        response_dict = json.loads(response_json)
        study_index = response_dict['formIndex']
        old_index = study_index - 1
        form_name = schema_json[old_index]['name']
        answers_row = tables[form_name +
                             'Answers'].query.filter_by(user_id=g.user.id).first()
        answers_row.complete = True
        print(answers_row.complete)
        updated_user = User.query.filter_by(id=g.user.id).first()
        updated_user.study_index = study_index
        updated_user.question_index = -1
        db.session.commit()
        return json.dumps({'code': 'success', 'new_form_index': study_index, 'complete': answers_row.complete})
    except Exception as e:
        return json.dumps({'code': 'failure', 'message': str(e)})


@application.route('/api/saveanswers', methods=['POST'])
@auth.login_required
def save_answers():
    try:
        response_json = request.data
        response_dict = json.loads(response_json)
        form_name = response_dict['name'] + 'Answers'
        answers_dict = response_dict['answers']
        question_index = response_dict['questionIndex']
        answers_dict['user_id'] = g.user.id
        form_class = tables[form_name]
        stored_answers = form_class.query.filter_by(user_id=g.user.id).first()
        updated_user = User.query.filter_by(id=g.user.id).first()
        updated_user.question_index = question_index
        db.session.commit()
        if stored_answers is None:
            answers = form_class(**answers_dict)
            db.session.add(answers)
            db.session.commit()
            return json.dumps({
                'code': 'success',
                'message': 'saved first answer',
                'updatedQIndex': updated_user.question_index
            })
        else:
            form_class.query.filter_by(
                user_id=g.user.id).update(answers_dict)
            db.session.commit()
            return json.dumps({
                'code': 'success',
                'message': 'updated answers',
                'updatedQIndex': updated_user.question_index
            })

    except Exception as e:
        return json.dumps({'code': 'failure', 'message': str(e)})


@application.route('/api/resetprogress', methods=['GET'])
def reset():
    users = User.query.all()
    for user in users:
        user.study_index = 0
        user.question_index = -1
        db.session.commit()
    for key in tables:
        answers = tables[key].query.all()
        for a in answers:
            db.session.delete(a)
            db.session.commit()
    return 'reset user progress'
