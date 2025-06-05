import json
import azure.functions as func
import logging
import bcrypt
from mysql_connection import get_connection
import os

api = os.environ.get("api")

def handle_signup(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing signup request')

    def cors_response(body, status_code=200):
        if isinstance(body, dict):
            body = json.dumps(body)
        return func.HttpResponse(
            body,
            status_code=status_code,
            headers={
                'Access-Control-Allow-Origin': "http://65.2.10.18:32001",
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Content-Type': 'application/json',
            }
        )

    if req.method == 'OPTIONS':
        return cors_response({}, 204)

    name = req.params.get('username')
    password = req.params.get('password')

    if not name:
        try:
            req_body = req.get_json()
            name = req_body.get('username')
            password = req_body.get('password')
        except ValueError:
            return cors_response({"message": "Invalid JSON body"}, 400)

    if not name or not password:
        return cors_response({"message": "Name and password are required"}, 400)

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM users WHERE name = %s", (name,))
        if cursor.fetchone():
            cursor.close()
            conn.close()
            return cors_response({"message": "User already exists"}, 400)

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        cursor.execute("INSERT INTO users (name, password) VALUES (%s, %s)", (name, hashed_password))
        conn.commit()

        cursor.close()
        conn.close()
        return cors_response({"message": "User created successfully"}, 201)

    except Exception as e:
        logging.error(f"Database error: {e}")
        return cors_response({"message": f"Database error: {e}"}, 500)
