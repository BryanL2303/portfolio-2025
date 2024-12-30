import os
import mysql.connector
from flask import Flask
from flask import Blueprint, request, jsonify

posts = Blueprint('posts', __name__)

app = Flask(__name__)

def get_db_connection():
    connection = mysql.connector.connect(
        host=os.getenv('MYSQL_HOST'),
        user=os.getenv('MYSQL_USER'),
        password=os.getenv('MYSQL_PASSWORD'),
        database=os.getenv('MYSQL_DATABASE'),
    )
    return connection

@app.route('/')
def home():
    return "Hello from Flask on Lambda!"

@app.route('/api/posts', methods=['GET'])
def fetch_posts():
    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM posts;")
        result = cursor.fetchall()
        cursor.close()
        connection.close()
    return jsonify({"data": result}),200

@app.route('/api/posts', methods=['POST'])
def add_post():
    connection = get_db_connection()
    data = request.json  # Parse the JSON payload
    title = data.get('title')
    date = data.get('date')
    label = data.get('label')
    description = data.get('description')

    with connection.cursor() as cursor:
        connection.body()
        cursor.execute(
            'INSERT INTO posts (post_title, post_date, post_label, post_description) VALUES (%s, %s, %s, %s);',
            (title, date, label, description)
        )
        result = cursor.fetchall()
    return jsonify({"data": result}),200