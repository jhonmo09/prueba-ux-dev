import React, { PureComponent } from 'react';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import iconUp from '../images/icon-up.svg'

const Popup = (props) => {
    
    const graph_array = [];

    let graph_data = props.data.graph;

    for(let i = 0; i < graph_data.length; i++){
        let new_item = {
            name: i+4,
            'New Followers': graph_data[i]
        }
        console.log(new_item);
        graph_array.push(new_item);
    } 

    const images = require.context('../images', true);
    let img = images('./' + props.data.accountIcon);

    const closePopup = () => {
        document.getElementById(props.popid).classList.remove('open');
    }

    
    return(
        
        <div id={props.popid} className={`popup flex-layout align-items-center justify-center`}>

            <div className="popup__content">
                <a className="popup__close" onClick={closePopup}></a>
                <div className="popup__header">
                    <h2>{props.data.socialProviderName} {props.data.followersLabel}</h2>
                    <div className="flex-layout align-items-center">
                        <img src={img.default} />
                        <p className="popup__account">{props.data.accountName}</p>
                    </div>

                    <div className="flex-layout popup__indicators">
                        <div className="popup__total flex-layout align-items-center">
                            <h3>{props.data.followersNumber}</h3>
                            <p>Total<br/> Followers</p>
                        </div>
                        
                        <div className="popup__last-days flex-layout align-items-center">
                            <img src={iconUp} />
                            <h3>{props.data.followersInLast10Days}</h3>
                            <p>New followers in<br/> the past 10 days</p>
                        </div>

                        <div className="popup__today flex-layout align-items-center">
                            <img src={iconUp} />
                            <h3>{props.data.followersToday}</h3>
                            <p>New followers<br/> TODAY</p>
                        </div>
                    </div>
                    
                </div>

                <div className="popup__chart">
                    <h3>May 4 - May 13</h3>
                    <div className="chart_inner">
                        <LineChart width={960} height={200} data={graph_array} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line activeDot={{ r: 8 }} type="monotone" dataKey="New Followers" stroke="#aeb3cb" />
                        </LineChart>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Popup