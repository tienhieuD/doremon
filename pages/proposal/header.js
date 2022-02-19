import React from 'react'

const Header = () => {
  return (
    <>
      <div>
        <ul class="flex justify-between m-8">
          <li class="mr-3">
            <img src="/svg/Logo.svg" className=" h-auto" />
          </li>
          <li class="mr-3">
            <img src="/svg/Button-Header.svg" className=" h-auto" />
          </li>
        </ul>
      </div>
      <div className="header-background-proposal pt-20 flex flex-col justify-center items-center">
        <div className="">
          <img src="/svg/Title-Intro.svg" className=" h-auto" />
        </div>
        <div className='header-background-frame-proposal px-16 mt-8'>
          <img src="/svg/FrameHeader.svg" className=" h-auto" />
        </div>
        <img src="/svg/ButtonSolid.svg" className=" h-auto mt-8" />
      </div>
    </>
  )
}

export default Header
