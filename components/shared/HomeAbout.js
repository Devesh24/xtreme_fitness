import Image from 'next/image'
import Link from 'next/link'

const HomeAbout = () => {
  return (
    <div className='w-full h-screen bg-cover bg-right text-white flex justify-center items-center' style={{backgroundImage: "url('/assets/images/about_banner.jpg')"}}>
        <div className="wrapper">
            <div className='flex flex-col gap-3 md:w-[50%]'>
                <Image src={"/assets/images/logo.svg"} alt='logo' width={120} height={120} className='mb-4' />
                <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>ABOUT XTREME FITNESS</h2>
                <h1 className='h2-bold'>YOUR PARTNER IN FITNESS EXCELLENCE</h1>
                <p className='p-regular-20 tracking-wider md:text-gray-400'>At XtremeFitness, we go beyond traditional fitness. With state-of-the-art facilities, experienced trainers, and a supportive community, we are committed to helping you achieve holistic well-being.</p>
                <p className='p-regular-20 tracking-wider md:text-gray-400'>Discover a space where fitness becomes a lifestyle, not just a routine.</p>
                <Link href={"/"} className='py-3 ps-7 pe-3 border-2 border-white md:border-red-700 flex-center w-fit rounded-full text-lg mt-2 gap-4 hover:bg-red-700 transition-colors duration-500 bg-red-700 md:bg-transparent'>
                  Learn More About Us
                  <span className='py-3 px-4 rounded-full bg-red-600'>
                    <Image src={"/assets/icons/right-arrow.svg"} width={15} height={15} alt='rightArrow' />
                  </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout