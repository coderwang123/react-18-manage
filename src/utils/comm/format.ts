import dayjs from "dayjs";

export function formatTime(time: string | Date, format: string = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(time).format(format);
}
