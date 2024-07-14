import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"

const HomeBlogs = () => {
  return (
    <div className="w-full bg-red-50 bg-no-repeat py-14" style={{backgroundImage: "url('/assets/images/design-elelment-1.png')"}}>
        <div className="wrapper flex-center flex-col gap-1 md:gap-2">
            <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>OUR NEWS</h2>
            <h1 className='h2-bold mb-8 lg:mb-12'>LATEST BLOG POSTS</h1>
            <div className='flex-center lg:gap-6 gap-4 w-full flex-wrap md:h-[60vh] md:mb-8'>
                <div className='relative w-full md:w-[31%] aspect-[16/11] md:h-full bg-cover bg-center text-white lg:p-8 p-4 flex flex-col justify-between group bg-gradient-hover' style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/high-intensity-training.jpg')"}}>
                    <Badge className="z-10 w-fit bg-red-500 group-hover:bg-white group-hover:text-black">24 Jun</Badge>
                    <div className='flex flex-col justify-end'>
                        <p className='z-10 font-bold text-[17px] md:text-[16px] lg:text-[20px]'>POWER OF HIGH-INTENSITY INTERVAL TRAINING (HIIT) FOR EXTREME FITNESS</p>
                        <Link href={"/"} className='z-10 py-2 ps-6 pe-2 flex-center w-fit rounded-full mt-3 gap-4 bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] group-hover:bg-gradient-to-b group-hover:from-[#ffffff] group-hover:to-[#ffffff] group-hover:text-black'>
                            Read More
                            <span className='py-2 px-3 rounded-full bg-red-600'>
                                <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='relative w-full md:w-[31%] aspect-[16/11] md:h-full bg-cover bg-center text-white lg:p-8 p-4 flex flex-col justify-between group bg-gradient-hover' style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/extreme fitness.jpg')"}}>
                    <Badge className="z-10 w-fit bg-red-500 group-hover:bg-white group-hover:text-black">24 Jun</Badge>
                    <div className='flex flex-col justify-end'>
                        <p className='z-10 font-bold text-[17px] md:text-[16px] lg:text-[20px]'>NUTRITION HACKS FOR EXTREME FITNESS: FUELING YOUR BODY RIGHT</p>
                        <Link href={"/"} className='z-10 py-2 ps-6 pe-2 flex-center w-fit rounded-full mt-3 gap-4 bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] group-hover:bg-gradient-to-b group-hover:from-[#ffffff] group-hover:to-[#ffffff] group-hover:text-black'>
                            Read More
                            <span className='py-2 px-3 rounded-full bg-red-600'>
                                <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='relative w-full md:w-[31%] aspect-[16/11] md:h-full bg-cover bg-center text-white p-4 lg:p-8 flex flex-col justify-between group bg-gradient-hover' style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/mindset-mastery.jpg')"}}>
                    <Badge className="w-fit z-10 bg-red-500 group-hover:bg-white group-hover:text-black">24 Jun</Badge>
                    <div className='flex flex-col justify-end'>
                        <p className='z-10 font-bold text-[17px] md:text-[16px] lg:text-[20px]'>MINDSET MASTERY: THE KEY TO SUSTAINING EXTREME FITNESS GOALS</p>
                        <Link href={"/"} className='z-10 py-2 ps-6 pe-2 flex-center w-fit rounded-full mt-3 gap-4 bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] group-hover:bg-gradient-to-b group-hover:from-[#ffffff] group-hover:to-[#ffffff] group-hover:text-black'>
                            Read More
                            <span className='py-2 px-3 rounded-full bg-red-600'>
                                <Image src={"/assets/icons/right-arrow.svg"} width={10} height={10} alt='rightArrow' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBlogs