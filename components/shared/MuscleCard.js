import Link from 'next/link'
import React from 'react'

const MuscleCard = ({muscle}) => {
  return (
    <div className='relative w-full md:w-[45%] lg:w-[31%] aspect-[16/11] md:h-full bg-cover bg-center text-white lg:p-8 p-4 flex flex-col justify-end items-center group bg-gradient-hover border-[10px] border-red-100' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('${muscle.imageUrl}')`}}>
        <Link href={`/workout-tracker/muscle-group/${muscle.muscle.toLowerCase().replace(/\s+/g, '-')}`} className='z-10 py-2 px-10 font-bold flex-center w-fit rounded-full mt-3 gap-4 bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] group-hover:bg-gradient-to-b group-hover:from-[#ffffff] group-hover:to-[#ffffff] group-hover:text-black uppercase'>
            {muscle.muscle}
        </Link>
    </div>
  )
}

export default MuscleCard