const locale = 'ru-RU';

const formateDateTime = (timestamp) => {
  const date = new Date(timestamp);
  const timeString = date.toLocaleTimeString(locale);
  const dateString = date.toLocaleDateString(locale);

  return `${timeString} ${dateString}`;
};

export default formateDateTime;
