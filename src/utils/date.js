export const relativeDate = (date) => {
  const second = 1000;
  const minute = 60 * second;
  const hour = minute * 60;
  const day = hour * 24;

  const currentDate = new Date();
  const targetDate = new Date(date);
  const elapsedTime = currentDate.valueOf() - targetDate.valueOf();

  const formats = [
    { value: day, singular: "a day ago", plural: "days ago" },
    { value: hour, singular: "an hour ago", plural: "hours ago" },
    { value: minute, singular: "a minute ago", plural: "minutes ago" },
    { value: second, singular: "a second ago", plural: "seconds ago" },
  ];

  for (const format of formats) {
    if (format.value < elapsedTime) {
      if (format.value * 2 > elapsedTime) {
        return format.singular;
      }
      return `${Math.floor(elapsedTime / format.value)} ${format.plural}`;
    }
  }
  return new Error("Invalid date");
};

export const formatDate = (date) => {
  const week = 604800000;
  const currentDate = new Date();
  const targetDate = new Date(date);
  const elapsedTime = currentDate.valueOf() - targetDate.valueOf();

  if (elapsedTime > week) {
    return targetDate.toDateString();
  }
  return relativeDate(date);
};
