import { Schema, model, models } from "mongoose";

const ExerciseSchema = new Schema({
    name: {type: String, required: true, unique: true},
    target: {type: String, required: true},
    equipment: {type: String, required: true},
    forceType: {type: String, required: true},
    secondaryTarget: {type: String, required: true},
    excImage: {type: String, required: true},
    excVideo: {type: String, required: true},
    description: {type: String, required: true},
})

const Exercise = models.Exercise || model('Exercise', ExerciseSchema)

export default Exercise;