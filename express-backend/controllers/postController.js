const db = require('../models/db');

// Get all users
const getAllPosts = async (req, res) => {
    try {
        const posts = await db.query('SELECT * FROM posts;');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

// Create a new user
const createPost = async (req, res) => {
    const { title, date, label, description } = req.body;
    try {
        const result = await db.query('INSERT INTO posts (post_title, post_date, post_label, post_description) VALUES (?, ?, ?, ?);', [title, date, label, description]);
        res.status(201).json({ message: 'Post created', postId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

module.exports = { getAllPosts, createPost };