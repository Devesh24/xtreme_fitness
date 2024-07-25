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
        handleError(error);
    }
}

export const getExercisesByMuscle = async (muscle, query) => {
    try {
        await connectToDatabase()

        const searchCondition = query ? { name: { $regex: query, $options: 'i' } } : {}
        const targetCondition = {target: muscle}
        const conditions = {
            $and: [searchCondition, targetCondition],
        }

        const exercises = await Exercise.find(conditions)
        return JSON.parse(JSON.stringify(exercises))
    } catch (error) {
        handleError(error);
    }
}

export const getRelatedExercise = async (muscle, id) => {
    try {
        await connectToDatabase()

        const idCondition = { _id: { $ne: id } }
        const targetCondition = {target: muscle}
        const conditions = {
            $and: [targetCondition, idCondition],
        }

        const exercises = (await Exercise.find(conditions)).slice(0, 2)
        return JSON.parse(JSON.stringify(exercises))
    } catch (error) {
        handleError(error);
    }
}

export const getExerciseById = async (id) => {
    try {
        await connectToDatabase()

        const exercise = await Exercise.findById(id)
        return JSON.parse(JSON.stringify(exercise))
    } catch (error) {
        handleError(error);
    }
}