import React, { FC } from 'react'
import { IAlarm } from '../Types/IAlarm';
import './Header.css';

interface HeaderProps {
  alarms: IAlarm[]
}

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
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
          {new Date().toLocaleDateString("en-US")}
        </section>
    </div>
  )
}