import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeServices = () => {
  return (
    <>
        <div className='w-full h-[20vh]'></div>
        <div className="w-full bg-red-50 bg-no-repeat bg-center py-8 md:py-14 lg:py-20 relative" style={{backgroundImage: "url('/assets/images/design-elelment-1.png')"}}>
            <div className="absolute -top-[15vh] left-[4vw] xl:left-[10vw] w-[90vw] xl:w-[80vw] xl:h-[30vh] bg-red-500 rounded-xl text-white flex-center flex-wrap">
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-11 py-5 md:p-11'>
                    <Image src={"/assets/images/counter1.png"} alt='cntr1' width={68} height={68} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'>600K+</p>
                    <p className='font-bold text-sm lg:text-lg'>WORKING HOURS</p>
                </div>
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-8 py-5 md:px-8 md:py-11 lg:border-l-2'>
                    <Image src={"/assets/images/counter2.png"} alt='cntr1' width={58} height={58} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'>790+</p>
                    <p className='font-bold text-sm lg:text-lg'>SUCCESS PROGRAM</p>
                </div>
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-11 py-5 md:p-11 lg:border-l-2'>
                    <Image src={"/assets/images/counter3.png"} alt='cntr1' width={60} height={60} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'>2,560+</p>
                    <p className='font-bold text-sm lg:text-lg'>HAPPY CLIENTS</p>
                </div>
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-11 py-5 md:p-11 lg:border-l-2'>
                    <Image src={"/assets/images/counter4.png"} alt='cntr1' width={60} height={60} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'>830+</p>
                    <p className='font-bold text-sm lg:text-lg'>PERFECT BODIES</p>
                </div>
            </div>
            <div className="wrapper w-full flex-center flex-col gap-1 md:gap-4">
                <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em] mt-52 md:mt-24'>OUR SERVICES</h2>
                <h1 className='h2-bold lg:w-[60vw] text-center'>SOLUTIONS FOR MOVING BETTER & FEELING A HEALTHIER</h1>
                <div className='flex justify-center gap-8 w-full flex-wrap my-7'>
                <div className='w-full md:w-[45%] border-[1px] border-red-700 flex justify-center items-center lg:items-start flex-col lg:flex-row px-6 py-8 gap-4 lg:gap-8 hover:bg-gradient-to-b hover:from-[#dd4b4b] hover:to-[#ff6947] transition-colors duration-300 hover:text-white group'>
                        <div className='hidden lg:block h-fit w-fit border-[1px] border-red-700 rounded-full p-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/nutrition-guaidance-icon.png"} alt='nutrition-guidance' width={170} height={170} />
                        </div>
                        <div className='lg:hidden h-fit w-fit border-[1px] border-red-700 rounded-full p-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/nutrition-guaidance-icon.png"} alt='nutrition-guidance-icon' width={50} height={50} />
                        </div>
                        <div className='flex-center flex-col text-center lg:items-start lg:text-left gap-2 lg:gap-4'>
                            <h4 className='font-bold text-2xl'>DIET & NUTRITION TRACKER</h4>
                            <p className='text-lg text-gray-700 tracking-wider group-hover:text-gray-100 transition-colors duration-300'>Log your daily meals and see nutritional info to manage your dietary goals. Stay on track, whether you're looking to maintain, lose, or gain weight.</p>
                            <Link href={"/diet-tracker"} className='py-2 ps-6 pe-2 border-[1px] border-black flex-center w-fit rounded-full mt-2 gap-4 group-hover:bg-black'>
                                Read More
                                <span className='py-2 px-3 rounded-full bg-red-600'>
                                    <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full md:w-[45%] border-[1px] border-red-700 flex justify-center items-center lg:items-start flex-col lg:flex-row px-6 py-8 gap-4 lg:gap-8 hover:bg-gradient-to-b hover:from-[#dd4b4b] hover:to-[#ff6947] transition-colors duration-300 hover:text-white group'>
                        <div className='hidden lg:block h-fit w-fit border-[1px] border-red-700 rounded-full p-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/equipment-icon.png"} alt='equipment' width={170} height={170} />
                        </div>
                        <div className='lg:hidden h-fit w-fit border-[1px] border-red-700 rounded-full p-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/equipment-icon.png"} alt='equipment' width={50} height={50} />
                        </div>
                        <div className='flex-center flex-col text-center lg:items-start lg:text-left gap-2 lg:gap-4'>
                            <h4 className='font-bold text-2xl'>WORKOUT TRACKER</h4>
                            <p className='text-lg text-gray-700 tracking-wider group-hover:text-gray-100 transition-colors duration-300'>Access a library of workouts sorted by muscle group, complete with videos and form guides. Track your progress and create personalized workout plans.</p>
                            <Link href={"/workout-tracker"} className='py-2 ps-6 pe-2 border-[1px] border-black flex-center w-fit rounded-full mt-2 gap-4 group-hover:bg-black'>
                                Read More
                                <span className='py-2 px-3 rounded-full bg-red-600'>
                                    <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full md:w-[45%] border-[1px] border-red-700 flex justify-center items-center lg:items-start flex-col lg:flex-row px-6 py-8 gap-4 lg:gap-8 hover:bg-gradient-to-b hover:from-[#dd4b4b] hover:to-[#ff6947] transition-colors duration-300 hover:text-white group'>
                        <div className='hidden lg:block h-fit w-fit border-[1px] border-red-700 rounded-full p-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/personal-training-icon.png"} alt='personal-training' width={170} height={170} />
                        </div>
                        <div className='lg:hidden h-fit w-fit border-[1px] border-red-700 rounded-full p-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/personal-training-icon.png"} alt='personal-training' width={50} height={50} />
                        </div>
                        <div className='flex-center flex-col text-center lg:items-start lg:text-left gap-2 lg:gap-4'>
                            <h4 className='font-bold text-2xl'>PERSONAL TRAINING</h4>
                            <p className='text-lg text-gray-700 tracking-wider group-hover:text-gray-100 transition-colors duration-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, aliquam.</p>
                            <Link href={"/"} className='py-2 ps-6 pe-2 border-[1px] border-black flex-center w-fit rounded-full mt-2 gap-4 group-hover:bg-black'>
                                Read More
                                <span className='py-2 px-3 rounded-full bg-red-600'>
                                    <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full md:w-[45%] border-[1px] border-red-700 flex justify-center items-center lg:items-start flex-col lg:flex-row px-6 py-8 gap-4 lg:gap-8 hover:bg-gradient-to-b hover:from-[#dd4b4b] hover:to-[#ff6947] transition-colors duration-300 hover:text-white group'>
                        <div className='hidden lg:block h-fit w-fit border-[1px] border-red-700 rounded-full py-7 px-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/group-classes-icon.png"} alt='group classes' width={170} height={170} />
                        </div>
                        <div className='lg:hidden h-fit w-fit border-[1px] border-red-700 rounded-full py-7 px-6 group-hover:bg-white transition-colors duration-300'>
                            <Image src={"/assets/images/group-classes-icon.png"} alt='group classes' width={50} height={50} />
                        </div>
                        <div className='flex-center flex-col text-center lg:items-start lg:text-left gap-2 lg:gap-4'>
                            <h4 className='font-bold text-2xl'>GROUP CLASSES</h4>
                            <p className='text-lg text-gray-700 tracking-wider group-hover:text-gray-100 transition-colors duration-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, aliquam.</p>
                            <Link href={"/"} className='py-2 ps-6 pe-2 border-[1px] border-black flex-center w-fit rounded-full mt-2 gap-4 group-hover:bg-black'>
                                Read More
                                <span className='py-2 px-3 rounded-full bg-red-600'>
                                    <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex-center mb-6'>
                <Link href={"/"} className='py-3 ps-7 pe-3 border-2 border-red-600 flex-center w-fit rounded-full text-lg mt-2 gap-4 hover:bg-gradient-to-b hover:from-[#dd4b4b] hover:to-[#ff6947] transition-colors duration-300 hover:text-white'>
                    Join Us Now
                    <span className='py-2 px-3 rounded-full bg-red-600'>
                    <Image src={"/assets/icons/right-arrow.svg"} width={15} height={15} alt='rightArrow' />
                    </span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default HomeServices