import React, { FC } from 'react'
import { AlarmClass, Severity } from '../Types/Enums';
import './Filter.css';

export const Filter: FC = () => {
    return (
        <div className="filterSection">
            <section className="column">
                <section className="filterTitle">
                    Filter
                </section>
                <section>
                    <span>Alarm Class: </span>
                    <select name="alarm-class">
                        <option value="" onChange={() => {}}>Select...</option>
                        {Object.keys(AlarmClass).filter(v => v.length > 1).map(key => (
                            <option key={key} value={key} aria-selected="true">
                                {key}
                            </option>
                        ))}
                    </select>
                </section>
                <section>
                    <span>Severity: </span>
                    <select name="alarm-class">
                        <option value="" onChange={() => {}}>Select...</option>
                        {Object.keys(Severity).filter(v => v.length > 1).map(key => (
                            <option key={key} value={key} aria-selected="true">
                                {key}
                            </option>
                        ))}
                    </select>
                </section>
            </section>
            <section className="column">
                <section className="filterTitle">
                    &nbsp;
                </section>
                <section>
                    <span>Vendor: </span>
                    <select name="alarm-class">
                        <option value="" onChange={() => {}}>Select...</option>
                        
                            <option value="FiberZ" aria-selected="true">
                                FiberZ
                            </option>
                            <option value="SignalY" aria-selected="true">
                                SignalY
                            </option>
                            <option value="TelcoX" aria-selected="true">
                                TelcoX
                            </option>
                    </select>
                </section>
                <section>
                    <span>Date: </span>
                    <input type="date"></input>
                </section>
            </section>
            <section className="column">
                <button>🔍 Search</button>
            </section>
        </div>
    )
}
