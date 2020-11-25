import React, { useEffect, useState } from 'react'

import TodayCard from '../components/TodayCard'

import todayActivity from '../services/today-activity.service'

const Overview = () => {
    const [todayActivityList, setTodayActivityList] = useState([])

    useEffect(() => {
        setTodayActivityList(todayActivity())
    }, [])
    
    
    return(
        <div>
            <section className="today">
                <div className="container">
                    <h2>Overview - Today</h2>
                    <div className="today__row flex-layout wrap">
                    {todayActivityList.map(card => (
                        <div className="today__col">
                            <TodayCard popid={`pop-${card.socialProviderName}`} data={card} />
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Overview