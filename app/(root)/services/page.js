import WhyUs from '@/components/shared/WhyUs'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { servicesData, testimonialsData } from '@/data'
import Partners from '@/components/shared/Partners'

const Services = () => {
  return (
    <>
        <div className='relative top-0 w-full h-[50vh] md:h-[80vh] bg-cover md:bg-center text-white flex-center h1-bold' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/assets/images/services.jpg')"}}>
            OUR SERVICES
        </div>
        <WhyUs />
        <div className="w-full py-10 lg:py-16 relative min-h-screen">
            <div className="wrapper flex items-center justify-center gap-16">
                <div className='flex flex-col items-center gap-4 md:w-[90%] z-10 text-center'>
                    <h2 className='text-[18px] md:text-[20px] text-white tracking-[0.3em]'>OUR SERVICES</h2>
                    <h1 className='h2-bold text-white md:w-[70%]'>SOLUTIONS FOR MOVING BETTER & FEELING A HEALTHIER</h1>

                    <div className='flex-between flex-wrap w-full gap-8 my-8'>
                        {
                            servicesData.map((item, ind) => (
                                <div className='w-[48%] h-[75vh] bg-cover bg-center text-white p-12 flex flex-col items-start text-left gap-2 justify-end hover:scale-105 transition-transform relative' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.9)), url(${item.imageLink})`}} key={ind}>
                                    <Badge className={`${item.new ? "block" : "hidden"} absolute top-0 right-0 me-6 mt-6 animate-ping bg-white text-black py-1 px-3`}>New</Badge>
                                    <Image src={item.iconLink} alt='workout-tracker' width={65} height={50} />
                                    <p className='p-bold-24 mt-3'>{item.title}</p>
                                    <p className='p-regular-18 tracking-wider'>{item.desc}</p>
                                    <Link href={item.link} className='text-lg font-bold mt-2 hover:translate-x-3 transition-transform'>Let's Explore . . .</Link>
                                </div>
                            ))
                        }
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
        <div className="w-full py-10 lg:py-16 bg-[#fff8f8] min-h-screen">
            <div className="wrapper flex items-center justify-center gap-16">
                <div className='flex flex-col items-center gap-4 md:w-[90%] z-10 text-center'>
                    <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>SUCCESS STORIES</h2>
                    <h1 className='h2-bold md:w-[50%]'>REAL TRANSFORMATIONS, REAL RESULTS</h1>
                    <Carousel className="w-[95%]">
                        <CarouselContent className="py-8">
                            {
                                testimonialsData.map((item, ind) => (
                                    <CarouselItem className="w-full flex-center" key={ind}>
                                        <div className='w-[95%] flex items-center justify-center gap-10 border-2 border-red-600 p-10'>
                                            <div className='w-[30%] h-[40vh] bg-cover' style={{backgroundImage: "url('/assets/images/testi.jpg')"}}/>
                                            <div className="flex flex-col justify-center items-start gap-3 w-[70%]">
                                                <p>⭐⭐⭐⭐⭐</p>
                                                <p className='p-regular-18 tracking-wider text-left line-clamp-5'>{item.message}</p>
                                                <div className="md:border-l-4 border-red-600 md:ps-5 text-left mt-4">
                                                    <p className='font-bold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-red-600'>{item.name}</p>
                                                    <p className='md:text-[18px] xl:text-[20px] text-gray-600'>Happy Client</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )) 
                            }
                        </CarouselContent>
                        <CarouselPrevious className="w-[50px] h-[50px] bg-[#fff8f8] border-none hover:bg-red-100" />
                        <CarouselNext className="w-[50px] h-[50px] bg-[#fff8f8] border-none hover:bg-red-100" />
                    </Carousel>
                </div>
            </div>
        </div>
        <Partners />
    </>
  )
}

export default Services