import React from 'react';

const SectionRoadmap = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="200" id="roadmap" className='sm:pt-24'>
      <h2 data-aos="fade-up" data-aos-delay="400" className='font-cabinet text-white font-black text-28 text-center mt-14 mb-12 sm:text-48 sm:mb-20'>Roadmap</h2>

      <img data-aos="fade-up" data-aos-delay="800" className='mx-auto hidden sm:block' src='/images/roadmap.png' />

      <div className="timeline mx-6 sm:hidden">
        <div className="timeline__container mb-10">
          <div className=''>
            <h3 className='text-[#FFD80D] text-24 font-black'>PHASE 1</h3>
            <p className='mt-6 text-white'>
              <ul className='ticks'>
                <li className='leading-7 mb-2'> Idea, Brand design, Graphic design </li>
                <li className='leading-7 mb-2'> Build DAO v1.0 </li>
                <li className='leading-7 mb-2'> Launch website and social channels</li>
                <li className='leading-7 mb-2'> Activate Marketing and PR </li>
                <li className='leading-7 mb-2'> Airdrop </li>
                <li className='leading-7 mb-2'> Private Sale </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="timeline__container mb-10">
          <div className=''>
            <h3 className='text-[#FFD80D] text-24 font-black'>PHASE 2</h3>
            <p className='mt-6 text-white'>
              <ul className='ticks'>
                <li className='leading-7 mb-2'> IDO</li>
                <li className='leading-7 mb-2'> List Pancakeswap</li>
                <li className='leading-7 mb-2'> List Mexc, Gate and some other CEXs</li>
                <li className='leading-7 mb-2'> Launch DAO v1.0</li>
                <li className='leading-7 mb-2'> Allow for crypto contributions </li>
                <li className='leading-7 mb-2'> Proposal and Vote</li>
                <li className='leading-7 mb-2'> Grow holders to 10K</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="timeline__container mb-10">
          <div className=''>
            <h3 className='text-[#FFD80D] text-24 font-black'>PHASE 3</h3>
            <p className='mt-6 text-white'>
              <ul className='ticks'>
                <li className='leading-7 mb-2'> Build DAO v2.0</li>
                <li className='leading-7 mb-2'> Improve UI &amp; UX for website</li>
                <li className='leading-7 mb-2'> Introduce custom tools and integrations</li>
                <li className='leading-7 mb-2'> Launch custom Discord channels</li>
                <li className='leading-7 mb-2'> Grow holders to 50K</li>
                <li className='leading-7 mb-2'> Build DAO mobile app</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="timeline__container mb-10">
          <div className=''>
            <h3 className='text-[#FFD80D] text-24 font-black '>PHASE 4</h3>
            <p className='mt-6 text-white'>
              <ul className='ticks'>
                <li className='leading-7 mb-2'> Launch DAO mobile app on Android &amp; iOS</li>
                <li className='leading-7 mb-2'> Improve crowdfunding tools</li>
                <li className='leading-7 mb-2'> Update tool sets</li>
                <li className='leading-7 mb-2'> Grow holders to 100K</li>
                <li className='leading-7 mb-2'> List Coinbase and more CEXs</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="timeline__container mb-10">
          <div className=''>
            <h3 className='text-[#FFD80D] text-24 font-black'>PHASE 5</h3>
            <p className='mt-6 text-white'>
              <ul className='ticks'>
                <li className='leading-7 mb-2'> Set DAO up for full autonomy</li>
                <li className='leading-7 mb-2'> Give DAO full control</li>
                <li className='leading-7 mb-2'> Launch final version of DAO</li>
                <li className='leading-7 mb-2'> Grow holders to 500K</li>
                <li className='leading-7 mb-2'> List Binance</li>
              </ul>
            </p>
          </div>
        </div>

      </div>

      <span className='block opacity-0 sm:pt-32'>text</span>
    </section>
  )
}


export default SectionRoadmap;