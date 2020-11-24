import React, { useEffect, useState } from 'react'

import GeneralCard from '../components/GeneralCard'

import generalActivity from '../services/general-activity.service'

const Overview = () => {
    const [generalActivityList, setGeneralActivityList] = useState([])

    useEffect(() => {
        setGeneralActivityList(generalActivity())
    }, [])
    
    
    return(
        <div>
            <section className="overview">
                <div className="container flex-layout wrap">
                {generalActivityList.map(card => (
                    <GeneralCard data={card} />
                ))}
                </div>
            </section>
        </div>
    )
}


export default Overview