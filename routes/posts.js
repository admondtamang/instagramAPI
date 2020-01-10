const express = require("express");
const router = express.Router();
const auth = require("../auth");
const Post = require("../models/posts");


router.route('/').get((req, res, next) => {
    Post.find({}).then(post => {
        res.json(post);
    }).catch(next);
})
    .post((req, res, next) => {
        let post = new Post(req.body);
        // post.authorId = req.user._id;
        // post.authorPic = req.user.authorPic;
        post.save().then(post => {
            res.statusCode = 201;
            res.json(post);
        }).catch(next);
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.json({ message: "Method not supported" });
    })
    .delete((req, res, next) => {
        Task.deleteMany({ author: req.user._id })
            .then((reply) => {
                res.json(reply);
            }).catch(next);
    });


router.route('/:id')
    .get((req, res, next) => {
        Post.findById(req.params.id)
            .then((post) => {
                //In case of post being null
                if (post == null) throw new Error("Post not found");
                res.statusCode = 200;
                res.json(post);
            }).catch(next);
    })
    .post((req, res) => {
        res.statusCode = 405;
        res.json("Sorry! Cannot post here");
    })
    .put(auth.verifyUser, (req, res, next) => {
        Post.findByIdAndUpdate({ _id: req.params.id, postBy: req.user._id }, { $set: req.body }, { new: true })
            .then((post) => {
                if (post == null) throw new Error("Post not found");

                res.json(post);
            }).catch(next);
    })
    .delete();



module.exports = router;