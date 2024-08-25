"use client"

import HomeExperts from '@/components/shared/HomeExperts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CountUp from 'react-countup'
import Partners from '@/components/shared/Partners'

const About = () => {
  return (
    <>
        <div className='relative top-0 w-full h-[50vh] md:h-[80vh] bg-cover text-white flex-center h1-bold' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/assets/images/about-main-banner.jpg')"}}>
            ABOUT US
        </div>
        <div className="w-full py-10 lg:py-16 bg-[#fff8f8]">
            <div className="wrapper flex items-center justify-center gap-16">
                <div className='flex flex-col gap-6 md:w-[45%]'>
                    <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>ABOUT XTREME FITNESS</h2>
                    <h1 className='h2-bold'>WHERE YOUR FITNESS JOURNEY BEGINS!</h1>
                    <p className='p-regular-18 tracking-wider md:text-gray-700'>At XtremeFitness, we pride ourselves on being more than just a fitness destination. We’re a family of like-minded individuals committed to helping you achieve your goals.</p>
                    <p className='p-regular-18 tracking-wider md:text-gray-700'>Our experienced trainers, state-of-the-art facilities, and personalized approach make us the ideal partner on your path to a healthier lifestyle.</p>
                    <Link href={"/services"} className='py-3 ps-7 pe-3 border-2 border-white md:border-red-700 flex-center w-fit rounded-full text-lg mt-5 gap-4 hover:bg-red-700 hover:text-white transition-colors duration-500 bg-red-700 md:bg-transparent'>
                    Explore our Facilities
                    <span className='py-3 px-4 rounded-full bg-red-600'>
                        <Image src={"/assets/icons/right-arrow.svg"} width={15} height={15} alt='rightArrow' />
                    </span>
                    </Link>
                </div>
                <Image src={"/assets/images/about-right-img.png"} alt='image' height={100} width={500} />
            </div>
        </div>
        <div className="w-full xl:h-[30vh] bg-red-500 flex-center text-white">
            <div className='w-[80%] flex-center flex-wrap h-full'>
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-11 py-5 md:p-11'>
                    <Image src={"/assets/images/counter1.png"} alt='cntr1' width={68} height={68} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'><CountUp end={600} />K+</p>
                    <p className='font-bold text-sm lg:text-lg md:tracking-wider'>WORKING HOURS</p>
                </div>
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-8 py-5 md:p-11 lg:border-l-2'>
                    <Image src={"/assets/images/counter2.png"} alt='cntr1' width={58} height={58} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'><CountUp end={790} />+</p>
                    <p className='font-bold text-sm lg:text-lg md:tracking-wider'>SUCCESS PROGRAM</p>
                </div>
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-11 py-5 md:p-11 lg:border-l-2'>
                    <Image src={"/assets/images/counter3.png"} alt='cntr1' width={60} height={60} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'><CountUp end={2560} />+</p>
                    <p className='font-bold text-sm lg:text-lg md:tracking-wider'>HAPPY CLIENTS</p>
                </div>
                <div className='flex-1 flex justify-center items-center md:items-start text-center md:text-start flex-col gap-1 px-11 py-5 md:p-11 lg:border-l-2'>
                    <Image src={"/assets/images/counter4.png"} alt='cntr1' width={60} height={60} />
                    <p className='font-bold text-2xl lg:text-3xl mt-2'><CountUp end={830} />+</p>
                    <p className='font-bold text-sm lg:text-lg md:tracking-wider'>PERFECT BODIES</p>
                </div>
            </div>
        </div>
        <div className="w-full py-10 lg:py-16">
            <div className="wrapper flex items-center justify-center">
                <div className='flex flex-col items-center gap-3 md:w-[80%]'>
                    <h2 className='text-[18px] md:text-[20px] text-center text-red-500 tracking-[0.2em]'>WHAT SETS US APART</h2>
                    <h1 className='h2-bold text-center w-[70%] tracking-wide'>OUR MISSION IS TO EMPOWER INDIVIDUALS OF ALL AGES</h1>
                    <div className='w-full mt-8'>
                        <div className="flex h-[45vh]">
                            <div className='border border-red-700 w-[50%] py-10 px-12 flex flex-col justify-center gap-4'>
                                <h4 className='font-bold text-2xl'>OUR STORY</h4>
                                <p className='text-md text-gray-600 tracking-wider'>Founded in 2020, XtremeFitness was born out of a passion for fitness and a desire to create a space where everyone feels welcome and supported on their fitness journey. What started as a small fitness studio has grown into a thriving community hub, dedicated to helping individuals achieve their fitness goals and transform their lives.</p>
                            </div>
                            <div className='w-[50%] bg-red-50 bg-cover bg-center' style={{backgroundImage: "url('/assets/images/story.jpg')"}} />
                        </div>
                        <div className="flex h-[45vh]">
                            <div className='w-[50%] bg-red-50 bg-cover bg-center' style={{backgroundImage: "url('/assets/images/approach.jpg')"}} />
                            <div className='border border-red-700 w-[50%] py-10 px-12 flex flex-col justify-center gap-4'>
                                <h4 className='font-bold text-2xl'>OUR APPROACH</h4>
                                <p className='text-md text-gray-600 tracking-wider'>At XtremeFitnes, we believe that fitness is not just about physical strength - it's about mental resilience, emotional well-being, and overall health. That’s why we take a holistic approach to fitness, offering a range of programs and services designed to nurture every aspect of your well-being.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HomeExperts />
        <Partners />
    </>
  )
}

export default About