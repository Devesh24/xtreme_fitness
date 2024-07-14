"use server"

import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import { handleError } from "../utils"

const createUser = async (user) => {
    try{
        await connectToDatabase()

        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    }
    catch(err){
        handleError(err)
    }
}

const updateUser = async (clerkId, user) => {
    try {
        await connectToDatabase()
        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
            new: true,
        });
    
        if (!updatedUser) throw new Error("User update failed");
        return JSON.parse(JSON.stringify(updatedUser));
    } catch (error) {
        handleError(error)
    }
}

const deleteUser = async (clerkId) => {
    try {
        await connectToDatabase()
        const userToDelete = await User.findOne({ clerkId });

        if (!userToDelete) {
            throw new Error("User not found");
        }

        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath("/");

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;

        //this route is to be updated afterwards to delete anything if user is connected to other db
    } catch (error) {
        handleError(error)
    }
}