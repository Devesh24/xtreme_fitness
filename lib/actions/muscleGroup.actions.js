"use server"

import { connectToDatabase } from "../database"
import MuscleGroup from "../database/models/muscleGroup.model"
import { handleError } from "../utils"

export const createMuscleGroup = async (muscle) => {
    try {
        await connectToDatabase()

        const newMuscle = await MuscleGroup.create(muscle)
        if(!newMuscle) throw new Error("Muscle Insertion failed");
        
        return JSON.parse(JSON.stringify(newMuscle))
    } catch (error) {
        handleError(error)
    }
}

export const getAllMuscleGroups = async (query) => {
    try {
        await connectToDatabase()

        const titleCondition = query ? { muscle: { $regex: query, $options: 'i' } } : {}

        const allMuscleGroups = await MuscleGroup.find(titleCondition).sort({ muscle: 1 })
        return JSON.parse(JSON.stringify(allMuscleGroups))
    } catch (error) {
        handleError(error)
    }
}

export const getMuscleArray = async (muscleArray) => {
    try {
        await connectToDatabase()

        const muscleGrps = await MuscleGroup.find({
            muscle: { $in: muscleArray }
        })
        return JSON.parse(JSON.stringify(muscleGrps))
    } catch (error) {
        handleError(error);
    }
}