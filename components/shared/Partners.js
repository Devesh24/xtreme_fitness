import React from 'react'

const Partners = () => {
  return (
    <div>
        <div className='wrapper flex-center'>
            <div className='w-[80%] grid grid-cols-4 py-16'>
                <div className='w-full h-[20vh] bg-no-repeat bg-center border-b border-r' style={{backgroundImage: "url('/assets/images/logos/partner-1.png')"}} />
                <div className='w-full h-[20vh] bg-no-repeat bg-center border-b border-r' style={{backgroundImage: "url('/assets/images/logos/partner-2.png')"}} />
                <div className='w-full h-[20vh] bg-no-repeat bg-center border-b border-r' style={{backgroundImage: "url('/assets/images/logos/partner-3.png')"}} />
                <div className='w-full h-[20vh] bg-no-repeat bg-center border-b' style={{backgroundImage: "url('/assets/images/logos/partner-4.png')"}} />
                <div className='w-full h-[20vh] bg-no-repeat bg-center border-r' style={{backgroundImage: "url('/assets/images/logos/partner-5.png')"}} />
                <div className='w-full h-[20vh] bg-no-repeat bg-center border-r' style={{backgroundImage: "url('/assets/images/logos/partner-6.png')"}} />
                <div className='w-full h-[20vh] bg-no-repeat bg-center border-r' style={{backgroundImage: "url('/assets/images/logos/partner-7.png')"}} />
                <div className='w-full h-[20vh] bg-no-repeat bg-center filter-grey' style={{backgroundImage: "url('/assets/images/logos/partner-8.png')"}} />
            </div>
        </div>
    </div>
  )
}

export default Partners