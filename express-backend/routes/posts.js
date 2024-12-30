const express = require('express');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/postController');

// GET /api/users - Get all users
router.get('/', getAllPosts);

// POST /api/users - Create a new user
router.post('/', createPost);

module.exports = router;