import React, { FC, useEffect, useState } from 'react';
import { Alarms } from './Components/Alarms';
import './App.css';
import mockData from './Data/mockData.json';
import { v4 as uuidv4 } from 'uuid';
import { IAlarmInfo } from './Types/IAlarmInfo';
import { IAlarm } from './Types/IAlarm';


const App: FC = () => {
  const [alarms, setAlarms] = useState<IAlarm[]>([] as IAlarm[]);
  const alarmInfoList: IAlarmInfo[] = JSON.parse(JSON.stringify(mockData));

  const alarmGenerator = () => {
    const newAlarmList = [...alarms,
                    {id: uuidv4(),
                     name: "ADM" + Math.floor((Math.random() * 5000) + 1000).toString(),
                     alarmInfo: alarmInfoList[Math.floor((Math.random() * alarmInfoList.length) + 0)],
                     firstReceiveDate: new Date(),
                     clearedDate: null,
                     duration: 0}];

    setAlarms(newAlarmList);
  }

  useEffect(() => {
    alarmGenerator();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app">
      <h3>Telecom Remote Monitoring 📡</h3>
      { <Alarms alarms={alarms} /> }
    </div>
  );
}

export default App;