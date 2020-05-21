#!/bin/bash
source venv/bin/activate
export FLASK_ENV=development
flask db migrate -m "Migrating"
flask db upgrade
deactivate