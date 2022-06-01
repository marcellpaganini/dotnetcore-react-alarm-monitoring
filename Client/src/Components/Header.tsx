import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { IAlarm } from '../Types/IAlarm';
import './Header.css';
import logoutImg from './logout.svg';

interface IHeaderProps {
  alarms: IAlarm[],
  name: string,
  showNav: boolean,
  setShowNav: Dispatch<SetStateAction<boolean>>
}

export const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const [redirect, setRedirect] = useState<boolean>(false);

  const logout = async () => {
    await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      credentials: 'include'
    });  
    
    setRedirect(true);
    props.setShowNav(true);
  }

  if(redirect) {
    return <Navigate to='/signin' />;
  }

  return (
    <div className="header">
        <h1>📡</h1>

        <section className="active">
            <span className="activeTitle">Active Alarms</span><br />
            <span className="activeCount">{props.alarms.length}</span>
        </section>

        <section className="severity">
          <section className="criticalCount">
            <span className="criticalNumber">{props.alarms.filter(a => a.alarmInfo.severity === 3).length}</span>
            <span className="criticalDescription">Critical</span>
          </section>
          <section className="majorCount">
            <span className="majorNumber">{props.alarms.filter(a => a.alarmInfo.severity === 2).length}</span>
            <span>Major</span>
          </section>
          <section className="minorCount">
            <span className="minorNumber">{props.alarms.filter(a => a.alarmInfo.severity === 1).length}</span>
            <span>Minor</span>
          </section>
          <section className="warningCount">
            <span className="warningNumber">{props.alarms.filter(a => a.alarmInfo.severity === 0).length}</span>
            <span>Warning</span>
          </section>
        </section>

        <section className="vendors">
          <section className="fiberZ">
            <span>FiberZ</span>
            <span className="vendorCount">{props.alarms.filter(a => a.alarmInfo.vendor === "FiberZ").length}</span>
          </section>
          <section className="signalY">
            <span>SignalY</span>
            <span className="vendorCount">{props.alarms.filter(a => a.alarmInfo.vendor === "SignalY").length}</span>
          </section>
          <section className="telcoX">
            <span>TelcoX</span>
            <span className="vendorCount">{props.alarms.filter(a => a.alarmInfo.vendor === "TelcoX").length}</span>
          </section>
        </section>

        <section className="date">
          {new Date().toLocaleDateString("en-US")} <br />
          <span className="name">Hello, {props.name}</span>
        </section>

        <section className="logout">
          <button className="btnLogout" onClick={logout}>
            <img className="logout" src={logoutImg} alt="logout"/>
          </button>
        </section>
    </div>
  )
}