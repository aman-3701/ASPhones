import azure.functions as func
import logging
import bcrypt
from db.mysql_connection import get_connection

def handle_signup(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing signup request')

    name = req.params.get('name')
    password = req.params.get('password')

    if not name:
        try:
            req_body = req.get_json()
            name = req_body.get('name')
            password = req_body.get('password')
        except ValueError:
            return func.HttpResponse("Invalid JSON body", status_code=400)

    if not name or not password:
        return func.HttpResponse("Name and password are required", status_code=400)

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM users WHERE name = %s", (name,))
        if cursor.fetchone():
            cursor.close()
            conn.close()
            return func.HttpResponse("User already exists", status_code=400)

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        cursor.execute("INSERT INTO users (name, password) VALUES (%s, %s)", (name, hashed_password))
        conn.commit()

        cursor.close()
        conn.close()
        return func.HttpResponse("User created successfully", status_code=201)

    except Exception as e:
        logging.error(f"Database error: {e}")
        return func.HttpResponse(f"Database error: {e}", status_code=500)
