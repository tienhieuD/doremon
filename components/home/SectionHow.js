import React from 'react';

const SectionHow = () => {
  return (
    <section>
      <div className='pt-16 sm:container sm:mx-auto'>
        <h2 className='font-cabinet font-black text-28 text-center mb-3 mx-6 sm:text-48 sm:mt-20'>How it works</h2>

        <article className='mb-10 sm:flex sm:flex-row-reverse sm:justify-center sm:mt-24'>
          <figure className='m-6 sm:w-[520px] sm:mx-12'>
            <img className='w-full' src='/images/how1.png' />
          </figure>
          <div className='px-6 sm:max-w-md sm:mx-12 sm:flex sm:flex-col sm:justify-center'>
            <img className='w-12 sm:mb-6' src='/images/h1.png' />
            <h3 className='text-20 font-bold my-4 sm:text-24'>
              Easily transform any wallet into a powerful web3 investing DAO
            </h3>
            <p className='text-[#555761] sm:mt-6'>
              Connect your wallet and launch an investment club in a few clicks for
              just the cost of gas. Creating an investing DAO has never been easier.
            </p>
          </div>
        </article>

        <article className='mb-10 sm:flex sm:justify-center sm:mt-24'>
          <figure className='m-6 sm:w-[520px] sm:mx-12'>
            <img className='w-full' src='/images/how2.png' />
          </figure>
          <div className='px-6 sm:max-w-md sm:mx-12 sm:flex sm:flex-col sm:justify-center'>
            <img className='w-12 sm:mb-6' src='/images/h2.png' />
            <h3 className='text-20 font-bold my-4 sm:text-24'>
              Send a link to accept deposits from members
            </h3>
            <p className='text-[#555761] sm:mt-6'>
              Ready to bring everyone on board? Send members a link to easily deposit
              (and receive ERC-20 mirrorshares) into your investing DAO.
            </p>
          </div>
        </article>

        <article className='mb-10 sm:flex sm:flex-row-reverse sm:justify-center sm:mt-24'>
          <figure className='m-6 sm:w-[520px] sm:mx-12'>
            <img className='w-full' src='/images/how3.png' />
          </figure>
          <div className='px-6 sm:max-w-md sm:mx-12 sm:flex sm:flex-col sm:justify-center'>
            <img className='w-12 sm:mb-6' src='/images/h3.png' />
            <h3 className='text-20 font-bold my-4 sm:text-24'>
              Manage everything investments, members, and more together
            </h3>
            <p className='text-[#555761] sm:mt-6'>
              Never manually track investments or trades on spreadsheets again.
              Syndicate's dashboard manages investments, members, and more in-real time.
            </p>
          </div>
        </article>

      </div>
    </section>
  )
}

export default SectionHow;