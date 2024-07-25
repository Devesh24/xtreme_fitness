"use server"

import { connectToDatabase } from "../database"
import Message from "../database/models/message.model"
import { handleError } from "../utils"

export const createMessage = async (message) => {
    try {
        await connectToDatabase()

        const newMessage = await Message.create(message)
        if(!newMessage) throw new Error("Message not created")

        return JSON.parse(JSON.stringify(newMessage))
    } catch (error) {
        handleError(error)
    }
}

