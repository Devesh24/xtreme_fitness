import Banner from "@/components/shared/Banner"
import HomeAbout from "@/components/shared/HomeAbout"
import HomeBlogs from "@/components/shared/HomeBlogs"
import HomeContact from "@/components/shared/HomeContact"
import HomeExperts from "@/components/shared/HomeExperts"
import HomeServices from "@/components/shared/HomeServices"
import HomeTestimonials from "@/components/shared/HomeTestimonials"
import WhyUs from "@/components/shared/WhyUs"

const Home = () => {
  return (
    <div>
        <Banner />
        <WhyUs />
        <HomeAbout />
        <HomeServices />
        <HomeExperts />
        <HomeTestimonials />
        <HomeBlogs />
        <HomeContact />
    </div>
  )
}

export default Home