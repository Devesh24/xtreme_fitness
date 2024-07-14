import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black text-white md:overflow-hidden'>
        <div className='wrapper flex justify-center md:justify-around flex-wrap gap-8 md:gap-4'>
            <div className='w-[100%] md:w-[25%] flex flex-col items-center gap-3 mt-8 md:mb-8 lg:gap-4'>
                <Link href={"/"}>
                    <Image src={"/assets/images/logo.svg"} alt='logo' width={150} height={150} />
                </Link>
                <p className='text-center'>Fitness made easy, goals made achievable.</p>
                <div className='flex gap-3'>
                    <Link href={"/"} className='rounded-full bg-gray-300 bg-opacity-15 p-4 hover:bg-red-500'>
                        <Image src={"assets/icons/instagram.svg"} alt='instagram' height={15} width={15} />
                    </Link>
                    <Link href={"/"} className='rounded-full bg-gray-300 bg-opacity-15 p-4 hover:bg-red-500'>
                        <Image src={"assets/icons/facebook.svg"} alt='facebook' height={15} width={15} />
                    </Link>
                    <Link href={"/"} className='rounded-full bg-gray-300 bg-opacity-15 p-4 hover:bg-red-500'>
                        <Image src={"assets/icons/twitter.svg"} alt='X' height={15} width={15} />
                    </Link>
                </div>
            </div>
            <div className='w-[100%] md:w-[40%] flex justify-around md:mt-8 md:mb-8'>
                <div>
                    <h3 className='font-bold text-lg md:text-xl underline text-center'>OPENING HOURS</h3>
                    <ul className='text-center pt-2 flex flex-col gap-2 md:pt-4 md:gap-4'>
                        <li>
                            <p className='mb-1 md:text-lg md:mb-3'>Monday to Saturday</p>
                            <p className='text-sm'>7:00 - 13:00</p>
                            <p className='text-sm'>17:00 - 23:00</p>
                        </li>
                        <li>
                            <p className='mb-1 md:text-lg md:mb-3'>Sunday</p>
                            <p className='text-sm'>8:00 - 12:00</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-lg md:text-xl underline text-center'>QUICK LINKS</h3>
                    <ul className='text-center pt-2 flex flex-col gap-2 md:text-lg md:pt-4 md:gap-4'>
                        <li className='hover:text-red-500'>
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li className='hover:text-red-500'>
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <li className='hover:text-red-500'>
                            <Link href={"/trainers"}>Trainers</Link>
                        </li>
                        <li className='hover:text-red-500'>
                            <Link href={"/blogs"}>Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-[100%] md:w-[25%] flex justify-center mb-8 md:mt-8'>
                <div className='w-[100%]'>
                    <h3 className='font-bold text-lg md:text-xl underline text-center'>CONTACT US</h3>
                    <ul className='text-center pt-2 flex flex-col gap-2 w-[100%] md:pt-4'>
                        <li>
                            <p className='mb-1'>Address:</p>
                            <p className='text-sm w-[100%]'>121 King Street Melbourne, 3000, Australia</p>
                        </li>
                        <li>
                            <p className='mb-1'>Email:</p>
                            <p className='text-sm w-[100%]'>support_xtremefitness@gmail.com</p>
                        </li>
                        <li>
                            <p className='mb-1'>Phone:</p>
                            <p className='text-sm w-[100%]'>+91 65768 45697</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Separator className="bg-gray-800" />
        <div className='wrapper'>
            <p className='p-regular-14 flex justify-center'>Copyright © XtremeFitness 2024. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer