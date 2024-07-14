import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const HomeTestimonials = () => {
  return (
    <div className='w-full lg:h-screen py-10 bg-cover bg-center text-white flex justify-center items-center' style={{backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('/assets/images/testHome.jpg')"}}>
        <div className="wrapper flex justify-center lg:justify-end">
            <div className='flex flex-col justify-center gap-3 md:w-[80%] lg:w-[70%] xl:w-[60%] items-center text-center lg:items-end lg:text-end'>
                <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em]'>TESTIMONIALS</h2>
                <h1 className='h2-bold lg:w-[80%]'>WHAT OUR CLIENTS SAY ABOUT US</h1>
                <Carousel className="w-[90%] mb-16">
                    <CarouselContent className="py-8">
                        <CarouselItem className="flex items-start justify-center gap-6">
                            <div>
                                <Image src={"/assets/images/aboutus_box_apostrophy.png"} alt="apostrophy" height={500} width={500}  />
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-8">
                                <p className='p-regular-18 tracking-wider text-left lg:text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi inventore veniam deleniti quia deserunt doloremque recusandae eos impedit soluta ducimus culpa, harum architecto similique aut quasi tempore voluptate quaerat minus consequuntur qui, modi itaque! Architecto ex facere blanditiis nam, sunt delectus</p>
                                <div className="md:border-l-2 md:ps-5 text-left">
                                    <p className='font-bold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px]'>RALPHIE DOPER</p>
                                    <p className='md:text-[18px] xl:text-[20px]'>Happy Client</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="flex items-start justify-center gap-6">
                            <div>
                                <Image src={"/assets/images/aboutus_box_apostrophy.png"} alt="apostrophy" height={500} width={500}  />
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-8">
                                <p className='p-regular-18 tracking-wider text-left lg:text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi inventore veniam deleniti quia deserunt doloremque recusandae eos impedit soluta ducimus culpa, harum architecto similique aut quasi tempore voluptate quaerat minus consequuntur qui, modi itaque! Architecto ex facere blanditiis nam, sunt delectus</p>
                                <div className="md:border-l-2 md:ps-5 text-left">
                                    <p className='font-bold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px]'>RALPHIE DOPER</p>
                                    <p className='md:text-[18px] xl:text-[20px]'>Happy Client</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="flex items-start justify-center gap-6">
                            <div>
                                <Image src={"/assets/images/aboutus_box_apostrophy.png"} alt="apostrophy" height={500} width={500}  />
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-8">
                                <p className='p-regular-18 tracking-wider text-left lg:text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi inventore veniam deleniti quia deserunt doloremque recusandae eos impedit soluta ducimus culpa, harum architecto similique aut quasi tempore voluptate quaerat minus consequuntur qui, modi itaque! Architecto ex facere blanditiis nam, sunt delectus</p>
                                <div className="md:border-l-2 md:ps-5 text-left">
                                    <p className='font-bold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px]'>RALPHIE DOPER</p>
                                    <p className='md:text-[18px] xl:text-[20px]'>Happy Client</p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="w-[50px] h-[50px] bg-black text-white hover:bg-red-500 hover:border-red-500 hover:text-white m-auto lg:-bottom-76 lg:left-[40%] -bottom-72 left-[38%]" />
                    <CarouselNext className="w-[50px] h-[50px] bg-black text-white hover:bg-red-500 hover:border-red-500 hover:text-white m-auto lg:-bottom-76 lg:right-[40%] -bottom-72 right-[38%]" />
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default HomeTestimonials