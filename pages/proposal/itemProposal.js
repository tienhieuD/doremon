import React, { useEffect, useState } from 'react'

const ItemProposal = (props) => {
    const {
        title,
        timeEnd,
        status,
        BNBPresent,
        totalBNB,
        totalMember,
        createdBy,
        index } = props;
    const [count, setCount] = useState([]);
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const percent = Math.round(BNBPresent / totalBNB * 100);

    const renderPercent = (percent) => {
        var indents = [];
        for (var i = 0; i < percent; i++) {
            indents.push(<div className=' p-2px bg-white ml-1 transform rotate-12 bg-opacity-10 ' key={i}></div>);
        }
        return indents;
    }

    useEffect(() => {
        setCount(renderPercent(Math.round(BNBPresent / totalBNB * 100)));
        const target = new Date(timeEnd);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);

        setTimeout(() => {
            if (status === 'Pause') {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='items-proposal p-4 font-inter w-2/3 flex gap-4 my-4'>
            <div className='bg-[#505D7D] w-14 h-14 text-white font-bold text-20 rounded-xl flex justify-center items-center'>
                {index + 1}
            </div>
            <div className='flex flex-col w-full gap-2'>
                <section className='flex justify-between items-center '>
                    <p className=' text-xl font-bold'>{title}</p>
                    <div className='flex items-center gap-2 font-medium'>
                        {
                            status === 'Ended' ? '' : status === 'Available' ? (<><p>Ends in</p><section className='bg-[#E2E2E2] rounded-md px-2 py-1'>
                                {days}: {hours}: {minutes}: {seconds}
                            </section></>) : ((<><p>Ends in</p><section className='bg-[#E2E2E2] rounded-md px-2 py-1'>
                                {days}: {hours}: {minutes}: {seconds}
                            </section></>))
                        }

                        <section className={`rounded-md text-white px-2 py-1 ${status === 'Available' ? 'bg-[#21C272]' : status === 'Ended' ? 'bg-[#ABB2C4]' : 'bg-[#FFB627]'}`}>
                            {status}
                        </section>
                    </div>
                </section>
                <section className='bg-[#E2E2E2] rounded h-4'>
                    <div className='h-4 rounded bg-[#3E74FF] flex gap-1' style={{ width: percent + '%' }}>
                        {count}
                    </div>
                </section>
                <section className='flex justify-between'>
                    <div>
                        <p className=' font-medium'><span className=' text-red-500'>{BNBPresent} BNB raised</span> of {totalBNB} BNB ({Math.round(BNBPresent / totalBNB * 100)}%)</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className=' font-thin'>Created by <span className='font-medium'>{createdBy}</span></p>
                        <span className=' p-1px bg-gray-600 bg-opacity-20'></span>
                        <section className='flex space-x-1' >
                            <img src="/svg/Members.svg" className=" h-auto" />
                            <p>{totalMember} members</p>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ItemProposal
