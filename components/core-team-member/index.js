const data = [
  {
    image: '/core-team/jamesgun.png',
    name: 'James Gun',
    title: 'CEO',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
  {
    image: '/core-team/alexbenjamin.svg',
    name: 'Alex Benjamin',
    title: 'CMO',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
  {
    image: '/core-team/laurazaharia.svg',
    name: 'Laura Zaharia',
    title: 'CTO',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
  {
    image: '/core-team/emilygarden.svg',
    name: 'Emily Garden',
    title: 'CFO',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
  {
    image: '/core-team/annawaston.svg',
    name: 'Anna Waston',
    title: 'Blockchain Leader',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
  {
    image: '/core-team/matthewdanrow.svg',
    name: 'Matthew Danrow',
    title: 'Technical Leader',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
  {
    image: '/core-team/alexandervergara.svg',
    name: 'Alexander Vergara',
    title: 'Game Developer Leader',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
  {
    image: '/core-team/marcdaniels.svg',
    name: 'Marc Daniels',
    title: 'Head of UI/UX',
    description:
      '3x serial entrepreneur using his experience 10x-ing companies to grow Doraemon.Finance.',
    linkedin: 'https://www.linkedin.com',
  },
]

export default function CoreTeamMember() {
  const renderList = () => {
    return data.map((el, index) => (
      <div
        key={index}
        className="sm:w-64 w-80 h-auto bg-bgCoreTeam border rounded-2xl border-gray-200 px-4 py-6 text-center my-1 mx-auto"
      >
        <img src={el.image} className="w-32 h-32 mb-4 m-auto" />
        <div className="text-xl leading-7 font-semibold not-italic mb-2 font-inter text-bgFqa">
          {el.name}
        </div>
        <div className="text-sm leading-4 font-semibold not-italic mb-2 text-red-500 font-inter">
          {el.title}
        </div>
        <div className="text-sm leading-4 font-normal not-italic mb-6 text-gray-400 font-inter">
          {el.description}
        </div>
        <a href={el.linkedin} target="_blank">
          <img src="/linkedin.svg" className="w-6 h-6 m-auto" />
        </a>
      </div>
    ))
  }
  return (
    <div className="bg-bgCoreTeam">
      <div className="container mx-auto pb-20 sm:pb-32">
        <div className="sm:text-5xl text-3xl leading-10 font-black not-italic sm:mb-16 m-10 text-bgFqa font-cabinet text-center">
          Core team member
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {renderList()}
        </div>
      </div>
    </div>
  )
}
