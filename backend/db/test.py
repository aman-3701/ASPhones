import pymysql

try:
    conn = pymysql.connect(
        host='database-1.c50eqi0c2eg3.ap-south-1.rds.amazonaws.com',
        user='admin',
        password='root12345',
        db='aman',
        ssl_ca='aman.pem',  # Make sure this file exists and is valid
        port=3306
    )
    print("✅ Connection successful!")

    cursor = conn.cursor()
    cursor.execute("SELECT VERSION()")
    version = cursor.fetchone()
    print("MySQL version:", version[0])

    cursor.close()
    conn.close()

except Exception as e:
    print("❌ Connection failed:", e)
