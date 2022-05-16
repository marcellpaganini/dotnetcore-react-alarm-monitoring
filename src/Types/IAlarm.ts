import uuid from 'uuid';
import { IAlarmInfo } from "./IAlarmInfo";

export interface IAlarm {
    id: uuid.V4Options;
    name: string;
    alarmInfo: IAlarmInfo;
    firstReceiveDate: Date;
    clearedDate: Date;
    duration: number;
} 