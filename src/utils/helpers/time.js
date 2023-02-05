import moment from "moment";

export const formatDateAndTime = (date) => {
  return new moment(date).format("Do MMM YYYY");
};
