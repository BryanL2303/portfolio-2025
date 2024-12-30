import json
from app import app  # Import the Flask app from the main backend app

def lambda_handler(event, context):
    """Handles requests from API Gateway and forwards them to Flask."""
    # Create a test request context for Flask
    with app.test_request_context(path=event['path'], method=event['httpMethod'], data=event.get('body')):
        # Dispatch the request to Flask (which will route to the correct view function)
        response = app.full_dispatch_request()

    # Return the Flask response as a Lambda response
    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': response.data.decode('utf-8')
        }),
        'headers': {
            'Content-Type': 'application/json'
        }
    }