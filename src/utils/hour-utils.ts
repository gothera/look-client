import { Interval } from '../types';

const addMinutes = (hour: string, time: number) => {
  let hours = parseInt(hour.split(':')[0]);
  let minutes = parseInt(hour.split(':')[1]);
  hours += Math.floor(time / 60);
  minutes += time % 60;
  hours += Math.floor(minutes / 60);
  minutes = minutes % 60;
  return `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }`;
};

const substractMinutes = (hour: string, time: number) => {
  let hours = parseInt(hour.split(':')[0]);
  let minutes = parseInt(hour.split(':')[1]);
  hours -= Math.floor(time / 60);
  minutes -= time % 60;

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }
  return `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }`;
};

export const intervalParser = (
  intervals: Interval[],
  serviceDuration: number,
): string[] => {
  const spots: string[] = [];
  intervals.forEach(({ startTime, endTime }: Interval) => {
    let current = addMinutes(startTime, 0);
    while (current <= substractMinutes(endTime, serviceDuration)) {
      spots.push(current);
      current = addMinutes(current, 30);
    }
  });
  return spots;
};
