import React, { useState } from 'react';
import { SectionInvest } from '../home';
import NavBar from './NavBar';

const Header = () => {
  return <header className='bg-gradient-to-br from-[#2057e6] to-[#3c99e1]'>
    <NavBar />
    <SectionInvest />
  </header>
}

export default Header