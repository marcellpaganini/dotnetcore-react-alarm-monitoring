import React, { FC, useState, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { AlarmClass, Severity } from '../Types/Enums';
import { IAlarm } from '../Types/IAlarm';
import { ISearchOptions } from '../Types/ISearchOptions';
import './Filter.css';

interface IFilterProps {
    alarms: IAlarm[],
    setAlarms: Dispatch<SetStateAction<IAlarm[]>>;
}

var filterResult = [];

export const Filter: FC<IFilterProps> = (props: IFilterProps) => {
    const [filterCriteria, setFilterCriteria] = useState<ISearchOptions>({
                                                                           alarmClass: undefined,
                                                                           severity: undefined,
                                                                           vendor: "",
                                                                           date: ""
                                                                         });

    

    const handleAlarmClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterCriteria({...filterCriteria, alarmClass: AlarmClass[e.target.value as keyof typeof AlarmClass]});
    };

    const handleSeverityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterCriteria({...filterCriteria, severity: Severity[e.target.value as keyof typeof Severity]});
    };

    const handleVendorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterCriteria({...filterCriteria, vendor: e.target.value});
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterCriteria({...filterCriteria, date: e.target.value});
    };

    const handleSearch = () => {

        if (filterCriteria.alarmClass !== undefined) {
            props.setAlarms(props.alarms.filter(a => a.alarmInfo.alarmClass === filterCriteria.alarmClass))
        } else if (filterCriteria.severity !== undefined) {
            filterResult = props.alarms;

        }        
    }

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
