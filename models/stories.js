const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });


module.exports = mongoose.model("Story", storySchema);
