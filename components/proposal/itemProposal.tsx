import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'

const ItemProposal = (props: any) => {
    const {
        title,
        timeEnd,
        status,
        votes,
        BNBPresent,
        totalBNB,
        agree,
        reject,
        totalMember,
        proposedBy,
        index,
        size } = props;
    const [count, setCount] = useState([]);
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const percent = Math.round(agree / votes * 100);
    const ref = useRef(null);

    const renderPercent = () => {
        var indents = [];
        const widthParent = ref.current.offsetWidth;
        let value;
        if (widthParent < 500) {
            value = Math.round(widthParent / 12.5);
        } else {
            value = Math.round(widthParent / 12);
        }
        for (var i = 0; i < value; i++) {
            indents.push(<div className=' p-2px bg-white ml-1 transform rotate-12 bg-opacity-10' key={i}></div>);
        }
        return indents;
    }

    useEffect(() => {
        setCount(renderPercent());
    }, [size]);

    useEffect(() => {
        const target = new Date(timeEnd);

        const interval: any = () => {
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
        }

        if (status === 'Pause') {
            interval();
        } else {
            setInterval(interval, 1000)
        }
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='items-proposal p-4 font-inter w-full sm:w-2/3 flex gap-4 my-4 '>
            <div className='bg-[#505D7D] w-14 h-14 text-white font-bold text-20 rounded-xl flex justify-center items-center'>
                {index}
            </div>
            <div className='flex flex-col w-full gap-2'>
                <section className='flex flex-col sm:flex-row justify-between items-start sm:items-center '>
                    <p className=' text-16 sm:text-xl font-bold'>{title}</p>
                    <div className='flex items-center gap-2 text-12 sm:text-base font-medium'>
                        {
                            status === 'Ended' ? '' : status === 'Available' ? (<><p>Ends in</p><section className='bg-[#E2E2E2] rounded-md px-2 py-1'>
                                {days}: {hours}: {minutes}: {seconds}
                            </section></>) : ((<><p>Ends in</p><section className='bg-[#E2E2E2] rounded-md px-2 py-1'>
                                {days}: {hours}: {minutes}: {seconds}
                            </section></>))
                        }

                        <section className={` rounded-md text-white px-2 py-1 ${status === 'Available' ? 'bg-[#21C272]' : status === 'Ended' ? 'bg-[#ABB2C4]' : 'bg-[#FFB627]'}`}>
                            {status}
                        </section>
                    </div>
                </section>
                <section className='bg-[#E2E2E2] rounded h-4 flex gap-1' ref={ref}>
                    <div className='h-4 rounded bg-[#3E74FF] flex gap-1' style={{ width: percent + '%' }}>
                        {count}
                    </div>
                    <div className='h-4 rounded bg-red-500 flex gap-1' style={{ width: 100 - percent + '%' }}>
                    </div>
                </section>
                <section className='flex justify-between flex-col sm:flex-row text-14 sm:text-base'>
                    <div className='flex gap-2 text-12 sm:text-base '>
                        <p className=' font-medium'>{votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} votes </p>
                        <span className=' p-1px bg-gray-600 bg-opacity-20'></span>
                        <div className='flex font-extralight'>
                            <img src="/svg/arrow-up.svg" className=" h-auto" />
                            <p>{agree} agree</p>
                        </div>
                        <div className='flex font-extralight'>
                            <img src="/svg/arrow-down.svg" className=" h-auto" />
                            <p>{reject} reject</p>
                        </div>
                    </div>
                    <div className='flex gap-2 self-end'>
                        <p className=' font-thin'>Proposed by <span className='font-medium'>{proposedBy}</span></p>
                        {/* <span className=' p-1px bg-gray-600 bg-opacity-20'></span> */}
                        {/* <section className='flex space-x-1' >
                            <img src="/svg/Members.svg" className=" h-auto" />
                            <p>{totalMember} members</p>
                        </section> */}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ItemProposal
