import { useEffect, useState } from 'react'
import Header from 'components/header'
import { SectionDAO, SectionHow, SectionInvest, SectionRoadmap, SectionTokenomics, SectionCover } from 'components/home'
import SectionCoreTeamMember from 'components/core-team-member'
import SectionFAQ from 'components/faq'
import SectionInvestorsPartners from 'components/investors-partners'
import Footer from 'components/footer'

export default function HomePage() {
  return (
    <>
      <Header />

      <SectionHow />
      <SectionDAO />

      <div className='bg-gradient-to-br from-[#2057e6] to-[#3c99e1]'>
        <SectionTokenomics />
        <SectionRoadmap />
      </div>

      <SectionCoreTeamMember />
      <SectionInvestorsPartners />
      <SectionFAQ />
      <SectionCover />
      <Footer />
    </>
  )
}
