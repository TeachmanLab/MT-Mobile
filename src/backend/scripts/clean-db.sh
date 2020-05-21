#!/bin/bash
source venv/bin/activate
export FLASK_ENV=development
rm app.db
rm -rf migrations
flask db init
flask db migrate -m "Initial migrate"
flask db upgrade
deactivate