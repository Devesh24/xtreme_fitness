const { Schema, models, model } = require("mongoose");

const BlogSchema = new Schema({
    title: {type: String, unique: true, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    author: {type: String, required: true},
    imageUrl: {type: String, required: true},
    createdAt: {type: Date, required: true}
})

const Blog = models.Blog || model('Blog', BlogSchema)

export default Blog;