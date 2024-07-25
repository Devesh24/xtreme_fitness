"use client"

import { slugToTitle } from "@/lib/utils"
import { useEffect, useState } from "react"
import { getExercisesByMuscle } from "@/lib/actions/exercise.actions"
import ExerciseCard from "@/components/shared/ExerciseCard"

const MusclePage = ({params: {muscle}}) => {
    const MuscleGrp = slugToTitle(muscle)

    const [exercises, setExercises] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getExercisesByMuscle(MuscleGrp)
                setExercises(data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[])
    return (
        <>
            <div className='relative top-0 w-full h-[70vh] bg-cover md:bg-center text-white flex-center' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('/assets/images/exercises/${muscle}.jpg')`}}>
                <p className="h1-bolder mt-12">{MuscleGrp}</p>
            </div>
            <div className="wrapper lg:min-h-screen my-16">
                {
                    exercises.map((exercise) => (
                        <ExerciseCard key={exercise._id} exercise={exercise} />
                    ))
                }
            </div>
        </>
    )
}

export default MusclePage