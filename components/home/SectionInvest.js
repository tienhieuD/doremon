import React from 'react';

const SectionInvest = () => {
  return (
    <section id="invest" data-aos="fade-up" data-aos-delay="200" className='pt-10'>
      <div className='bg-grid-pattern sm:bg-main sm:bg-bottom bg-no-repeat bg-top bg-contain sm:min-h-3xl'>
        <div className='sm:container sm:relative sm:mx-auto sm:my-auto'>
          <h1 data-aos="zoom-out" data-aos-delay="400" data-aos-duration="2000" className='font-cabinet font-black text-white px-6 sm:text-center'>
            <span className='block text-4xl font-black leading-normal sm:text-9xl'>Invest together</span>
            <span className='block text-4xl font-black sm:text-9xl sm:ml-80'>Win together</span>
          </h1>
          <div className='sm:bg-grid-pattern sm:bg-center sm:absolute sm:max-w-sm sm:right-[15%] sm:mt-32'>
            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="2000" className='text-white font-medium mt-4 px-6 font-inter hover:scale-[105%] transition-all'>
              Doraemon.Finance is revolutionizing investing by changing how communities and
              capital work together through accessible, effortless, and social web3 technologies.
              Transform any wallet into a powerful web3 investment club.
            </p>
            <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='flex mt-8 px-6'>
              <button className='bg-red-500 hover:bg-red-600 transition-all text-white font-semibold w-40 rounded-full py-4'>
                View demo
              </button>
              <button className='bg-transparent hover:opacity-60 transition-all text-white font-semibold w-40 rounded-full py-4'>
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