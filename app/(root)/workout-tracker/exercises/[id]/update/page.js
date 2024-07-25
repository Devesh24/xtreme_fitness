"use client"

import { useEffect, useState } from "react";
import { getExerciseById } from "@/lib/actions/exercise.actions"
import ExerciseForm from "@/components/shared/ExerciseForm"

const UpdateExercise = ({params: {id}}) => {
    const [exercise, setExercise] = useState([]);
  useEffect(() => {
    const getExercise = async () => {
      try {
        const data = await getExerciseById(id);
        setExercise(data);
      } catch (error) {
        console.log(error);
      }
    };
    getExercise();
  }, []);

  return (
    <>
      <div className="w-full h-[10vh]"></div>
      <div className="w-full min-h-screen flex-center">
          <ExerciseForm type="Update" exercise={exercise} />
      </div>
    </>
  )
}

export default UpdateExercise