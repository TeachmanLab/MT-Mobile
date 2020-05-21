import pytest

from flask import jsonify
import json
import app


@pytest.fixture
def application():
    application = app.app
    return application


@pytest.fixture
def client(application):
    return application.test_client()


def test_main(client):
    assert client.get('/').status_code == 200


def test_json_get(client):
    get_json = client.get('/json').get_json()
    assert get_json['title'] == 'sample json'
    assert get_json['request_method'] == 'GET'


def test_json_post(client):
    get_json = client.post('/json').get_json()
    assert get_json['title'] == 'sample json'
    assert get_json['request_method'] == 'POST'


def test_static_form(client):
    static_form = client.get('/form/static/sample.json').get_json()
    assert static_form['title'] == 'sample static json'


def test_dynamic_form(client):
    dynamic_form = client.get('/form/dynamic/test').get_json()
    assert dynamic_form['title'] == 'sample dynamic json'
    assert dynamic_form['name'] == 'test'
    assert dynamic_form['request_method'] == 'GET'


def test_login(client):
    data = {'username': 'admin', 'password': 'admin'}
    response = client.post('/api/login',
                           data=json.dumps(data),
                           content_type='application/json')
    assert response.json['code'] == 'success'
    assert response.json['username'] == 'admin'


def test_failed_login(client):
    data = {'username': 'admin', 'password': 'wrongpassword'}
    response = client.post('/api/login',
                           data=json.dumps(data),
                           content_type='application/json')
    assert response.json['code'] == 'invalid_input'


def test_eligiblity_check(client):
    data = {
        'dryness': 1,
        'breathing': 1,
        'trembling': 1,
        'worry': 1,
        'panic': 1,
        'heart': 1,
        'scared': 0,
        'over18': True
    }
    response = client.post('/api/eligible',
                           data=json.dumps(data),
                           content_type='application/json')
    assert response.json['code'] == 'success'
    assert response.json['eligible']


def test_failed_eligiblity_check(client):
    data = {
        'dryness': 1,
        'breathing': 1,
        'trembling': 1,
        'worry': 1,
        'panic': 1,
        'heart': 0,
        'scared': 0,
        'over18': True
    }
    response = client.post('/api/eligible',
                           data=json.dumps(data),
                           content_type='application/json')
    assert response.json['code'] == 'success'
    assert not response.json['eligible']


# required element missing
def test_missing_eligiblity_check(client):
    data = {
        # 'dryness': 1, # missing this element
        'breathing': 1,
        'trembling': 1,
        'worry': 1,
        'panic': 1,
        'heart': 1,
        'scared': 0,
        'over18': True
    }
    response = client.post('/api/eligible',
                           data=json.dumps(data),
                           content_type='application/json')
    assert response.json['code'] != 'success'


def test_token_authentication(client):
    data = {'username': 'admin', 'password': 'admin'}
    response = client.post('/api/login',
                           data=json.dumps(data),
                           content_type='application/json')
    headers = {'Authorization': 'Bearer ' + response.json['token']}
    response = client.get('/test/token', headers=headers)
    assert response.json['code'] == 'success'


def test_failed_token_authentication(client):
    data = {'username': 'admin', 'password': 'admin'}
    headers = {'Authorization': 'Bearer falsetoken'}
    response = client.get('/test/token', headers=headers)
    assert response.json['code'] != 'success'
