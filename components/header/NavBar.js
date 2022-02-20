import React, { useState } from 'react';


const data = [
  {
    name: 'How it works',
    href: '#howitwork'
  },
  {
    name: 'DAO',
    href: '#dao'
  },
  {
    name: 'Tokenomics',
    href: '#tokenomics'
  },
  {
    name: 'Roadmap',
    href: '#roadmap'
  },
  {
    name: 'Team',
    href: '#core-team-member'
  },
  {
    name: 'FAQ',
    href: '#faq'
  },
]

const Menu = ({ className, toggleOpen }) => {
  return <div className={className || ""}>
    <ul className='mt-16 sm:mt-0 sm:flex sm:gap-8 animate-emerge-up'>
      {data.map(item => (
        <li className='text-24 text-white font-medium mb-8 transition-colors border-b-2 border-transparent hover:border-white hover:animate-pulse sm:mb-0 sm:text-16'>
          <a href={item.href} onClick={() => toggleOpen && toggleOpen()}>{item.name}</a>
        </li>
      ))}
      <li className='mt-32 sm:mt-0 sm:hidden'>
        <button className='bg-red-500 hover:bg-red-600 transition-all text-white font-semibold w-full rounded-full py-4'>
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
  const toggleOpen = () => setOpen(!open)

  return (
    <nav className={`${open && `fixed w-full h-full`} sm:container sm:mx-auto pt-11 pb-5 px-7 overflow-auto bg-gradient-to-br from-[#3869e8] to-[#50a3e4] sm:pt-9 sm:from-transparent sm:to-transparent`}>
      <div className='flex justify-between'>
        <a href='#' className='flex transition-all hover:scale-110'>
          <img src='/images/logo.png' className='h-12 mr-2' />
          <img src='/images/Doraemon.Finance.svg' />
        </a>
        <Menu className='items-center hidden sm:flex' />
        <button className='bg-red-500 hover:bg-red-600 transition-all text-white font-semibold w-40 rounded-full hidden sm:block'>
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
        <Menu toggleOpen={toggleOpen} />
      }
    </nav>
  )
}

export default NavBar;