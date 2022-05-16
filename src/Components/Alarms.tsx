import { FC } from 'react';
import { IAlarm } from '../Types/IAlarm';


export const Alarms: FC<IAlarm> = ({ 
    id,
    name,
    alarmInfo,
    firstReceiveDate,
    clearedDate,
    duration }) => {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Alarm Name
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
                <tr>
                    <td>
                        {id}
                    </td>
                    <td>
                        {name}
                    </td>
                    <td>
                        {alarmInfo.severity}
                    </td>
                    <td>
                        {alarmInfo.probableCause}
                    </td>
                    <td>
                        {firstReceiveDate.toUTCString()}
                    </td>
                    <td>
                        {clearedDate.toUTCString()}
                    </td>
                    <td>
                        {alarmInfo.vendor}
                    </td>
                    <td>
                        {alarmInfo.alarmClass}
                    </td>
                    <td>
                        {duration}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
