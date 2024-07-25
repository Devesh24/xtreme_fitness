"use client"

import { slugToTitle } from "@/lib/utils"
import { useEffect, useState } from "react"
import { getExercisesByMuscle } from "@/lib/actions/exercise.actions"
import ExerciseCard from "@/components/shared/ExerciseCard"
import Search from "@/components/shared/Search"

const MusclePage = ({params: {muscle}}) => {
    const MuscleGrp = slugToTitle(muscle)
    const [exerciseQuery, setExerciseQuery] = useState("")
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getExercisesByMuscle(MuscleGrp, exerciseQuery)
                setExercises(data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[exerciseQuery])
    return (
        <>
            <div className='relative top-0 w-full h-[70vh] bg-cover md:bg-center text-white flex-center' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('/assets/images/exercises/${muscle}.jpg')`}}>
                <p className="h1-bolder mt-12">{MuscleGrp}</p>
            </div>
            <div className="py-16 relative min-h-screen overflow-hidden">
            <div className="wrapper flex-center flex-col gap-1 md:gap-2">
                <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>EXERCISES</h2>
                <h1 className='h2-bold text-center mb-4'>{MuscleGrp.toUpperCase()} EXERCISES</h1>
                <Search placeholder={"Search Exercise..."} setQuery={setExerciseQuery} />
                <div className="flex-center flex-wrap gap-8 mt-8 w-full z-10">
                    {
                        exercises.map((exercise) => (
                            <ExerciseCard key={exercise._id} exercise={exercise} />
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default MusclePage