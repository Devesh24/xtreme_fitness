import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex-center flex-col w-full h-screen text-white bg-blue-200">
        <div className="w-[60%] flex-center flex-col gap-5 rounded-full p-10 bg-[#091029]">
            <Image src={"/assets/images/rocket404.png"} alt="Not found" width={400} height={400} />
            <h1 className="font-bold text-2xl lg:text-5xl">Work is in Progress</h1>
            <Link href={"/"} className="underline hover:text-red-500">Home</Link>
        </div>
    </div>
  )
}

export default NotFound