import React, { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { AlarmClass, Severity } from '../Types/Enums';
import { IAlarm } from '../Types/IAlarm';
import { ISearchOptions } from '../Types/ISearchOptions';
import './Filter.css';

interface IFilterProps {
    alarms: IAlarm[],
    setAlarms: Dispatch<SetStateAction<IAlarm[]>>;
    filterCriteria: ISearchOptions,
    setFilterCriteria: Dispatch<SetStateAction<ISearchOptions>>
}

export const Filter: FC<IFilterProps> = (props: IFilterProps) => {
    const handleAlarmClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "10") {
            props.setFilterCriteria({ ...props.filterCriteria, alarmClass: 10 });
        } else {
            props.setFilterCriteria({ ...props.filterCriteria, alarmClass: AlarmClass[e.target.value as keyof typeof AlarmClass] });
        }
    };

    const handleSeverityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "10") {
            props.setFilterCriteria({ ...props.filterCriteria, severity: 10 });
        } else {
            props.setFilterCriteria({ ...props.filterCriteria, severity: Severity[e.target.value as keyof typeof Severity] });
        }
    };

    const handleVendorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "xxx") {
            props.setFilterCriteria({ ...props.filterCriteria, vendor: "xxx" });
        } else {
            props.setFilterCriteria({ ...props.filterCriteria, vendor: e.target.value });
        }
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setFilterCriteria({ ...props.filterCriteria, date: e.target.value === "" ? "xxx" : e.target.value });
    };

    return (
        <div className="filterSection">
            <section className="column">
                <section className="filterTitle">
                    Filter
                </section>
                <section>
                    <span>Alarm Class: </span>
                    <select name="alarm-class" onChange={handleAlarmClassChange}>
                        <option key="10" value="10">Select...</option>
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
                        <option value="10">Select...</option>
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
                        <option value="xxx">Select...</option>
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
        </div>
    )
}
