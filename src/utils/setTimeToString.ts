export const setTimeToString = (
  time: number,
  min = 0,
  minPref = 0,
  sec = 0,
  secPref = 0,
  minRes = '',
  secRes = '',
): string => {
  sec = time;
  min = Math.floor(time / 60);
  sec = sec >= 60 ? time - (min * 60) : time;
  minRes = min < 10 ? `${minPref}${min}` : `${min}`;
  secRes = sec < 10 ? `${secPref}${sec}` : `${sec}`;
  return `${minRes}:${secRes}`;
};
