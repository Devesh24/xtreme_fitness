import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExerciseCard = ({exercise, page}) => {
  return (
    <div className={`w-[80%] md:w-[45%] ${page==="Related" ? 'lg:w-[80%]' : 'lg:w-[30%]'} h-[63vh] group bg-white shadow-lg transition-all duration-500`}>
        <div className='w-full h-[45%] overflow-hidden'>
            <div className="w-full h-full bg-cover group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('${exercise.imageUrl}')`}}></div>
        </div>
        <div className="w-full h-[55%] p-8 flex-between text-center flex-col">
            <Link href={`/workout-tracker/exercises/${exercise._id}`} className='font-bold text-[20px] uppercase'>{exercise.name}</Link>
            <div className='w-full flex-center text-center flex-col'>
                <div className='text-gray-700 text-[17px] flex-center gap-2 flex-wrap'>
                    <p>Target Muscle: </p>
                    <p className='text-red-500'>{exercise.target}</p>
                </div>
                <div className='text-gray-700 text-[17px] flex-center flex-wrap'>
                    <p>Secondary Targets: </p>
                    {exercise.secondaryTargets.map((target, ind) => (
                        <p className='text-red-500 ms-2'>{target} {ind !== exercise.secondaryTargets.length-1 && ','} </p>
                    ))}
                </div>
            </div>
            <Link href={`/workout-tracker/exercises/${exercise._id}`} className='py-2 ps-6 pe-2 border-2 border-red-600 flex-center w-fit rounded-full mt-2 gap-4 group-hover:bg-gradient-to-b group-hover:from-[#dd4b4b] group-hover:to-[#ff6947] group-hover:text-white'>
                Read More
                <span className='py-2 px-3 rounded-full bg-red-600'>
                    <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                </span>
            </Link>
        </div>
    </div>
  )
}

export default ExerciseCard