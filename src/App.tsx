import React, { FC } from 'react';
//import { Alarms } from './Components/Alarms';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <h3>Telecom Remote Monitoring 📡</h3>
      {/* <Alarms 
        id={12345} 
        name="ADM5566" 
        severity='Major' 
        probableCause='Loss of Signal' 
        vendor='Company1'
        alarmClass="Radio Frequency"
        duration={2}  
      /> */}
    </div>
  );
}

export default App;
