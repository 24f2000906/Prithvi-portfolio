import React from 'react'

const page = () => {
  return (
    <>
      <div className="bg-transparent text-blue-100 sm:p-20 pt-7">
        <h1 className='md:px-0 px-5 pb-5 text-6xl animate__animated animate__lightSpeedInLeft font-semibold'>My Works</h1>
        <div className="flex flex-wrap md:gap-3 gap-1 justify-around">
          <a href='https://parking-app-24f2000906.onrender.com/' className="h-60 w-90 flex justify-center cursor-pointer items-center animate__animated animate__zoomInUp hover:scale-105 duration-300 transform">
            <div className="absolute bg-blue-200 opacity-20 rounded-2xl h-54 w-81 md:h-60 md:w-90"></div>
            <img src="carvault.png" className='h-45 w-80 z-10 rounded-md' />
          </a>
          <a href='https://timeelectric.in' className="h-60 w-90 flex justify-center cursor-pointer items-center animate__animated animate__zoomInUp hover:scale-105 duration-300 transform">
            <div className="absolute bg-blue-200 opacity-20 rounded-2xl h-54 w-81 md:h-60 md:w-90"></div>
            <img src="timeelectric.png" className='h-45 w-80 z-10 rounded-md' />
          </a>
          <a href='https://web3-psi-puce.vercel.app/' className="h-60 w-90 flex justify-center cursor-pointer items-center animate__animated animate__zoomInUp hover:scale-105 duration-300 transform">
            <div className="absolute bg-blue-200 opacity-20 rounded-2xl h-54 w-81 md:h-60 md:w-90"></div>
            <img src="web3.png" className='h-45 w-80 z-10 rounded-md' />
          </a>
          <a href='https://prithvi-bansal.vercel.app/' className="h-60 w-90 flex justify-center cursor-pointer items-center animate__animated animate__zoomInUp hover:scale-105 duration-300 transform">
            <div className="absolute bg-blue-200 opacity-20 rounded-2xl h-54 w-81 md:h-60 md:w-90"></div>
            <img src="portfolio.png" className='h-45 w-80 z-10 rounded-md' />
          </a>
        </div>
      </div>
    </>
  )
}

export default page
