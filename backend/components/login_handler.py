import json
import azure.functions as func
import logging
import bcrypt
from mysql_connection import get_connection
import os
api = os.environ.get("api")

def handle_login(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing login request')

    def cors_response(body, status_code=200):
        if isinstance(body, dict):
            body = json.dumps(body)
        return func.HttpResponse(
            body,
            status_code=status_code,
            headers={
                'Access-Control-Allow-Origin': '${api}',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Content-Type': 'application/json',
            }
        )

    if req.method == 'OPTIONS':
        return cors_response({}, 204)

    try:
        req_body = req.get_json()
        name = req_body.get('name')
        password = req_body.get('password')
    except ValueError:
        return cors_response({"message": "Invalid JSON"}, 400)

    if not name or not password:
        return cors_response({"message": "Name and password are required"}, 400)

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM users WHERE name = %s", (name,))
        result = cursor.fetchone()
        logging.info(f"Query result for user '{name}': {result}")
        cursor.close()
        conn.close()

        if result:
            stored_hashed_password = result['password']  # ✅ Fixed line
            if bcrypt.checkpw(password.encode('utf-8'), stored_hashed_password.encode('utf-8')):
                return cors_response({"message": "Login successful"}, 200)
            else:
                return cors_response({"message": "Invalid credentials"}, 401)
        else:
            return cors_response({"message": "User not found"}, 404)

    except Exception as e:
        logging.exception("Database exception occurred during login")
        return cors_response({"message": f"Database error: {str(e)}"}, 500)
