import React from 'react';

const data = [
  {
    title: 'Easily transform any wallet into a powerful web3 investing DAO',
    description: `Connect your wallet and launch an investment club in a few clicks for just the cost of gas. Creating an investing DAO has never been easier.`,
    imgUrl: '/images/how1.png',
    thumbUrl: '/images/h1.png',
  },
  {
    title: 'Send a link to accept deposits from members',
    description: `Ready to bring everyone on board? Send members a link to easily deposit (and receive ERC-20 mirrorshares) into your investing DAO.`,
    imgUrl: '/images/how2.png',
    thumbUrl: '/images/h2.png',
  },
  {
    title: 'Manage everything investments, members, and more together',
    description: `Never manually track investments or trades on spreadsheets again. Syndicate's dashboard manages investments, members, and more in-real time.`,
    imgUrl: '/images/how3.png',
    thumbUrl: '/images/h3.png',
  },

]

const SectionHow = () => {
  return (
    <section>
      <div className='pt-16 sm:container sm:mx-auto'>
        <h2 className='font-cabinet font-black text-28 text-center mb-3 mx-6 sm:text-48 sm:mt-20'>How it works</h2>
        {
          data.map((item, index) => (
            <article className={`mb-10 sm:flex ${index % 2 === 0 ? 'sm:flex-row-reverse' : null} sm:justify-center sm:mt-24`}>
              <figure className='m-6 sm:w-[520px] sm:mx-12'>
                <img className='w-full' src={item.imgUrl} />
              </figure>
              <div className='px-6 sm:max-w-md sm:mx-12 sm:flex sm:flex-col sm:justify-center hover:scale-105 transition-all'>
                <img className='w-12 sm:mb-6' src={item.thumbUrl} />
                <h3 className='text-20 font-bold my-4 sm:text-24 '>
                  {item.title}
                </h3>
                <p className='text-[#555761] sm:mt-6'>
                  {item.description}
                </p>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default SectionHow;