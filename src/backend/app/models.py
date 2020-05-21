from app import application, db, bcrypt
import datetime
import json
import jwt


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    email = db.Column(db.String(64), unique=True)
    phone = db.Column(db.String(64), unique=True)
    email_reminders = db.Column(db.Boolean)
    text_messages = db.Column(db.Boolean)
    text_reminders = db.Column(db.Boolean)
    gift_cards = db.Column(db.Boolean)
    password_hash = db.Column(db.String(256))
    date_registered = db.Column(db.DateTime)
    study_index = db.Column(db.Integer)
    question_index = db.Column(db.Integer)
    token = ''

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(
            password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def encode_auth_token(self):
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2),
            'sub': self.id
        }
        return jwt.encode(payload, application.config.get('SECRET_KEY'), algorithm='HS256')

    @staticmethod
    def decode_auth_token(token):
        payload = jwt.decode(token, application.config.get(
            'SECRET_KEY'), algorithms='HS256')
        return payload['sub']


class Form(db.Model):
    name = db.Column(db.String(140), primary_key=True)
    title = db.Column(db.String(140))
    description = db.Column(db.String(140))
    fields = db.Column(db.JSON)


with application.open_resource('static/form_schema.json') as json_file:
    schema_json = json.load(json_file)
answers_classes = []
for form in schema_json:
    table_name = form['name'] + 'Answers'
    columns = {
        '__tablename__': table_name,
        'id': db.Column(db.Integer, primary_key=True),
        'complete': db.Column(db.Boolean, default=False),
        'user_id': db.Column(db.Integer, db.ForeignKey('user.id'), unique=True),
    }
    for key in form['columns']:
        columns[key] = db.Column(db.JSON)
    answer_class = type(table_name, (db.Model,), columns)
    answers_classes.append(answer_class)
db.create_all()
tables = {}
for answer_class in answers_classes:
    tables[answer_class.__tablename__] = answer_class
