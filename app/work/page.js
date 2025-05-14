import React from 'react'

const page = () => {
  return (
    <>
        <div className="bg-transparent text-blue-100 md:p-20 pb-20">
            <h1 className='md:px-0 px-5 text-6xl font-semibold'>My Works</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:mt-10">
                <a href='https://web3-psi-puce.vercel.app/pricing' className="h-60 w-90 flex justify-center cursor-pointer items-center transition-5">
                  <div className="absolute bg-blue-200 opacity-20 rounded-2xl h-54 w-81 md:h-60 md:w-90"></div>
                  <img src="web3-1.png" className='h-45 w-80 z-10 rounded-md' />
                </a>
                <a href='https://web3-psi-puce.vercel.app/' className="h-60 w-90 flex justify-center cursor-pointer items-center transition-5">
                  <div className="absolute bg-blue-200 opacity-20 rounded-2xl h-54 w-81 md:h-60 md:w-90"></div>
                  <img src="portfolio.png" className='h-45 w-80 z-10 rounded-md' />
                </a>
                <a href='https://timeelectric.in' className="h-60 w-90 flex justify-center cursor-pointer items-center transition-5">
                  <div className="absolute bg-blue-200 opacity-20 rounded-2xl h-54 w-81 md:h-60 md:w-90"></div>
                  <img src="timeelectric.png" className='h-45 w-80 z-10 rounded-md' />
                </a>
            </div>
        </div>
    </>
  )
}

export default page
