const express = require('express');
const router = express.Router();
const keys = require('../../config/keys')
const jwt_decode = require('jwt-decode');

// Load required Models/Schema
const User = require('../../models/User');
const Post = require('../../models/Post');



// @route GET api/posts/posts
// @desc View all posts
// @access Public
router.get('/posts', (req, res) => {
	// Set User Token
	const token = req.headers.authorization;

	// Decode jwtToken from headers to find User ID
	const decodedToken = jwt_decode(token, { complete: true })

	// UserId to attach to each post they make
	const userId = decodedToken.id 

	//Query all posts for that contain userId
	
})

// @route POST api/posts/create
// @desc Save new post
// @access Public
router.post('/create', (req, res) => {
	// Set User Token
	const token = req.headers.authorization;

	// Decode jwtToken from headers to find User ID
	const decodedToken = jwt_decode(token, { complete: true })

	// UserId to attach to each post they make
	const userId = decodedToken.id 

	// Find user in database
	User.findById(userId)
		.then(user => {
			if(user) {
				// User ID is valid and contained in database
				
				// Create new Post Model to be saved
				const newPost = new Post({
					userId: user._id,
					title: req.body.title,
					category: req.body.category,
					message: req.body.message
				});

				// Save post to database in Posts collection
				newPost.save()
					.then(post => res.json(post))
					.catch(err => console.log(err))

			} else {
				// User ID is not valid
				return res.status(400).json('This is not a valid user ID')
			}
		})
	
	

	// Add post to "Posts" collection in user document
	
})

module.exports = router;