const formatZero = (num) => (num > 9 ? num : `0${num}`);

const formatTime = (timestamp) => {
  const hours = Math.floor(timestamp / 3_600_000);
  const minutes = Math.floor(timestamp / 60_000) - hours * 60;
  const seconds = Math.floor(timestamp / 1000) - hours * 3600 - minutes * 60;

  return `${formatZero(hours)}:${formatZero(minutes)}:${formatZero(seconds)}`;
};

export default formatTime;
