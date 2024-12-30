import os
from dotenv import load_dotenv
import mysql.connector

# Load environment variables
load_dotenv()

def create_app():
    from flask import Flask
    app = Flask(__name__)
    app.config['DEBUG'] = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

    # Create a database connection
    # connection = mysql.connector.connect(
    #     host=os.getenv('MYSQL_HOST'),
    #     user=os.getenv('MYSQL_USER'),
    #     password=os.getenv('MYSQL_PASSWORD'),
    #     database=os.getenv('MYSQL_DATABASE'),
    # )

    try:
        connection = mysql.connector.connect(
            host=os.getenv('MYSQL_HOST'),
            user=os.getenv('MYSQL_USER'),
            password=os.getenv('MYSQL_PASSWORD'),
            database=os.getenv('MYSQL_DATABASE'),
        )
        print("Connection successful!")
    except Exception as e:
        print(f"Connection failed: {e}")

    # # MySQL configurations
    # app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
    # app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
    # app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
    # app.config['MYSQL_DB'] = os.getenv('MYSQL_DATABASE')

    return app, connection