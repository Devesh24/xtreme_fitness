"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Banner = () => {
  return (
    // backdrop-blur-sm bg-white/10 rounded-xl
    <div className='relative top-0 w-full h-screen bg-cover md:bg-center text-white flex justify-center items-end' style={{backgroundImage: "url('/assets/images/home.jpg')"}}>
        <Carousel opts={{loop: true}} plugins={[Autoplay({ delay: 5000 })]} className="mb-[5rem]">
            <CarouselContent className="w-[90vw] md:w-[70vw] py-10">
                <CarouselItem className="flex-center flex-col">
                    <div className="border-s-8 ps-7">
                        <p className="h2-bold tracking-widest">XTREME FITNESS</p>
                        <p className="h1-bolder">POWER UP</p>
                    </div>
                    <p className="h4-medium pt-2">Fitness made easy, goals made achievable.</p>
                </CarouselItem>
                <CarouselItem className="flex-center flex-col">
                    <div className="border-s-8 ps-7">
                        <p className="h2-bold tracking-widest">XTREME FITNESS</p>
                        <p className="h1-bolder">BE STRONG</p>
                        </div>
                    <p className="h4-medium pt-2">Fitness made easy, goals made achievable.</p>
                </CarouselItem>
                <CarouselItem className="flex-center flex-col">
                    <div className="border-s-8 ps-7">
                    <p className="h2-bold tracking-widest">XTREME FITNESS</p>
                    <p className="h1-bolder">SHAPE UP</p>
                    </div>
                    <p className="h4-medium pt-2">Fitness made easy, goals made achievable.</p>
                </CarouselItem>
                <CarouselItem className="flex-center flex-col">
                    <div className="border-s-8 ps-7">
                    <p className="h2-bold tracking-widest">XTREME FITNESS</p>
                    <p className="h1-bolder">TRAIN TOUGH</p>
                    </div>
                    <p className="h4-medium pt-2">Fitness made easy, goals made achievable.</p>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </div>
  )
}

export default Banner