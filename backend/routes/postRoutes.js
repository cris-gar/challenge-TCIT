const express = require('express');

let router = express.Router();

let postController = require('../controllers/PostController');

router.route('/').get(postController.index);

module.exports = router;