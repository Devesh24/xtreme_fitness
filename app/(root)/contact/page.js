import ContactForm from "@/components/shared/ContactForm"
import Image from "next/image"

const ContactPage = () => {
  return (
    <>
        <div className='relative top-0 w-full h-[50vh] md:h-[70vh] bg-cover md:bg-center text-white flex-center h1-bold' style={{backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/assets/images/contact.jpg')"}}>
            CONTACT
        </div>
        <div className="w-full py-10 lg:py-16 bg-[#fff8f8] bg-no-repeat" style={{backgroundImage: "url('/assets/images/design-elelment-1.png')"}}>
            <div className="wrapper">
                <h2 className='text-[18px] md:text-[20px] text-red-500 tracking-[0.3em] text-center'>FIND US NOW</h2>
                <h1 className='h2-bold text-center'>READY FOR WORKOUT</h1>
                <div className="flex-center w-full mt-7 lg:mt-12 flex-wrap gap-8">
                    <div className="w-[80%] md:w-[45%] lg:w-[30%] h-[50vh] bg-white border-[3px] border-white hover:border-red-500">
                        <div className="w-full h-[45%] bg-cover" style={{backgroundImage: "url('/assets/images/location-image.png')"}}></div>
                        <div className="w-full h-[55%] flex justify-end items-center text-center flex-col p-8 relative">
                            <div className='font-bold text-[18px] mt-8'>LOCATION</div>
                            <p className='text-gray-700'>121 King Street Melbourne, 3000, Australia</p>
                            <div className="absolute bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] w-[115px] aspect-square rounded-full -top-[20%] flex-center">
                                <Image src={"/assets/images/location-icon.png"} alt="location-icon" width={45} height={45} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] md:w-[45%] lg:w-[30%] h-[50vh] bg-white border-[3px] border-white hover:border-red-500">
                        <div className="w-full h-[45%] bg-cover" style={{backgroundImage: "url('/assets/images/phone-image.png')"}}></div>
                        <div className="w-full h-[55%] flex justify-end items-center text-center flex-col p-8 relative">
                            <div className='font-bold text-[18px] mt-8'>PHONE</div>
                            <div className='text-gray-700'>
                                <p>+91 65768 45697</p>
                                <p>+91 86466 56466</p>
                            </div>
                            <div className="absolute bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] w-[115px] aspect-square rounded-full -top-[20%] flex-center">
                                <Image src={"/assets/images/Phone-icon.png"} alt="location-icon" width={40} height={40} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] md:w-[45%] lg:w-[30%] h-[50vh] bg-white border-[3px] border-white hover:border-red-500">
                        <div className="w-full h-[45%] bg-cover" style={{backgroundImage: "url('/assets/images/email-image.png')"}}></div>
                        <div className="w-full h-[55%] flex justify-end items-center text-center flex-col p-8 relative">
                            <div className='font-bold text-[18px] mt-8'>EMAIL</div>
                            <div className='text-gray-700'>
                                <p>support_xtremefitness@gmail.com</p>
                                <p>main_xtremefitness@gmail.com</p>
                            </div>
                            <div className="absolute bg-gradient-to-b from-[#dd4b4b] to-[#ff6947] w-[115px] aspect-square rounded-full -top-[20%] flex-center">
                                <Image src={"/assets/images/email-icon.png"} alt="location-icon" width={45} height={45} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full lg:h-screen bg-cover bg-center text-white flex justify-center items-center' style={{backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('/assets/images/contactImg.jpg')"}}>
            <div className="wrapper flex-center lg:justify-end">
                <div className="w-[90%] lg:w-[45%] flex flex-col gap-2 my-12">
                    <h2 className="text-[18px] md:text-[20px] text-red-500 tracking-[0.3em] text-center lg:text-left font-bold">
                        CONTACT US
                    </h2>
                    <h1 className="h2-bold mb-6 text-center lg:text-left">SEND US A MESSAGE & JOIN US TODAY</h1>
                    <ContactForm message="Send Now" />
                </div>
            </div>
        </div>
        <div className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385275422947!2d144.955775!3d-37.817251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1720875843004!5m2!1sen!2sin" className="w-full h-full" style={{border:0}} />
        </div>
    </>
  )
}

export default ContactPage