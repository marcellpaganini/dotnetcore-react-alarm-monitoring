import { FC } from 'react';
import { IAlarm } from '../Types/IAlarm';
import { Severity, AlarmClass } from '../Types/Enums';
import './Alarms.css';


export const Alarms: FC<{alarms: IAlarm[]}> = (props) => {
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
                    {props.alarms.map((alarm: IAlarm) => {
                        return <tr className={Severity[alarm.alarmInfo.severity].toLowerCase()} key={alarm.id}>
                                    <td>
                                        {alarm.id}
                                    </td>
                                    <td>
                                        {alarm.name}
                                    </td>
                                    <td>
                                        {Severity[alarm.alarmInfo.severity]}
                                    </td>
                                    <td>
                                        {alarm.alarmInfo.probableCause}
                                    </td>
                                    <td>
                                        {alarm.firstReceiveDate.toUTCString()}
                                    </td>
                                    <td>
                                        {alarm.clearedDate?.toUTCString() ?? ""}
                                    </td>
                                    <td>
                                        {alarm.alarmInfo.vendor}
                                    </td>
                                    <td>
                                        {AlarmClass[alarm.alarmInfo.alarmClass]}
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
