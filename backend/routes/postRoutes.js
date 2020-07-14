const express = require('express');
let router = express.Router();

let postController = require('../controllers/PostController');

router.route('/').get(postController.index).post(postController.create);

router.route('/:id').delete(postController.find, postController.delete)

module.exports = router;