from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_httpauth import HTTPTokenAuth
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import json


application = Flask(__name__)
application.config.from_object(Config)
db = SQLAlchemy(application)
migrate = Migrate(application, db)
bcrypt = Bcrypt(application)
application.config['SECRET_KEY'] = 'secretkey'
auth = HTTPTokenAuth('Bearer')
db.init_app(application)
migrate.init_app(application, db)
from app import models, routes

