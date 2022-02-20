import React, { useState } from 'react';

const Menu = ({ className }) => {
  return <div className={className || ""}>
    <ul className='mt-16 sm:mt-0 sm:flex sm:gap-8'>
      <li className='text-24 text-white font-medium mb-8 sm:mb-0 sm:text-16'><a href="#">How it works</a></li>
      <li className='text-24 text-white font-medium mb-8 sm:mb-0 sm:text-16'><a href="#">DAO</a></li>
      <li className='text-24 text-white font-medium mb-8 sm:mb-0 sm:text-16'><a href="#">Tokenomics</a></li>
      <li className='text-24 text-white font-medium mb-8 sm:mb-0 sm:text-16'><a href="#">Roadmap</a></li>
      <li className='text-24 text-white font-medium mb-8 sm:mb-0 sm:text-16'><a href="#">Team</a></li>
      <li className='text-24 text-white font-medium sm:text-16'><a href="#">FAQ</a></li>
      <li className='mt-32 sm:mt-0 sm:hidden'>
        <button className='bg-red-500 text-white font-semibold w-full rounded-full py-4'>
          Get started
        </button>
      </li>
    </ul>
  </div>
}

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const onClickMenu = () => {
    setOpen(!open);
  }

  return (
    <nav className={`${open && `fixed w-full h-full`} sm:container sm:mx-auto pt-11 pb-5 px-7 overflow-auto bg-gradient-to-br from-[#3869e8] to-[#50a3e4] sm:pt-9 sm:from-transparent sm:to-transparent`}>
      <div className='flex justify-between'>
        <a href='#' className='flex'>
          <img src='/images/logo.png' className='h-12 mr-2' />
          <img src='/images/Doraemon.Finance.svg' />
        </a>
        <Menu className='items-center hidden sm:flex' />
        <button className='bg-red-500 text-white font-semibold w-40 rounded-full hidden sm:block'>
          Get started
        </button>
        <button className='sm:hidden' onClick={onClickMenu}>
          {open
            ? <img className='mr-2' src='/images/close.svg' />
            : <img className='-mt-4' src='/images/menu.svg' />
          }
        </button>
      </div>
      {open &&
        <Menu />
      }
    </nav>
  )
}

export default NavBar;