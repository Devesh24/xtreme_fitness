import ContactForm from "./ContactForm";

const HomeContact = () => {
  return (
    <div
      className="w-full bg-center bg-no-repeat flex justify-center items-center py-20"
      style={{ backgroundImage: "url('/assets/images/design-elelment-1.png')" }}
    >
      <div className="wrapper flex-center gap-16 flex-wrap">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] aspect-[9/11]">
          <img
            src={"/assets/images/home_contact.jpg"}
            className="w-full h-full object-cover"
            alt="Contact Us"
          />
        </div>
        <div className="w-[90%] lg:w-[45%] flex flex-col gap-2">
          <h2 className="text-[18px] md:text-[20px] text-red-500 tracking-[0.3em] text-center lg:text-left">
            CONTACT US
          </h2>
          <h1 className="h2-bold mb-6 text-center lg:text-left">START YOUR FITNESS JOURNEY TODAY</h1>
          <ContactForm message="Schedule a Tour" />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
