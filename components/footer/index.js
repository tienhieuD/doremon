import React, { useState, useEffect } from 'react'

const Footer = () => {
  return (
    <>
      <div className="bg-[#13172B] ">
        <div className=" text-white container mx-auto grid gap-8 sm:gap-16 pt-20 pb-10">
          <div className='flex flex-col items-center sm:items-start'>
            <h2 className=" text-14 font-inter">
              For more information, partnership and press inquiries:
            </h2>
            <h1 className=" text-20 sm:text-32 mt-2 mb font-cabinet">doraemonfinance@gmail.com</h1>
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-16'>
            <section className='flex items-center gap-3'>
              <img src="/svg/Discord.svg" className=" h-8 sm:h-auto" />
              <p className=' font-inter font-bold'>Join Discord</p>
            </section>
            <section className='flex items-center gap-3'>
              <img src="/svg/Telegram.svg" className=" h-8 sm:h-auto" />
              <p className=' font-inter font-bold'>Join Telegram</p>
            </section>
            <section className='flex items-center gap-3'>
              <img src="/svg/Twitter.svg" className=" h-8 sm:h-auto" />
              <p className=' font-inter font-bold'>Join Twitter</p>
            </section>
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <img src="/svg/Logo-Footer.svg" className=" h-auto" />
            <p className=' font-inter text-10 sm:text-base '>Copyright © 2022 Doraemon.Finance! All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
