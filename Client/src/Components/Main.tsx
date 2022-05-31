import React, { useEffect, useState } from 'react'
import { Alarms } from './Alarms';
import { Header } from './Header';
import { Filter } from './Filter';
import mockData from '../Data/mockData.json';
import { v4 as uuidv4 } from 'uuid';
import { IAlarmInfo } from '../Types/IAlarmInfo';
import { IAlarm } from '../Types/IAlarm';
import { ISearchOptions } from '../Types/ISearchOptions';


type Props = {}

export const Main = (props: Props) => {
    const [alarms, setAlarms] = useState<IAlarm[]>([] as IAlarm[]);
    const [filterCriteria, setFilterCriteria] = useState<ISearchOptions>({
        alarmClass: 10,
        severity: 10,
        vendor: "xxx",
        date: "xxx"
    });
    const alarmInfoList: IAlarmInfo[] = JSON.parse(JSON.stringify(mockData));

    const alarmGenerator = () => {
        setInterval(() => {
            let alea = (Math.floor(Math.random() * 10) + 1);

            if (alea <= 3) {
            setAlarms(previousList => { 
                return [...previousList,
                {id: uuidv4(),
                name: "ADM" + Math.floor((Math.random() * 5000) + 1000).toString(),
                alarmInfo: alarmInfoList[Math.floor((Math.random() * alarmInfoList.length) + 0)],
                firstReceiveDate: new Date(),
                clearedDate: null,
                duration: 0}]})
            } 
            if (alea > 8) {
            setAlarms(previousList => {
                return [...previousList.filter(i => i !== previousList[Math.floor((Math.random() * previousList.length) + 0)])]
            })
            }
        }, 20000) 
    }

    useEffect(() => {
        alarmGenerator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className="main">
        <Header alarms={alarms} ></Header>
        <Filter alarms={alarms} setAlarms={setAlarms} filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria}></Filter>
        <Alarms alarms={alarms} filterCriteria={filterCriteria} />
    </div>
  )
}