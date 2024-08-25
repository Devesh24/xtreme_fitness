import HomeBlogs from '@/components/shared/HomeBlogs'

const page = () => {
  return (
    <div>
        <div className='relative top-0 w-full h-[50vh] md:h-[80vh] bg-cover md:bg-center text-white flex-center h1-bold' style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/assets/images/blogs.jpg')"}}>
            BLOGS
        </div>
        <HomeBlogs />
    </div>
  )
}

export default page