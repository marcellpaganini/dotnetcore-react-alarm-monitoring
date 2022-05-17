import React, { FC } from 'react'
import './Header.css';

export const Header: FC = (props) => {
  return (
    <div className="header">
        <h1>📡</h1>
        <section className="active">
            <span>Active Alarms</span><br />
            <span className="activeCount">321</span>
        </section>
    </div>
  )
}
