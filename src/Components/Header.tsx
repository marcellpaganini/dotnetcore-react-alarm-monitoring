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
            <span>Active Alarms</span><br />
            <span className="activeCount">{props.alarms.length}</span>
        </section>
    </div>
  )
}