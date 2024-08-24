import WhyUs from '@/components/shared/WhyUs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <>
        <div className='relative top-0 w-full h-[50vh] md:h-[80vh] bg-cover md:bg-center text-white flex-center h1-bold' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/assets/images/services.jpg')"}}>
            OUR SERVICES
        </div>
        <WhyUs />
        <div className="w-full py-10 lg:py-16 bg-[#fff8f8] relative min-h-screen">
            <div className="wrapper flex items-center justify-center gap-16">
                <div className='flex flex-col items-center gap-4 md:w-[90%] z-10 text-center'>
                    <h2 className='text-[18px] md:text-[20px] text-white tracking-[0.3em]'>OUR SERVICES</h2>
                    <h1 className='h2-bold text-white md:w-[70%]'>SOLUTIONS FOR MOVING BETTER & FEELING A HEALTHIER</h1>

                    <div className='flex-between flex-wrap w-full gap-8 my-8'>
                        <div className='w-[48%] h-[75vh] bg-cover bg-center text-white p-12 flex flex-col items-start text-left gap-2 justify-end hover:scale-105 transition-transform' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.9)), url('/assets/images/services1.jpg')"}}>
                            <Image src={"/assets/images/workout-tracker-icon.png"} alt='workout-tracker' width={65} height={50} />
                            <p className='p-bold-24 mt-3'>WORKOUT TRACKER</p>
                            <p className='p-regular-18 tracking-wider'>Access a library of workouts sorted by muscle group, complete with videos and form guides. Track your progress and create personalized workout plans.</p>
                            <Link href={"/"} className='text-lg font-bold mt-2 hover:translate-x-3 transition-transform'>Read More . . .</Link>
                        </div>
                        <div className='w-[48%] h-[75vh] bg-cover bg-center text-white p-12 flex flex-col items-start text-left gap-2 justify-end hover:scale-105 transition-transform' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.9)), url('/assets/images/services2.jpg')"}}>
                            <Image src={"/assets/images/counter2.png"} alt='workout-tracker' width={65} height={50} />
                            <p className='p-bold-24 mt-3'>DIET & NUTRITION TRACKER</p>
                            <p className='p-regular-18 tracking-wider'>Log your daily meals and see nutritional info to manage your dietary goals. Stay on track, whether you're looking to maintain, lose, or gain weight.</p>
                            <Link href={"/"} className='text-lg font-bold mt-2 hover:translate-x-3 transition-transform'>Read More . . .</Link>
                        </div>
                        <div className='w-[48%] h-[75vh] bg-cover bg-center text-white p-12 flex flex-col items-start text-left gap-2 justify-end hover:scale-105 transition-transform' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.9)), url('/assets/images/services3.jpg')"}}>
                            <Image src={"/assets/images/boxing-material-icon.png"} alt='workout-tracker' width={65} height={50} />
                            <p className='p-bold-24 mt-3'>PERSONAL TRAINER</p>
                            <p className='p-regular-18 tracking-wider'>ALorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, aliquam.</p>
                            <Link href={"/"} className='text-lg font-bold mt-2 hover:translate-x-3 transition-transform'>Read More . . .</Link>
                        </div>
                        <div className='w-[48%] h-[75vh] bg-cover bg-center text-white p-12 flex flex-col items-start text-left gap-2 justify-end hover:scale-105 transition-transform' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.9)), url('/assets/images/services4.jpg')"}}>
                            <Image src={"/assets/images/gym-locator-icon.png"} alt='workout-tracker' width={65} height={50} />
                            <p className='p-bold-24 mt-3'>GROUP CLASSES</p>
                            <p className='p-regular-18 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, aliquam.</p>
                            <Link href={"/"} className='text-lg font-bold mt-2 hover:translate-x-3 transition-transform'>Read More . . .</Link>
                        </div>
                    </div>

                    <div className='w-full flex-center mb-6'>
                        <Link href={"/contact"} className='py-3 ps-7 pe-3 border-2 border-red-600 flex-center w-fit rounded-full text-lg mt-2 gap-4 bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] text-white'>
                            Join Us Now
                            <span className='py-2 px-3 rounded-full bg-red-600'>
                            <Image src={"/assets/icons/right-arrow.svg"} width={15} height={15} alt='rightArrow' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] h-[80vh] w-full"></div>
        </div>
    </>
  )
}

export default Services