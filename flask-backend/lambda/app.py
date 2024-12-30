from config import create_app
from routes.posts import configure_routes
from flask_cors import CORS

# Create Flask app and MySQL instance
app, connection = create_app()
CORS(app)

# Register routes
configure_routes(app, connection)

if __name__ == '__main__':
    app.run(debug=True, port=3307)