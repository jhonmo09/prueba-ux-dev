import React, { useEffect, useState } from 'react'



import generalActivity from '../services/general-activity.service'

import iconUp from '../images/icon-up.svg'
import iconDown from '../images/icon-down.svg'


const TodayCard = (props) => {
    const [generalActivityList, setGeneralActivityList] = useState([])

    useEffect(() => {
        setGeneralActivityList(generalActivity())
    }, [])

    const images = require.context('../images', true);
    let img = images('./' + props.data.accountIcon);
    
    let today_class;
    let ind_icon;
    if(props.data.accountMetricIncrement <= 0){
        today_class = 'less';
        ind_icon = iconDown;
    }else{
        today_class = 'more'
        ind_icon = iconUp;
    }

    const fnumber = props.data.accountMetricIncrement
    //fnumber.toString().replace(/^-/,'')

    const openPopup = () => {
        document.getElementById(props.popid).classList.add('open');
    }
    
    return(
        
        <div onClick={openPopup} className={`flex-layout direction-col justify-between card card--today ${props.data.accountColor}`}>
            <div className="flex-layout justify-between align-items-center">
                <p className="card__title">{props.data.accountMetricTitle}</p>
                <img src={img.default} />
            </div>

            <div className="flex-layout justify-between align-items-end">
                <p className="card__number">{props.data.accountMetricValue}</p>
                <div className={`card__increment ${today_class}`}>
                    <img src={ind_icon} />
                    <span>{fnumber}%</span>
                </div> 
            </div>
        </div>
    )
}


export default TodayCard