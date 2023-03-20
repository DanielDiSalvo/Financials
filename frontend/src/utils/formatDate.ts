export const formatDateTime = (date: number | Date | undefined) => {
  let dateFormated = "";
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  } as Intl.DateTimeFormatOptions;

  if (date) {
    if (typeof date === "string") {
      dateFormated = new Intl.DateTimeFormat("en-US", options).format(
        new Date(date)
      );
    }
  } else {
    dateFormated = new Intl.DateTimeFormat("en-US", options).format(date);
  }
  return dateFormated;
};
