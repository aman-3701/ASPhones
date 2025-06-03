import pymysql
import os

# Defensive: log missing env vars and use defaults
MYSQL_HOST = os.environ.get('MYSQL_HOST', 'database-1.c50eqi0c2eg3.ap-south-1.rds.amazonaws.com')
MYSQL_USER = os.environ.get('MYSQL_USER', 'admin')
MYSQL_PASSWORD = os.environ.get('MYSQL_PASSWORD', 'root12345')
MYSQL_DB = os.environ.get('MYSQL_DB', 'aman')
MYSQL_SSL_CA = os.environ.get('MYSQL_SSL_CA', 'aman.pem')

def get_connection():
    try:
        return pymysql.connect(
            host=MYSQL_HOST,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            db=MYSQL_DB,
            ssl_ca=MYSQL_SSL_CA,
            port=3306,
            cursorclass=pymysql.cursors.DictCursor
        )
    except KeyError as e:
        import logging
        logging.error(f"Missing MySQL config key: {e}")
        raise Exception(f"Missing MySQL config key: {e}")
    except Exception as e:
        import logging
        logging.error(f"MySQL connection error: {e}")
        raise
