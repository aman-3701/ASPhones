import azure.functions as func
import logging
import bcrypt
from db.mysql_connection import get_connection

def handle_login(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing login request')

    try:
        req_body = req.get_json()
        name = req_body.get('name')
        password = req_body.get('password')
    except ValueError:
        return func.HttpResponse("Invalid JSON", status_code=400)

    if not name or not password:
        return func.HttpResponse("Name and password are required", status_code=400)

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM users WHERE name = %s", (name,))
        result = cursor.fetchone()

        cursor.close()
        conn.close()

        if result:
            stored_hashed_password = result[0]
            if bcrypt.checkpw(password.encode('utf-8'), stored_hashed_password.encode('utf-8')):
                return func.HttpResponse("Login successful", status_code=200)
            else:
                return func.HttpResponse("Invalid credentials", status_code=401)
        else:
            return func.HttpResponse("User not found", status_code=404)

    except Exception as e:
        logging.error(f"Database error: {e}")
        return func.HttpResponse("Database error", status_code=500)
