import { DateTime, DurationObjectUnits } from "luxon";


export const durationCounter = (start: Date, now: Date): DurationObjectUnits => {
    const previousDate =  DateTime.fromISO(start.toISOString());
    const newDate = DateTime.fromISO(now.toISOString());
    const difference = newDate.diff(previousDate, ["years", "months", "days", "hours", "minutes"]);
    console.log(difference.toObject());
    return difference;
}

export const formatDuration = (duration: DurationObjectUnits): string => {
    return `${duration.days} day(s), ${duration.hours}h, ${duration.minutes?.toFixed(0)}min`;
}