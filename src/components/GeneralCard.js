import React, { useEffect, useState } from 'react'



import generalActivity from '../services/general-activity.service'

import iconUp from '../images/icon-up.svg'
import iconDown from '../images/icon-down.svg'


const GeneralCard = (props) => {
    const [generalActivityList, setGeneralActivityList] = useState([])

    useEffect(() => {
        setGeneralActivityList(generalActivity())
    }, [])

    const images = require.context('../images', true);
    let img = images('./' + props.data.accountIcon);
    
    let today_class;
    let ind_icon;
    if(props.data.followersToday <= 0){
        today_class = 'less';
        ind_icon = iconDown;
    }else{
        today_class = 'more'
        ind_icon = iconUp;
    }

    const fnumber = props.data.followersToday
    //fnumber.toString().replace(/^-/,'')

    const openPopup = () => {
        document.getElementById(props.popid).classList.add('open');
    }
    
    return(
        
        <div onClick={openPopup} className={`flex-layout direction-col align-items-center justify-center card card--general ${props.data.accountColor}`}>
            <div className="flex-layout justify-center align-items-center">
                <img src={img.default} />
                <p className="card__account">{props.data.accountName}</p>
            </div>
            <h3 className="card__number">{props.data.followersNumber}</h3>
            <h3 className="card__label">{props.data.followersLabel}</h3>

            <div className={`card__today ${today_class}`}>{fnumber} Today</div> 
        </div>
    )
}


export default GeneralCard