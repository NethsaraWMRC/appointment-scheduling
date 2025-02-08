import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

// Sample time data with mixed AM and PM times
export const timeData = [
  { startTime: "7.15AM", endTime: "8.30AM" },
  { startTime: "9.00AM", endTime: "10.45AM" },
  { startTime: "11.20AM", endTime: "12.15PM" },
  { startTime: "1.00PM", endTime: "2.45PM" },
  { startTime: "3.30PM", endTime: "5.00PM" },
  { startTime: "6.10PM", endTime: "7.25PM" },
  { startTime: "8.40PM", endTime: "10.00PM" },
];

// Function to convert "h.mmA" format to SQL-compatible "HH:mm:ss"
export const convertToSQLTime = (timeString) => {
  return dayjs(timeString, "h.mmA").format("HH:mm");
};

// Convert all times
export const convertedTimeData = timeData.map(({ startTime, endTime }) => ({
  startTime: convertToSQLTime(startTime),
  endTime: convertToSQLTime(endTime),
}));
