import { Schema, model, models } from "mongoose";

const MuscleGroupSchema = new Schema({
    muscle: {type: String, required: true, unique: true},
    imageUrl: {type: String, required: true},
})

const MuscleGroup = models.MuscleGroup || model('MuscleGroup', MuscleGroupSchema)

export default MuscleGroup;