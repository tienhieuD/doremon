import { useEffect, useState } from 'react'

export default function Question(props) {
  const { question, answer, index } = props
  const [openAnswer, setOpenAnswer] = useState(false)
  const onClick = () => {
    setOpenAnswer(!openAnswer)
  }
  return (
    <div className="w-full py-11 border-b border-gray-600" key={index}>
      <div className="w-full flex flex-row justify-between ">
        <div className="sm:text-2xl text-base leading-8 text-white w-max font-inter text-left">
          {question}
        </div>
        {openAnswer ? (
          <img src="svg/minus-circle.svg" className="w-10" onClick={onClick} />
        ) : (
          <img src="svg/add-circle.svg" className="w-10" onClick={onClick} />
        )}
      </div>
      {openAnswer && (
        <div className="sm:text-base text-sm leading-6 font-normal not-italic mt-8 text-gray-500 font-inter text-left">
          {answer}
        </div>
      )}
    </div>
  )
}
