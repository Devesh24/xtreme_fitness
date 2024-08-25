"use server"

import { connectToDatabase } from "../database"
import Blog from "../database/models/blog.model"
import { handleError } from "../utils"

export const createBlog = async (blog) => {
    try {
        await connectToDatabase()

        const newBlog = await Blog.create(blog)
        if(!newBlog) throw new Error('Blog creation Failed')

        return JSON.parse(JSON.stringify(newBlog))
    } catch (error) {
        handleError(error)
    }
}

export const updateBlog = async (id, blog) => {
    try {
        await connectToDatabase()

        const newBlog = await Blog.findByIdAndUpdate(id, blog, {
            new: true,
        })
        if(!newBlog) throw new Error('Blog updation Failed')

        return JSON.parse(JSON.stringify(newBlog))
    } catch (error) {
        handleError(error)
    }
}

export const getBlogs = async () => {
    try {
        await connectToDatabase()

        // const condition = query ? { name: { $regex: query, $options: 'i' } } : {}
        const blogs = await Blog.find()

        return JSON.parse(JSON.stringify(blogs))
    } catch (error) {
        handleError(error);
    }
}