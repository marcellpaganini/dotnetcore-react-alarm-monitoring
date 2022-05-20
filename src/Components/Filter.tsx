import React, { FC, useState, ChangeEvent } from 'react'
import { AlarmClass, Severity } from '../Types/Enums';
import { IAlarm } from '../Types/IAlarm';
import { ISearchOptions } from '../Types/ISearchOptions';
import './Filter.css';

interface IFilterProps {
    alarms: IAlarm[]
}

export const Filter: FC<IFilterProps> = (props: IFilterProps) => {
    const [filterCriteria, setFilterCriteria] = useState<ISearchOptions>({});

    const handleAlarmClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setFilterCriteria({...filterCriteria, alarmClass: AlarmClass[e.target.value as keyof typeof AlarmClass]}); //get enum
    };

    const handleSeverityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setFilterCriteria({...filterCriteria, severity: Severity[e.target.value as keyof typeof Severity]}); //get enum
    };

    const handleVendorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setFilterCriteria({...filterCriteria, vendor: e.target.value}); //get enum
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setFilterCriteria({...filterCriteria, date: e.target.value}); //get enum
    };

    const handleSearch = () => {
        console.log("search clicked");
    }

    console.log(filterCriteria);

    return (
        <div className="filterSection">
            <section className="column">
                <section className="filterTitle">
                    Filter
                </section>
                <section>
                    <span>Alarm Class: </span>
                    <select name="alarm-class" onChange={handleAlarmClassChange}>
                            <option value="">Select...</option>
                                {Object.keys(AlarmClass).filter(v => v.length > 1).map(key => (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        ))}
                    </select>
                </section>
                <section>
                    <span>Severity: </span>
                    <select name="alarm-class" onChange={handleSeverityChange}>
                        <option value="">Select...</option>
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
                    <select name="alarm-class" onChange={handleVendorChange}>
                        <option value="">Select...</option>
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
                    <input type="date" onInput={handleDateChange}></input>
                </section>
            </section>
            <section className="column">
                <button onClick={handleSearch}>🔍 Search</button>
            </section>
        </div>
    )
}
