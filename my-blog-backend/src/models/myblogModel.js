import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    datePublished: {
        type: Date,
        default: Date.now,
    },
    dateModified: {
        type: Date,
        default: Date.now,
    },
    contentLocation: {
        type: String,
    },
    author: {
        type: String,
    },
    publisher: {
        type: String,
    },
    tags: {
        type: [String],
    },
    upvotes: {
        type: Number,
    },
    articleSection: {
        type: String,
    },
    articleBody: {
        type: String,
    },
    comments: {
        type: [{
            username: String,
            text: String,
        }],
    },
});

export default ArticleSchema;
