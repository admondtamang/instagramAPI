const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: {
        type: String
    },
    caption: {
        type: String
    },
    authorName: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    authorPic: {
        type: String
    }
}, { timestamps: true });


module.exports = mongoose.model("Post", postSchema);
