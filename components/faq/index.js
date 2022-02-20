import { useEffect, useState } from 'react'
import Question from './question'

const data = [
  {
    question: '01. What is a proposal investment?',
    answer:
      'An investment club is a group of people who pool their capital and make investments together. Currently, Syndicate enables you to create Web3 Investment Clubs. Syndicate can also help you create legal entities for your investment club(s).',
  },
  {
    question: '02. What are the criteria to create a club on Syndicate?',
    answer:
      'An investment club is a group of people who pool their capital and make investments together. Currently, Syndicate enables you to create Web3 Investment Clubs. Syndicate can also help you create legal entities for your investment club(s).',
  },
  {
    question: '03. How long does it take to create an investment club?',
    answer:
      'An investment club is a group of people who pool their capital and make investments together. Currently, Syndicate enables you to create Web3 Investment Clubs. Syndicate can also help you create legal entities for your investment club(s).',
  },
  {
    question: '04. What is the cost of creating an investment club?',
    answer:
      'An investment club is a group of people who pool their capital and make investments together. Currently, Syndicate enables you to create Web3 Investment Clubs. Syndicate can also help you create legal entities for your investment club(s).',
  },
  {
    question: '05. What legal entities are supported for clubs?',
    answer:
      'An investment club is a group of people who pool their capital and make investments together. Currently, Syndicate enables you to create Web3 Investment Clubs. Syndicate can also help you create legal entities for your investment club(s).',
  },
  {
    question: '06. Do all members in a club need to be accredited?',
    answer:
      'An investment club is a group of people who pool their capital and make investments together. Currently, Syndicate enables you to create Web3 Investment Clubs. Syndicate can also help you create legal entities for your investment club(s).',
  },
]
export default function Faq() {
  const renderQuestion = () =>
    data.map((el, index) => <Question {...el} index={index} />)

  return (
    <>
      <div id="faq" className="w-full h-auto flex flex-col items-center justify-center ">
        <div className="lg:px-40 px-6 sm:py-24 py-14 bg-bgFqa w-full h-auto text-center">
          <div className='container mx-auto'>
            <div className="sm:text-5xl text-3xl leading-10 font-black not-italic sm:mb-16 m-10 text-white font-cabinet">
              FAQs and answers
            </div>
            {renderQuestion()}
          </div>
        </div>
      </div>
    </>
  )
}
