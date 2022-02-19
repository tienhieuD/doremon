import React, { useState, useEffect } from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-[#13172B]">
                <div className=" text-white container mx-auto grid gap-16 pt-20 pb-10">
                    <div>
                        <h2 className=" text-14">
                            For more information, partnership and press inquiries:
                        </h2>
                        <h1 className=" text-32 mt-2 mb">doraemonfinance@gmail.com</h1>
                    </div>
                    <div className='flex gap-16'>
                        <section className='flex items-center gap-3'>
                            <img src="/svg/Discord.svg" className=" h-auto" />
                            <p>Join Discord</p>
                        </section>
                        <section className='flex items-center gap-3'>
                            <img src="/svg/Telegram.svg" className=" h-auto" />
                            <p>Join Telegram</p>
                        </section>
                        <section className='flex items-center gap-3'>
                            <img src="/svg/Twitter.svg" className=" h-auto" />
                            <p>Join Twitter</p>
                        </section>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img src="/svg/Logo-Footer.svg" className=" h-auto" />
                        <p>Copyright © 2022 Doraemon.Finance! All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
