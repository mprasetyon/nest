import { parseISO, format } from "date-fns";

export function parseDate(s) {
  if (s === "" || s === "0000-00-00" || s === "0000-00-00 00:00:00") {
    return "";
  } else {
    return format(parseISO(s), "dd MMM yyyy");
  }
}
