import React from 'react';
const data = {
  AssetsContributed: 15119.82,
  TotalProposals: 10,
  TotalVotes: 100,
  Members: 200,
}

const Header = () => {
  return (
    <>
      <div className=' font-inter  '>
        <ul className="flex flex-col sm:flex-row justify-between m-8 items-center">
          <li className="mr-3">
            <img src="/svg/Logo.svg" className=" h-auto hover:cursor-pointer" />
          </li>
          <li className="mr-3 mt-4 sm:mt-0">
            <button className='border-[#FF464B] border-2 rounded-[100px] text-red-500 px-8 py-4 hover:text-white hover:bg-red-500 font-medium '>
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
      <div className="header-background-proposal pt-12 sm:pt-20 px-4 sm:px-0 flex flex-col justify-center items-center font-inter">
        <div className="flex flex-col justify-center items-center">
          <h1 className=' font-cabinet text-4xl sm:text-6xl'>DAO Governance</h1>
          <p className='mt-8 text-12 sm:text-base font-light'>Members can vote on proposals or delegate their vote to a third party. A minimum of 5 BUSD is required to submit proposals.</p>
        </div>
        <div className='header-background-frame-proposal p-16 mt-8 flex gap-8 xl:gap-24 flex-col xl:flex-row '>
          <section>
            <div className='flex gap-2'>
              <img src="/svg/dollar-circle.svg" className=" h-auto" />
              <p>Assets contributed</p>
            </div>
            <p className=' mt-8 text-48 font-cabinet'>{data.AssetsContributed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </section>
          <span className='border border-gray-700 border-opacity-20 '></span>
          <section>
            <div className='flex gap-2'>
              <img src="/svg/document-text.svg" className=" h-auto" />
              <p>Total proposals</p>
            </div>
            <p className=' mt-8 text-48 font-cabinet'>{data.TotalProposals}</p>
          </section>
          <span className='border border-gray-700 border-opacity-20'></span>
          <section>
            <div className='flex gap-2'>
              <img src="/svg/like.svg" className=" h-auto" />
              <p>Total votes</p>
            </div>
            <p className=' mt-8 text-48 font-cabinet'>{data.TotalVotes}</p>
          </section>
          <span className='border border-gray-700 border-opacity-20'></span>
          <section>
            <div className='flex gap-2'>
              <img src="/svg/profile-2user.svg" className=" h-auto" />
              <p>Members</p>
            </div>
            <p className=' mt-8 text-48 font-cabinet'>{data.Members}</p>
          </section>
        </div>
        <button className='rounded-[100px] px-8 py-4 text-white bg-red-500 hover:bg-red-400  font-medium mt-8'>
          Create Proposal
          <img src="/svg/arrow-right.svg" className=" h-auto inline-block ml-2 " />
        </button>
      </div>
    </>
  )
}

export default Header
