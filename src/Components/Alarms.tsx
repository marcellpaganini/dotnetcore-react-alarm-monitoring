import {FC} from 'react';

export interface IAlarms {
    id: number;
    name: string;
    severity: string;
    probableCause: string;
    firstReceiveDate?: Date;
    clearedDate?: Date;
    vendor: string;
    alarmClass: string;
    duration: number;
}

export const Alarms: FC<IAlarms> = ({id, 
                                     name, 
                                     severity, 
                                     probableCause, 
                                     firstReceiveDate, 
                                     clearedDate, 
                                     vendor, 
                                     alarmClass, 
                                     duration}) => {
    
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
                    {severity}
                </td>
                <td>
                    {probableCause}
                </td>
                <td>
                    01-01-0001
                </td>
                <td>
                    01-01-0001
                </td>
                <td>
                    {vendor}
                </td>
                <td>
                    {alarmClass}
                </td>
                <td>
                    {duration}
                </td>
            </tr>
        </tbody>
    </table>
  );
}
