import { useEffect, useState } from 'react'
import Faq from '../components/faq'
import CoreTeamMember from '../components/core-team-member'
import InvestorsPartners from '../components/investors-partners'

export default function HomePage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        {/* <Faq /> */}
        {/* <CoreTeamMember/> */}
        <InvestorsPartners />
      </div>
    </>
  )
}
