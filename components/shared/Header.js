"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navlist from './Navlist'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            offset > 0 ? setScrolled(true) : setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <header className={`bg-${scrolled ? 'black' : 'transparent'} text-white z-20 fixed w-full top-0 transition-colors duration-700`}>
        <div className='wrapper flex justify-between items-center'>
            <Link href={"/"}>
                <Image src={"/assets/images/logo.svg"} alt='logo' width={100} height={100} className='md:w-[120px] lg:w-[150px]' />
            </Link>

            {/* FOR LARGE SCREEN DEVICES */}
            <div className='hidden md:block'>
                <Navlist />
            </div>

            {/* FOR SMALL SCREEN DEVICES */}
            <div className='flex justify-end items-center gap-3'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full bg-gradient-to-b from-[#dd4b4b] to-[#ff6947]" size={"lg"}>
                        <SignInButton />
                    </Button>
                </SignedOut>
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header