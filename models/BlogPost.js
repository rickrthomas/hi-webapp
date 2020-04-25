const mongoose = require ('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema ({
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '7d' },
      },
      
    first: String,
    last: String,
    condition: String,
    gender: String,
    age: String,
    city: String,
    region: String,
    country: String,
    description: String,
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