import React, { FC, useState } from 'react';
import { Alarms } from './Components/Alarms';
import './App.css';
import mockData from './Data/mockData.json';
import { v4 as uuidv4 } from 'uuid';
import { IAlarmInfo } from './Types/IAlarmInfo';
import { IAlarm } from './Types/IAlarm';
import { Severity, AlarmClass } from './Types/Enums';


const App: FC = () => {
  const [alarm, setAlarm] = useState<IAlarm[]>([]);
  const alarmList: IAlarmInfo[] = JSON.parse(JSON.stringify(mockData));

  const alarmGenerator = (alarm: IAlarmInfo) => {
    
  }

  return (
    <div className="app">
      <h3>Telecom Remote Monitoring 📡</h3>
      { <Alarms 
        id= {uuidv4()} 
        name="ADM5566" 
        alarmInfo = {alarmList[0]}
        firstReceiveDate = {new Date()}
        clearedDate = {new Date()}
        duration={2}  
      /> }
    </div>
  );
}

export default App;