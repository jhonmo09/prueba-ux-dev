import React, { useEffect, useState } from 'react'

import generalInfo from '../services/general-info.service'


const Header = () => {
    const [generalInfoList, setGeneralInfoList] = useState([])

    useEffect(() => {
        setGeneralInfoList(generalInfo())
    }, [])

    //state = generalInfoList

    const toggleDark = () => {
        //generalInfoList.darkMode = true;
        //console.log(generalInfoList.darkMode);
        document.querySelector('.App').classList.toggle('light_theme');
        document.querySelector('.App').classList.toggle('dark_theme');
    }
    
    //const addCommatoFollowers = g.toLocaleString(undefined, {maximumFractionDigits:2});

    
    return(
        <div>
            <header className="header">
                <div className="container flex-layout justify-between">
                    <div className="header__left">
                        <h1 className="bold">Social Media Dashboard</h1>
                        <p>Total Followers: {generalInfoList.totalFollowers}</p>
                    </div>
                    <div className="header__right">
                        <div className="header__dark-mode" onClick={toggleDark}>Dark Mode</div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header