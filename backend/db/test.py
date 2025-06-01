import mysql.connector
from mysql.connector import Error

def test():
    try:
        connection = mysql.connector.connect(
            host='database-1.c50eqi0c2eg3.ap-south-1.rds.amazonaws.com',       # e.g. 'localhost' or IP address
            user='admin',
            password='root12345',
            database='aman'
        )
        
        if connection.is_connected():
            print("Successfully connected to MySQL database")
            connection.close()
    except Error as e:
        print(f"Error while connecting to MySQL: {e}")

if __name__ == "__main__":
    test()
