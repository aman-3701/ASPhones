import datetime
import azure.functions as func
import json
import logging
from db.mysql_connection import get_connection


def default_serializer(obj):
    if isinstance(obj, (datetime.date, datetime.datetime)):
        return obj.isoformat()
    raise TypeError(f"Type {type(obj)} not serializable")


def get_mobile_id(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Fetching mobile(s)')

    try:
        mobile_id = req.params.get('id')

        conn = get_connection()
        cursor = conn.cursor()

        if mobile_id:
            cursor.execute("SELECT * FROM mobiles WHERE id = %s", (mobile_id,))
            mobile = cursor.fetchone()
            cursor.close()
            conn.close()

            if mobile:
                return func.HttpResponse(
                    json.dumps(mobile),
                    status_code=200,
                    mimetype="application/json"
                )
            else:
                return func.HttpResponse("Mobile not found", status_code=404)

        else:
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
