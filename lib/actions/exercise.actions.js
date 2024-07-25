"use server"

import { connectToDatabase } from "../database"
import Exercise from "../database/models/exercise.model"
import { handleError } from "../utils"

export const createExercise = async (exercise) => {
    try {
        await connectToDatabase()

        const newExercise = await Exercise.create(exercise)
        if(!newExercise) throw new Error('Exercise creation Failed')

        return JSON.parse(JSON.stringify(newExercise))
    } catch (error) {
        handleError(error)
    }
}

export const updateExercise = async (id, exercise) => {
    try {
        await connectToDatabase()

        const newExercise = await Exercise.findByIdAndUpdate(id, exercise, {
            new: true,
        })
        if(!newExercise) throw new Error('Exercise updation Failed')

        return JSON.parse(JSON.stringify(newExercise))
    } catch (error) {
        handleError(error)
    }
}

export const getExercises = async (query) => {
    try {
        await connectToDatabase()

        const condition = query ? { name: { $regex: query, $options: 'i' } } : {}
        const exercises = await Exercise.find(condition).limit(3)

        return JSON.parse(JSON.stringify(exercises))
    } catch (error) {
        console.log(error);
    }
}

export const getExercisesByMuscle = async (muscle) => {
    try {
        await connectToDatabase()

        const exercises = await Exercise.find({target: muscle})
        return JSON.parse(JSON.stringify(exercises))
    } catch (error) {
        console.log(error);
    }
}

export const getExerciseById = async (id) => {
    try {
        await connectToDatabase()

        const exercise = await Exercise.findById(id)
        return JSON.parse(JSON.stringify(exercise))
    } catch (error) {
        console.log(error);
    }
}