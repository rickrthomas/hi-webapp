const mongoose = require ('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema ({
    title: String,
    body: String,
    last: String,
    gender: String,
    age: String,
    city: String,
    region: String,
    country: String,
    name: String,
    email: String,
    yourname: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const BlogPost = mongoose.model('Blogpost', BlogPostSchema);

module.exports = BlogPost;