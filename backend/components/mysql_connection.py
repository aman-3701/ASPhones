import os
import pymysql
import logging
from dotenv import load_dotenv


load_dotenv()


MYSQL_HOST = os.getenv('DB_HOST')
MYSQL_USER = os.getenv('DB_USER')
MYSQL_PASSWORD = os.getenv('DB_PASSWORD', '')
MYSQL_PORT = int(os.getenv('DB_PORT', 3306))  # Default MySQL port is 3306
MYSQL_DB = os.getenv('DB_NAME', '')
MYSQL_SSL_CA = os.getenv('MYSQL_SSL_CA')  # Can be None if not using SSL

def get_connection():
    ssl = {'ca': MYSQL_SSL_CA} if MYSQL_SSL_CA else None
    try:
        connection = pymysql.connect(
            host=MYSQL_HOST,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            db=MYSQL_DB, 
            port=MYSQL_PORT,
            ssl=None,
            cursorclass=pymysql.cursors.DictCursor
        )
        print("Successfully connected to the database!")
        return connection

    except KeyError as e:
        logging.error(f"Missing MySQL config key: {e}")
        raise Exception(f"Missing MySQL config key: {e}")

    except pymysql.MySQLError as e:
        logging.error(f"MySQL connection error: {e}")
        raise

if __name__ == "__main__":
    conn = get_connection()
    # Example query:
    with conn.cursor() as cursor:
        cursor.execute("SELECT VERSION()")
        result = cursor.fetchone()
        print("Database version:", result)
    conn.close()


# Ensure the connection is closed properly
# if __name__ == "__main__":