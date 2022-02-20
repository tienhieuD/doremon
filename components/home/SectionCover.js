import React from 'react'

const SectionCover = () => {
  return (
    <section id="getstart">
      <img src='/images/Cover.svg' className=' w-full sm:h-auto object-cover hidden sm:block cursor-pointer' />
      <img src='/images/CoverSm.png' className=' w-full sm:h-auto object-cover sm:hidden cursor-pointer' />
    </section>
  )
}

export default SectionCover