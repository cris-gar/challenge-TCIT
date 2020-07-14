const Post = require('../models').Post
const buildParams = require('./helper').buildParams;

const validParams = ['name', 'description'];

module.exports = {
    index: (req,res) => {
        Post.findAll().then((posts) => {
           res.json(posts)
        });
    },
    create: (req, res) => {
        let params = buildParams(validParams, req.body);
        Post.create(params).then((post) => {
            res.json(post)
        }).catch((error) => res.status(422).json({
            error
        }))
    },
    find: (req, res, next) => {
        Post.findOne({
            where: {
                id:req.params.id
            }
        }).then((post) => {
            req.post = post;
            next()
        }).catch(error => {
            next(error);
        });
    },
    delete: (req, res) => {
        req.post.remove().then((countElementDelete) => {
            res.json(countElementDelete)
        }).catch(error => {
            res.json(error);
        });
    }
}