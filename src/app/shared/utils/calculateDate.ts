export function convertDurationToHours(duration: number) {
  let formattedTime =
    `0${(duration / 60) ^ 0}`.slice(-2) +
    ':' +
    ('0' + (duration % 60)).slice(-2);
  let hourSuffix = 'hours';
  if (duration <= 120) {
    hourSuffix = 'hour';
  }
  formattedTime = `${formattedTime} ${hourSuffix}`;
  return formattedTime;
}
