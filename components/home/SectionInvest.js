import React from 'react';

const SectionInvest = () => {
  return (
    <section className='pt-10'>
      <div className='bg-grid-pattern sm:bg-main sm:bg-bottom bg-no-repeat bg-top bg-contain sm:min-h-3xl'>
        <div className='sm:container sm:relative sm:mx-auto sm:my-auto'>
          <h1 className='font-cabinet font-black text-white px-6 sm:text-center'>
            <span className='block text-4xl font-black leading-normal sm:text-8xl'>Invest together</span>
            <span className='block text-4xl font-black sm:text-8xl sm:ml-80'>Win together</span>
          </h1>
          <div className='sm:bg-grid-pattern sm:bg-center sm:absolute sm:max-w-sm sm:right-[15%] sm:mt-32'>
            <p className='text-white font-medium mt-4 px-6 font-inter'>
              Doraemon.Finance is revolutionizing investing by changing how communities and
              capital work together through accessible, effortless, and social web3 technologies.
              Transform any wallet into a powerful web3 investment club.
            </p>
            <div className='flex mt-8 px-6'>
              <button className='bg-red-500 text-white font-semibold w-40 rounded-full py-4'>
                View demo
              </button>
              <button className='bg-transparent text-white font-semibold w-40 rounded-full py-4'>
                Read docs
                <img src='/images/right-arrow.png' className='inline-block h-3 ml-1' />
              </button>
            </div>
          </div>
        </div>
        <div className='mt-4 bg-invest sm:hidden'>
          <img className='mx-auto' src='/images/invest/Doraemon.png' />
        </div>
      </div>
    </section >
  )
}

export default SectionInvest;