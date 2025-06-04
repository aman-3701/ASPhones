import datetime
import azure.functions as func
import json
import logging
from db.mysql_connection import get_connection  
import os
# your MySQL connection helper
api = os.environ.get("api")

def default_serializer(obj):
    if isinstance(obj, (datetime.date, datetime.datetime)):
        return obj.isoformat()
    raise TypeError(f"Type {type(obj)} not serializable")

def get_mobile(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Fetching all mobiles')

    def cors_response(body, status_code=200):
        if isinstance(body, (dict, list)):
            body = json.dumps(body, default=default_serializer)
        return func.HttpResponse(
            body,
            status_code=status_code,
            headers={
               'Access-Control-Allow-Origin': '${api}',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Content-Type': 'application/json',
            }
        )

    if req.method == 'OPTIONS':
        return cors_response({}, 204)

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM mobiles")
        mobiles = cursor.fetchall()
        cursor.close()
        conn.close()

        return cors_response(mobiles, 200)

    except Exception as e:
        logging.error(f"Database error: {e}")
        return cors_response({"message": "Database error"}, 500)
