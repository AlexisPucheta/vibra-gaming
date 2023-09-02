function extractDateAndTime(dateTime: string) {
  const [datePart, timePart] = dateTime.split("T");
  const [year, month, day] = datePart.split("-");
  const [time, _] = timePart.split("+");
  const [hour, minute] = time.split(":");
  const ampm = parseInt(hour) >= 12 ? "PM" : "AM";
  const formattedHour = (parseInt(hour) % 12 || 12).toString().padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${formattedHour}:${minute} ${ampm}`;

  return { date: formattedDate, time: formattedTime };
}

export default extractDateAndTime;
