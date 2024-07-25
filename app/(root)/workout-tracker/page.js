"use client"

import { useEffect, useState } from "react"
import { getAllMuscleGroups } from "@/lib/actions/muscleGroup.actions"
import MuscleCard from "@/components/shared/MuscleCard"
import { Separator } from "@/components/ui/separator"
import Search from "@/components/shared/Search"
import { getExercises } from "@/lib/actions/exercise.actions"
import ExerciseCard from "@/components/shared/ExerciseCard"

const WorkoutTracker = () => {
    const [muscleData, setMuscleData] = useState([])
    const [exerciseData, setExerciseData] = useState([])
    const [muscleQuery, setMuscleQuery] = useState("")
    const [exerciseQuery, setExerciseQuery] = useState("")
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllMuscleGroups(muscleQuery)
                setMuscleData(data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[muscleQuery])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getExercises(exerciseQuery)
                setExerciseData(data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[exerciseQuery])

  return (
    <>
        <div className='relative top-0 w-full h-screen bg-cover bg-right text-white flex items-center justify-center lg:justify-start px-10' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('/assets/images/wtHome.jpg')"}}>
            <div className="flex flex-col items-center lg:w-[50%] w-full">
                <p className="h1-bolder text-center mt-20">WORKOUT TRACKER</p>
                <Separator className="w-[80%] my-2" />
                <p className="text-center p-bold-20 lg:p-bold-24 tracking-wide mt-2 w-[80%]">Elevate Your Fitness Journey: Track, Train, Transform!</p>
            </div>
        </div>

        <div className="py-16 relative min-h-screen overflow-hidden">
            <div className="wrapper flex-center flex-col gap-1 md:gap-2">
                <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>WORKOUTS</h2>
                <h1 className='h2-bold text-center mb-4'>POPULAR EXERCISES</h1>
                <Search placeholder={"Search Exercise..."} setQuery={setExerciseQuery} />
                <div className="flex-center flex-wrap gap-8 mt-8 w-full z-10">
                    {
                        exerciseData.map((exercise) => (
                            <ExerciseCard key={exercise._id} exercise={exercise} />
                        ))
                    }
                </div>
            </div>
            <div className="hidden lg:block rounded-full w-[28vw] aspect-square border-[60px] border-red-400 absolute top-20 -left-40"></div>
            <div className="hidden lg:block rounded-full w-[45vw] aspect-square border-[70px] border-red-400 absolute xl:top-24 lg:top-40 xl:-right-[34rem] lg:-right-[24rem]"></div>
        </div>
        <div className="bg-red-50 bg-dotted-pattern py-16">
            <div className="wrapper flex-center flex-col gap-1 md:gap-2">
                <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>WORKOUTS</h2>
                <h1 className='h2-bold text-center mb-4'>EXERCISES BY MUSCLE GROUP</h1>
                <Search placeholder={"Search Muscle Group..."} setQuery={setMuscleQuery} />
                <div className="flex-center flex-wrap gap-8 mt-8 w-full">
                    {
                        muscleData.map((muscle) => (
                            <MuscleCard key={muscle._id} muscle={muscle} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkoutTracker