import React, { useEffect, useState } from 'react'

import generalActivity from '../services/general-activity.service'

const GeneralCard = (props) => {
    const [generalActivityList, setGeneralActivityList] = useState([])

    useEffect(() => {
        setGeneralActivityList(generalActivity())
    }, [])
    
    
    return(
        <div className="card">
            {props.data.socialProviderName}
        </div>
    )
}


export default GeneralCard