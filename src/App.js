import React, { useEffect, useState } from 'react';

import generalInfo from './services/general-info.service'

import Overview from './components/Overview'
import Header from './components/Header'
import Today from './components/Today'

import './styles/App.scss';


const App = () => {
  const [generalInfoList, setGeneralInfoList] = useState([])

  useEffect(() => {
      setGeneralInfoList(generalInfo())
  }, [])

  let darkClass;
  if(generalInfoList.darkMode === true){
    darkClass = 'dark_theme';
  }else{
    darkClass = 'light_theme';
  }
  
  return(
  <div className={`App ${darkClass}`}>
    <Header/>
    <Overview />
    <Today />
    
  </div>
  )
}

export default App;
