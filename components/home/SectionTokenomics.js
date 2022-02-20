import React from 'react';

const SectionTokenomics = () => {
  return (
    <section id="tokenomics" className='pt-14 sm:pt-40'>
      <h2 className='font-cabinet text-white font-black text-28 text-center mb-10 sm:text-48 sm:mb-20'>Tokenomics</h2>
      <img className='mx-auto sm:hidden ' src='/images/tokenomics.png' />
      <img className='mx-auto hidden sm:block mb-40 ' src='/images/tokenomics2.png' />
      <ul className='mx-6 pb-20 sm:hidden'>
        <li className='flex mt-6'>
          <img className='w-12 mr-4' src="/images/tk1.png" />
          <span className='text-white font-semibold'>
            DAO reward <br />
            15%
          </span>
        </li>
        <li className='flex mt-6'>
          <img className='w-12 mr-4' src="/images/tk2.png" />
          <span className='text-white font-semibold'>
            Team &amp; marketing<br />
            15%
          </span>
        </li>
        <li className='flex mt-6'>
          <img className='w-12 mr-4' src="/images/tk3.png" />
          <span className='text-white font-semibold'>
            Treasury <br />
            20%
          </span>
        </li>
        <li className='flex mt-6'>
          <img className='w-12 mr-4' src="/images/tk4.png" />
          <span className='text-white font-semibold'>
            Presale &amp; Private sale <br />
            20%
          </span>
        </li>
        <li className='flex mt-6'>
          <img className='w-12 mr-4' src="/images/tk5.png" />
          <span className='text-white font-semibold'>
            Eco growth <br />
            10%
          </span>
        </li>
        <li className='flex mt-6'>
          <img className='w-12 mr-4' src="/images/tk6.png" />
          <span className='text-white font-semibold'>
            Airdrop <br />
            5%
          </span>
        </li>
        <li className='flex mt-6'>
          <img className='w-12 mr-4' src="/images/tk7.png" />
          <span className='text-white font-semibold'>
            Liquidity <br />
            15%
          </span>
        </li>
      </ul>

      <img src='/images/Divider.png' className='sm:w-full sm:h-1' />
    </section>
  )
}

export default SectionTokenomics;