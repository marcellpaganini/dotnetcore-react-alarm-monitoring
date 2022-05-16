import React, { FC } from 'react';
import { Alarms } from './Components/Alarms';
import './App.css';
import mockData from './Data/mockData.json';
import { v4 as uuidv4 } from 'uuid';
import { IAlarmInfo } from './Types/IAlarmInfo';


const App: FC = () => {
  const data: IAlarmInfo[] = JSON.parse(JSON.stringify(mockData));

  return (
    <div className="app">
      <h3>Telecom Remote Monitoring 📡</h3>
      { <Alarms 
        id= {uuidv4()} 
        name="ADM5566" 
        alarmInfo = {data[0]}
        firstReceiveDate = {new Date()}
        clearedDate = {new Date()}
        duration={2}  
      /> }
    </div>
  );
}

export default App;