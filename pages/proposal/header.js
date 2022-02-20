import React from 'react'

const Header = () => {
  return (
    <>
      <div>
        <ul className="flex justify-between m-8">
          <li className="mr-3">
            <img src="/svg/Logo.svg" className=" h-auto" />
          </li>
          <li className="mr-3">
            <img src="/svg/Button-Header.svg" className=" h-auto" />
          </li>
        </ul>
      </div>
      <div className="header-background-proposal pt-12 sm:pt-20 px-2 sm:px-0 flex flex-col justify-center items-center">
        <div className="s">
          <img src="/svg/Title-Intro.svg" className=" h-auto" />
        </div>
        <div className='header-background-frame-proposal px-16 mt-8'>
          <img src="/svg/FrameHeader.svg" className=" h-auto" />
        </div>
        <img src="/svg/ButtonSolid.svg" className=" h-10 sm:h-auto mt-8" />
      </div>
    </>
  )
}

export default Header
