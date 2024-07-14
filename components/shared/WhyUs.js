import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

const WhyUs = () => {
  return (
    <div className="w-full bg-[#fff8f8] bg-dotted-pattern py-8 md:py-14 lg:py-20 relative">
        <div className="wrapper w-full flex-center flex-col gap-2 md:gap-4">
            <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>WHY CHOOSE US</h2>
            <h1 className='h2-bold'>BUILD YOUR BEST BODY</h1>
            <div className="mt-7 mb-10 lg:mb-20">
                <Carousel opts={{loop: true, dragFree: true}} className="w-[73vw] z-10 bg-dotted-pattern bg-[#fff8f8] mb-8 lg:mb-0">
                    <CarouselContent className="-ml-0">
                        <CarouselItem className="pl-0 px-4 py-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 bg-white border-[3px] border-white md:mr-5 hover:border-red-500 transition-colors duration-500 flex-col flex-center text-center gap-5 shadow-lg">
                            <Image src={"/assets/images/abdominal.png"} alt="abdomainal" height={75} width={75} />
                            <Link href={"/"}><h4 className="p-bold-20 underline">ABDOMINAL SESSIONS</h4></Link>
                            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, libero. Lorem ipsum dolor sit amet...</p>
                            <Link href={"/"} className="text-red-500">Read More</Link>
                        </CarouselItem>
                        <CarouselItem className="pl-0 px-4 py-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 bg-white border-[3px] border-white md:mr-5 hover:border-red-500 transition-colors duration-500 flex-col flex-center text-center gap-5 shadow-lg">
                            <Image src={"/assets/images/vitamins.png"} alt="vitamins" height={50} width={50} />
                            <Link href={"/"}><h4 className="p-bold-20 underline">POWERFUL VITAMINS</h4></Link>
                            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, libero. Lorem ipsum dolor sit amet...</p>
                            <Link href={"/"} className="text-red-500">Read More</Link>
                        </CarouselItem>
                        <CarouselItem className="pl-0 px-4 py-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 bg-white border-[3px] border-white md:mr-5 hover:border-red-500 transition-colors duration-500 flex-col flex-center text-center gap-5 shadow-lg">
                            <Image src={"/assets/images/flexmuscle.png"} alt="flex muscle" height={100} width={100} />
                            <Link href={"/"}><h4 className="p-bold-20 underline">FLEX MUSCLE</h4></Link>
                            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, libero. Lorem ipsum dolor sit amet...</p>
                            <Link href={"/"} className="text-red-500">Read More</Link>
                        </CarouselItem>
                        <CarouselItem className="pl-0 px-4 py-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 bg-white border-[3px] border-white md:mr-5 hover:border-red-500 transition-colors duration-500 flex-col flex-center text-center gap-5 shadow-lg">
                            <Image src={"/assets/images/losing.png"} alt="losing" height={70} width={70} />
                            <Link href={"/"}><h4 className="p-bold-20 underline">WEIGHT LOSING</h4></Link>
                            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, libero. Lorem ipsum dolor sit amet...</p>
                            <Link href={"/"} className="text-red-500">Read More</Link>
                        </CarouselItem>
                        <CarouselItem className="pl-0 px-4 py-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 bg-white border-[3px] border-white md:mr-5 hover:border-red-500 transition-colors duration-500 flex-col flex-center text-center gap-5 shadow-lg">
                            <Image src={"/assets/images/dumbell.png"} alt="dumbell" height={55} width={55} />
                            <Link href={"/"}><h4 className="p-bold-20 underline">WEIGHT LIFTING</h4></Link>
                            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, libero. Lorem ipsum dolor sit amet...</p>
                            <Link href={"/"} className="text-red-500">Read More</Link>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="w-[50px] h-[50px] bg-black text-white hover:bg-red-500 hover:text-white m-auto lg:left-[42%] -bottom-80 left-[35%]" />
                    <CarouselNext className="w-[50px] h-[50px] bg-black text-white hover:bg-red-500 hover:text-white m-auto lg:right-[42%] -bottom-80 right-[35%]" />
                </Carousel>
            </div>
        </div>
        <div className="hidden lg:block rounded-full w-[18vw] h-[18vw] border-[30px] border-red-400 absolute top-32 left-20"></div>
        <div className="hidden lg:block rounded-full w-[18vw] h-[18vw] border-[30px] border-red-400 absolute bottom-20 right-20"></div>
    </div>
  )
}

export default WhyUs