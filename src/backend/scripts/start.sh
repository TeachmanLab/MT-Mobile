#!/bin/bash
source venv/bin/activate
export FLASK_ENV=development
pip3 install -r scripts/requirements.txt
flask run
deactivate