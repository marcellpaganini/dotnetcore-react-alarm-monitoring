import React, { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { AlarmClass, Severity } from '../Types/Enums';
import { IAlarm } from '../Types/IAlarm';
import { ISearchOptions } from '../Types/ISearchOptions';
import './Filter.css';

interface IFilterProps {
    alarms: IAlarm[],
    setAlarms: Dispatch<SetStateAction<IAlarm[]>>;
    filterCriteria: ISearchOptions,
    setFilterCriteria: Dispatch<SetStateAction<ISearchOptions>>,
    searchIsSet: boolean,
    setSearchIsSet: Dispatch<SetStateAction<boolean>>
}

export const Filter: FC<IFilterProps> = (props: IFilterProps) => {
    const handleAlarmClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setFilterCriteria({...props.filterCriteria, alarmClass: AlarmClass[e.target.value as keyof typeof AlarmClass]});
        handleSearch();
    };

    const handleSeverityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setFilterCriteria({...props.filterCriteria, severity: Severity[e.target.value as keyof typeof Severity]});
        handleSearch();
    };

    const handleVendorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setFilterCriteria({...props.filterCriteria, vendor: e.target.value});
        handleSearch();
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setFilterCriteria({...props.filterCriteria, date: e.target.value});
        handleSearch();
    };

    const handleSearch = () => {
        let newSearchIsSet = props.searchIsSet;

        if (props.filterCriteria.alarmClass !== undefined ||
            props.filterCriteria.severity !== undefined ||
            props.filterCriteria.vendor !== "" ||
            props.filterCriteria.date !== "") {
                newSearchIsSet = true;
                props.setSearchIsSet(newSearchIsSet);
        } else {
            newSearchIsSet = false;
            props.setSearchIsSet(newSearchIsSet);
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
        </div>
    )
}
