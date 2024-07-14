"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlist = () => {
    const pathName = usePathname()
  return (
    <ul className='w-full flex flex-col items-center md:flex-row text-base gap-8 lg:text-lg lg:gap-10 xl:gap-12 tracking-wide'>
        <li className='hover:text-red-500'>
            <Link href={"/"} className={pathName==='/' ? "text-red-500" : ""}>HOME</Link>
        </li>
        <li className='hover:text-red-500'>
            <Link href={"/about"} className={pathName==='/about' ? "text-red-500" : ""}>ABOUT</Link>
        </li>
        <li className='hover:text-red-500'>
            <Link href={"/services"} className={pathName==='/services' ? "text-red-500" : ""}>SERVICES</Link>
        </li>
        <li className='hover:text-red-500'>
            <Link href={"/blogs"} className={pathName==='/blogs' ? "text-red-500" : ""}>BLOGS</Link>
        </li>
        <li className='hover:text-red-500'>
            <Link href={"/contact"} className={pathName==='/contact' ? "text-red-500" : ""}>CONTACT</Link>
        </li>
    </ul>
  )
}

export default Navlist