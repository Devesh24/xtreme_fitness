import { Schema, model, models } from "mongoose";

const ExerciseSchema = new Schema({
    name: {type: String, required: true, unique: true},
    target: {type: String, required: true},
    secondaryTargets: {type: Array, required: true},
    equipments: {type: Array, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    videoUrl: {type: String, required: true},
    forceType: {type: String, required: true},
})

const Exercise = models.Exercise || model('Exercise', ExerciseSchema)

export default Exercise;