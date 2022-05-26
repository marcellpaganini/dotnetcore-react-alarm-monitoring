import { FC } from 'react';
import { IAlarm } from '../Types/IAlarm';
import { Severity, AlarmClass } from '../Types/Enums';
import './Alarms.css';
import { ISearchOptions } from '../Types/ISearchOptions';

interface IAlarmsProps {
    alarms: IAlarm[],
    filterCriteria: ISearchOptions
}

export const Alarms: FC<IAlarmsProps> = (props) => {
    const handleSearchResults = (alarms: IAlarm[]): { id: any, name: any, severity: any, probableCause: any, vendor: any, alarmClass: any, firstReceiveDate: any, clearedDate: any, duration: any }[] => {
        var flatAlarms = alarms.map(({ id, name, alarmInfo: { severity, probableCause, vendor, alarmClass }, firstReceiveDate, clearedDate, duration }) =>
            ({ id, name, severity, probableCause, vendor, alarmClass, firstReceiveDate, clearedDate, duration }));

        const filteredAlarms = flatAlarms.filter((alarm) => {
            return (alarm.alarmClass.toString().indexOf(props.filterCriteria.alarmClass!.toString()) > -1 ||
                alarm.severity.toString().indexOf(props.filterCriteria.severity!.toString()) > -1 ||
                alarm.vendor.toLowerCase().indexOf(props.filterCriteria.vendor!.toLowerCase()) > -1 ||
                alarm.firstReceiveDate.toISOString().split('T')[0].indexOf(props.filterCriteria.date!.toString()) > -1);
        });

        if (props.filterCriteria.alarmClass === 10 && props.filterCriteria.severity === 10 &&
            props.filterCriteria.vendor === "xxx" && props.filterCriteria.date === "xxx") {
            return flatAlarms;
        } else {
            return filteredAlarms;
        }
    }

    return (
        <div className="alarms">
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Site
                        </th>
                        <th>
                            Severity
                        </th>
                        <th>
                            Probable Cause
                        </th>
                        <th>
                            First Receive Date
                        </th>
                        <th>
                            Cleared Date
                        </th>
                        <th>
                            Vendor
                        </th>
                        <th>
                            Class
                        </th>
                        <th>
                            Duration
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {handleSearchResults(props.alarms).map((alarm: any) => {
                        return <tr className={Severity[alarm.severity].toLowerCase()} key={alarm.id}>
                            <td>
                                {alarm.id}
                            </td>
                            <td>
                                {alarm.name}
                            </td>
                            <td>
                                {Severity[alarm.severity]}
                            </td>
                            <td>
                                {alarm.probableCause}
                            </td>
                            <td>
                                {alarm.firstReceiveDate.toUTCString()}
                            </td>
                            <td>
                                {alarm.clearedDate?.toUTCString() ?? ""}
                            </td>
                            <td>
                                {alarm.vendor}
                            </td>
                            <td>
                                {AlarmClass[alarm.alarmClass]}
                            </td>
                            <td>
                                {alarm.duration}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}
