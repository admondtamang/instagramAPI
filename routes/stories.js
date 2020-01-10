const express = require("express");
const router = express.Router();
const auth = require("../auth");
const Story = require("../models/stories");


router.route('/').get((req, res, next) => {
    Story.find({}).then(story => {
        res.json(story);
    }).catch(next);
})
    .post((req, res, next) => {
        let story = new Story(req.body);
        story.save()
            .then((story) => {
                res.statusCode = 201;
                res.json(story);
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

module.exports = router;