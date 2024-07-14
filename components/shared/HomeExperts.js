import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeExperts = () => {
  return (
    <div className='w-full bg-cover bg-center text-white py-20' style={{backgroundImage: "linear-gradient(to bottom, rgba(221, 75, 75, 0.8), rgba(255, 105, 71, 0.8)), url('/assets/images/experts.jpg')"}}>
        <div className="wrapper flex-center flex-col gap-3">
            <h2 className='text-[18px] md:text-[20px] tracking-[0.3em]'>TEAM MEMBERS</h2>
            <h1 className='h2-bold text-center'>TEAM OF EXPERT COACHES</h1>
            <div className='flex-center gap-10 lg:gap-16 mt-10 flex-wrap w-full'>
                <div className='flex-center flex-col w-[60%] md:w-[40%] lg:w-[30%] group'>
                    <Link href={"/"} className='rounded-full w-[70%] md:w-[80%] aspect-square bg-center bg-cover border-[10px] border-white hover:scale-[1.1] transition-transform' style={{backgroundImage: "url('/assets/images/experts1.jpg')"}}></Link>
                    <Link href={"/"} className='font-bold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px] mt-8'>HARRY POTTER</Link>
                    <p className='md:text-[18px] xl:text-[20px]'>Crossfit Coach</p>
                    <div className='flex gap-3 mt-4'>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/instagram.svg"} alt='instagram' height={15} width={15} />
                        </Link>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/facebook.svg"} alt='facebook' height={15} width={15} />
                        </Link>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/twitter.svg"} alt='X' height={15} width={15} />
                        </Link>
                    </div>
                </div>
                <div className='flex-center flex-col w-[60%] md:w-[40%] lg:w-[30%] group'>
                    <Link href={"/"} className='rounded-full w-[70%] md:w-[80%] aspect-square bg-center bg-cover border-[10px] border-white hover:scale-[1.1] transition-transform' style={{backgroundImage: "url('/assets/images/experts2.jpg')"}}></Link>
                    <Link href={"/"} className='font-bold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px] mt-8'>GRACY EVANS</Link>
                    <p className='md:text-[18px] xl:text-[20px]'>Cardio & Conditioning</p>
                    <div className='flex gap-3 mt-4'>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/instagram.svg"} alt='instagram' height={15} width={15} />
                        </Link>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/facebook.svg"} alt='facebook' height={15} width={15} />
                        </Link>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/twitter.svg"} alt='X' height={15} width={15} />
                        </Link>
                    </div>
                </div>
                <div className='flex-center flex-col w-[60%] md:w-[40%] lg:w-[30%] group'>
                    <Link href={"/"} className='rounded-full w-[70%] md:w-[80%] aspect-square bg-center bg-cover border-[10px] border-white hover:scale-[1.1] transition-transform' style={{backgroundImage: "url('/assets/images/experts3.jpg')"}}></Link>
                    <Link href={"/"} className='font-bold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px] mt-8'>DANIEL BRAYN</Link>
                    <p className='md:text-[18px] xl:text-[20px]'>Fitness Coach</p>
                    <div className='flex gap-3 mt-4'>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/instagram.svg"} alt='instagram' height={15} width={15} />
                        </Link>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/facebook.svg"} alt='facebook' height={15} width={15} />
                        </Link>
                        <Link href={"/"} className='rounded-full bg-gray-100 bg-opacity-25 p-4 group-hover:bg-transparent border-2'>
                            <Image src={"assets/icons/twitter.svg"} alt='X' height={15} width={15} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeExperts