import { IAlarmInfo } from "./IAlarmInfo";

export interface IAlarm {
    id: string;
    name: string;
    alarmInfo: IAlarmInfo;
    firstReceiveDate: Date;
    clearedDate: Date | null;
    duration: number;
} 