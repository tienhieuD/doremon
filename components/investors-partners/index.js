const data = [
  '/logo/mexc.svg',
  '/logo/gate.svg',
  '/logo/coinGecko.svg',
  '/logo/coinMarketCap.svg',
  '/logo/kcc.svg',
  '/logo/itsBlockchain.svg',
  '/logo/redSwis.svg',
  '/logo/r2.svg',
  '/logo/skyMan.svg',
  '/logo/binStarter.svg',
  '/logo/basic.svg',
  '/logo/blue.svg',
]

export default function InvestorsPartners() {
  const renderList = () => {
    return data.map((el, index) => (
      <img src={el} className=" m-auto h-24 sm:h-auto px-4" key={index} />
    ))
  }
  return (
    <div id="investors-partners" className="w-full bg-bgCoreTeam">
      <div className="container mx-auto pb-24 sm:pb-40">
        <div className="sm:text-5xl text-3xl leading-10 font-black not-italic lg:mb-32 mb-10 text-bgFqa font-cabinet text-center ">
          {'Investors & Partners'}
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4 w-full px-6">
          {renderList()}
        </div>
      </div>
    </div>
  )
}
