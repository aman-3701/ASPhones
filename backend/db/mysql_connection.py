import pymysql

import os

MYSQL_HOST = os.environ.get('MYSQL_HOST', 'database-1.c50eqi0c2eg3.ap-south-1.rds.amazonaws.com')
MYSQL_USER = os.environ.get('MYSQL_USER', 'admin')
MYSQL_PASSWORD = os.environ.get('MYSQL_PASSWORD', 'root12345')
MYSQL_DB = os.environ.get('MYSQL_DB', 'aman')
MYSQL_SSL_CA = os.environ.get('MYSQL_SSL_CA', 'aman.pem')

def get_connection():
    return pymysql.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        db=MYSQL_DB,
        ssl_ca=MYSQL_SSL_CA,
        port=3306,
        cursorclass=pymysql.cursors.DictCursor
    )
