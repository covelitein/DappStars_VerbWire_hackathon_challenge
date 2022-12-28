import mysql.connector
from config import USER, PASSWORD, HOST, DATABASE


def save_data(name, description, price, image):
    with mysql.connector.connect(
        user=USER,
        password=PASSWORD,
        host=HOST,
        database=DATABASE
    ) as cnx:
            with cnx.cursor() as cursor:
                query = 'INSERT INTO stars (name, description, price, image) VALUES (%s, %s, %s, %s)'
                cursor.execute(query, (name, description, price, image))
                cnx.commit()

def get_data(one=False):
    with mysql.connector.connect(
        user=USER,
        password=PASSWORD,
        host=HOST,
        database=DATABASE
    ) as cnx:
            with cnx.cursor() as cursor:
                cursor.execute("SELECT * FROM stars")
                result = [dict((cursor.description[i][0], value) \
                    for i, value in enumerate(row)) for row in cursor.fetchall()]
            return (result[0] if result else None) if one else result
