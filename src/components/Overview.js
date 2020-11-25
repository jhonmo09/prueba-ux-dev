import React, { useEffect, useState } from 'react'

import GeneralCard from '../components/GeneralCard'
import Popup from '../components/Popup'

import generalActivity from '../services/general-activity.service'

const Overview = () => {
    const [generalActivityList, setGeneralActivityList] = useState([])

    useEffect(() => {
        setGeneralActivityList(generalActivity())
    }, [])
    
    
    return(
        <div>
            <section className="overview">
                <div className="container">
                    <div className="overview__row flex-layout wrap">
                    {generalActivityList.map(card => (
                        <div className="overview__col">
                            <GeneralCard popid={`pop-${card.socialProviderName}`} data={card} />
                            <Popup popid={`pop-${card.socialProviderName}`} data={card} />
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Overview