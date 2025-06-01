import datetime
import azure.functions as func
import json
import logging
from db.mysql_connection import get_connection  # your MySQL connection helper

def default_serializer(obj):
    if isinstance(obj, (datetime.date, datetime.datetime)):
        return obj.isoformat()
    raise TypeError(f"Type {type(obj)} not serializable")

def get_mobile(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Fetching all mobiles')

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM mobiles")
        mobiles = cursor.fetchall()
        cursor.close()
        conn.close()

        return func.HttpResponse(
            json.dumps(mobiles, default=default_serializer),  
            status_code=200,
            mimetype="application/json"
        )

    except Exception as e:
        logging.error(f"Database error: {e}")
        return func.HttpResponse("Database error", status_code=500)
