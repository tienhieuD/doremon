import React from 'react'

const data = [
  {
    imgUrl: '/images/dao1.png',
    title: 'Investments in on-chain and off-chain assets',
    description: 'Invest in tokens and NFTs—as well as startups (via a legal entity). Never manually track investments or trades on a spreadsheet again—Syndicate’s dashboard displays token and NFT investments real-time.',
  },
  {
    imgUrl: '/images/dao2.png',
    title: 'Investments in on-chain and off-chain assets',
    description: 'Invest in tokens and NFTs—as well as startups (via a legal entity). Never manually track investments or trades on a spreadsheet again—Syndicate’s dashboard displays token and NFT investments real-time.',
  },
  {
    imgUrl: '/images/dao3.png',
    title: 'ERC-20 mirrortables and mirrorshares',
    description: 'Forget manually tracking DAO deposits and cap tables via surveys and spreadsheets. Each investment club has a mirrortable and mirrorshares powered by ERC-20 infrastructure that is fully composable with web3.',
  },
  {
    imgUrl: '/images/dao4.png',
    title: 'Off-chain investment memos and metadata',
    description: 'With Syndicate, you can record investments into off-chain assets (e.g., startup equity, SAFEs) and attach off-chain memos, metadata, and links making Syndicate a powerful tool for off-chain venture investing.',
  },
  {
    imgUrl: '/images/dao5.png',
    title: 'Deposits in any ERC-20 token',
    description: 'Create an investment club denominated in USDC, ETH, wETH, wBTC, DAI, or any ERC-20 token. Whether it’s for investing, giving grants, funding public goods, or more, Syndicate supports any ERC-20 asset.',
  },
  {
    imgUrl: '/images/dao6.png',
    title: 'DAO legal entities, bank accounts, tax filings',
    description: 'We’ve teamed with our friends at doola to enable DAOs on Syndicate to create legal entities, get EINs, open fiat bank accounts, submit state compliance filings, and issue K-1s tax forms easily and affordably.',
  },
]

const SectionDAO = () => {
  return (
    <section>
      <div className='pt-16 sm:container sm:mx-auto'>
        <h2 className='font-cabinet font-black text-28 leading-8 text-center mb-10 mx-6 sm:text-48 sm:mt-20 sm:mb-24 sm:leading-normal'>
          Powerful investing DAO tools, <br className='hidden sm:block' /> right out of the box
        </h2>
        <div className='sm:flex sm:flex-wrap sm:mb-40'>
          {
            data.map(item => (
              <article className='px-6 mb-10 sm:w-1/3 hover:scale-105 transition-all'>
                <figure>
                  <a href='#'>
                    <img className='w-full' src={item.imgUrl} />
                  </a>
                </figure>
                <div>
                  <h3 className='text-20 font-bold my-4'>
                    <a href='#'>
                      {item.title}
                    </a>
                  </h3>
                  <p className='text-[#555761]'>
                    {item.description}
                  </p>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SectionDAO