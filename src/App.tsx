import React, { FC, useEffect, useState } from 'react';
import { Alarms } from './Components/Alarms';
import { Header } from './Components/Header';
import { Filter } from './Components/Filter';
import './App.css';
import mockData from './Data/mockData.json';
import { v4 as uuidv4 } from 'uuid';
import { IAlarmInfo } from './Types/IAlarmInfo';
import { IAlarm } from './Types/IAlarm';


const App: FC = () => {
  const [alarms, setAlarms] = useState<IAlarm[]>([] as IAlarm[]);
  const alarmInfoList: IAlarmInfo[] = JSON.parse(JSON.stringify(mockData));

  const alarmGenerator = () => {
    setInterval(() => {
        let alea = (Math.random() * 10) + 1;

        if (alea <= 2) {
          setAlarms(previousList => { 
            return [...previousList,
            {id: uuidv4(),
            name: "ADM" + Math.floor((Math.random() * 5000) + 1000).toString(),
            alarmInfo: alarmInfoList[Math.floor((Math.random() * alarmInfoList.length) + 0)],
            firstReceiveDate: new Date(),
            clearedDate: null,
            duration: 0}]})
        }
      }, 10000) 
  }

  useEffect(() => {
    alarmGenerator();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app">
      <Header alarms={alarms} ></Header>
      <Filter></Filter>
      <Alarms alarms={alarms} />
    </div>
  );
}

export default App;