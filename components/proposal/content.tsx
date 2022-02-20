import React, { useState, useLayoutEffect } from 'react'
import ItemProposal from './itemProposal'

const dataClone = [
  {
    title: 'Fund Doraemon Foundation setup and 2022 operations',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Available',
    votes: 1224,
    agree: 614,
    reject: 610,
    BNBPresent: 150,
    totalBNB: 300,
    totalMember: 20,
    proposedBy: 'Benjamin',
  },
  {
    title: 'Proposal to Re-Elect Nouns DAO Core Contributor',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Ended',
    votes: 1224,
    agree: 122,
    reject: 1102,
    BNBPresent: 20,
    totalBNB: 200,
    totalMember: 20,
    proposedBy: 'Athena',
  },
  {
    title: 'setProposal ThresholdBPS(25)',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Pause',
    votes: 1224,
    agree: 979,
    reject: 245,
    BNBPresent: 800,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'Alex',
  },
  {
    title: 'Reimburse the Foundation for the purchase of Noun 179',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Pause',
    votes: 1224,
    agree: 490,
    reject: 734,
    BNBPresent: 400,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'John Snow',
  },
  {
    title: '100 DAYS OF NOUNS (Coloring Book Series)',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Available',
    votes: 1224,
    agree: 795,
    reject: 429,
    BNBPresent: 650,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'Elsa',
  },
  {
    title: 'Stake additional 10% of treasury in Lido',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Available',
    votes: 1224,
    agree: 1164,
    reject: 60,
    BNBPresent: 950,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'Tom',
  },
  {
    title: 'Fund David Horvath for Q1 Nouns Studio1 exploration',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Ended',
    votes: 1224,
    agree: 367,
    reject: 857,
    BNBPresent: 300,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'Johnny',
  },
  {
    title: 'A Very Nounish Gitcoinmas NFT Crossover Event',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Available',
    votes: 1224,
    agree: 673,
    reject: 551,
    BNBPresent: 550,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'Ballack',
  },
  {
    title: 'Brave Sponsored Takeover during NFT NYC',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Pause',
    votes: 1224,
    agree: 734,
    reject: 490,
    BNBPresent: 600,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'Foden',
  },
  {
    title: 'Stake additional 10% of treasury in Lido',
    timeEnd: '2/23/2022 23:59:59',
    status: 'Available',
    votes: 1224,
    agree: 184,
    reject: 1040,
    BNBPresent: 150,
    totalBNB: 1000,
    totalMember: 20,
    proposedBy: 'David',
  },
]

const Content = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-4 sm:mx-0">
      <div className=" text-24 sm:text-32 mt-12 sm:mt-20 font-bold mb-8">
        List Proposals
      </div>
      {dataClone.map((ele, index) => <ItemProposal
        title={ele.title}
        timeEnd={ele.timeEnd}
        status={ele.status}
        BNBPresent={ele.BNBPresent}
        totalBNB={ele.totalBNB}
        totalMember={ele.totalMember}
        proposedBy={ele.proposedBy}
        votes={ele.votes}
        agree={ele.agree}
        reject={ele.reject}
        index={dataClone.length - index}
        key={index}
        size={size}
      />)}
    </div>
  )
}

export default Content
