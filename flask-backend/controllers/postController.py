from MySQLdb.cursors import DictCursor

def get_all_posts(mysql):
    cursor = mysql.connection.cursor(DictCursor)
    cursor.execute("SELECT * FROM posts;")  # Replace with your table name
    posts = cursor.fetchall()
    cursor.close()
    return posts

def create_post(mysql, post_data):
    title = post_data.get('title')
    date = post_data.get('date')
    label = post_data.get('label')
    description = post_data.get('description')
    if not title or not date or not label or not description:
        return {"error": "Title, date, label and description are required"}, 400

    cursor = mysql.connection.cursor()
    cursor.execute('INSERT INTO posts (post_title, post_date, post_label, post_description) VALUES (%s, %s, %s, %s);', (title, date, label, description))
    mysql.connection.commit()
    cursor.close()

    return {"message": "Post created successfully"}, 201