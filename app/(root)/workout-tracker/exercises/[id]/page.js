"use client";

import ExerciseCard from "@/components/shared/ExerciseCard";
import { Separator } from "@/components/ui/separator";
import {
  getExerciseById,
  getRelatedExercise,
} from "@/lib/actions/exercise.actions";
import { getMuscleArray } from "@/lib/actions/muscleGroup.actions";
import Image from "next/image";
import { useEffect, useState } from "react";

const ExercisePage = ({ params: { id } }) => {
  const [exercise, setExercise] = useState([]);
  const [relatedExercises, setRelatedExercises] = useState([]);
  const [targetMuscleData, setTargetMuscleData] = useState({})
  const [secondaryMuscleData, setSecondaryMuscleData] = useState([])

  useEffect(() => {
    const getExercise = async () => {
      try {
        const data = await getExerciseById(id);
        setExercise(data);

        const data2 = await getRelatedExercise(data.target, data._id);
        setRelatedExercises(data2);

        const data3 = await getMuscleArray([data.target, ...data.secondaryTargets])
        setTargetMuscleData(data3.find(obj => obj.muscle === data.target))
        setSecondaryMuscleData(data3.filter(obj => obj.muscle !== data.target))
      } catch (error) {
        console.log(error);
      }
    };
    getExercise();
  }, []);

  return (
    <div>
      <div
        className="relative top-0 w-full h-[70vh] bg-cover md:bg-center text-white flex-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('/assets/images/exercises/${exercise?.target
            ?.toLowerCase()
            .replace(/\s+/g, "-")}.jpg')`,
        }}
      >
        <p className="h1-bolder mt-12">{exercise?.target}</p>
      </div>
      <div className="w-full py-16 relative">
        <div className="wrapper w-full flex flex-wrap justify-between gap-10 lg:gap-20">
          <div className="w-full lg:w-[55%] xl:w-[50%] flex-center flex-col gap-4 lg:gap-7 z-10">
            <p className="h2-bold uppercase text-center text-white mb-4">{exercise.name}</p>
            <iframe
              className="w-full aspect-video mb-2 border-[20px] border-white"
              src={`https://www.youtube.com/embed/${exercise.videoUrl}`}
              title={exercise.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <div className="w-full flex gap-5">
                <p className="p-bold-20 underline min-w-[40%] lg:min-w-[30%] lg:max-w-[30%]">Target Muscle: </p>
                <div className="flex-center flex-col gap-2">
                    <Image src={targetMuscleData.imageUrl} width={200} height={200} />
                    <p className="text-[17px] font-bold uppercase text-blue-600">{targetMuscleData.muscle}</p>
                </div>
            </div>
            <div className="w-full flex gap-5">
                <p className="p-bold-20 underline min-w-[40%] lg:min-w-[30%] lg:max-w-[30%]">Secondary Target Muscles: </p>
                <div className={`flex flex-wrap gap-4 ${secondaryMuscleData.length == 0 && 'items-center'}`}>
                    {
                        secondaryMuscleData.length == 0 ? 
                        <p className="text-[17px] font-bold uppercase text-red-600">None</p>
                        :
                        secondaryMuscleData.map((muscle) => (
                            <div className="flex-center flex-col gap-2" key={muscle._id}>
                                <Image src={muscle.imageUrl} width={200} height={200} />
                                <p className="text-[17px] font-bold uppercase text-blue-600">{muscle.muscle}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex items-center gap-5">
                <p className="p-bold-20 underline w-[40%] lg:w-[30%]">Equipments Required: </p>
                <div className="flex flex-wrap gap-4">
                    {exercise?.equipments?.map((item, ind) => (
                        <p className="text-[17px] font-bold uppercase text-red-600">{item}{ind !== exercise.equipments.length-1 && ','}</p>
                    ))}
                </div>
            </div>
            <div className="w-full flex items-center gap-5">
                <p className="p-bold-20 underline w-[40%] lg:w-[30%]">Force Type: </p>
                <p className="text-[17px] font-bold uppercase text-red-600">{exercise.forceType}</p>
            </div>
            <Separator className="bg-gray-400" />
            <div className="w-full">
              {exercise?.description?.split(". ").map((item) => (
                <p className="lg:p-regular-18"> {item}.</p>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col items-center pt-8 pb-16 h-fit border border-black rounded-lg z-10">
            <h1 className="h4-bold text-center text-white mb-4 underline">Related Exercises</h1>
            <div className="flex-center flex-wrap gap-16 mt-8 w-full">
              {relatedExercises?.map((related) => (
                <>
                  <ExerciseCard key={related._id} exercise={related} page="Related" />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] h-[60vh] w-full"></div>
      </div>
    </div>
  );
};

export default ExercisePage;
