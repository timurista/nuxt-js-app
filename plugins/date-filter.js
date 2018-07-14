import Vue from 'vue'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = value => {
  return formatDate(value);
};

const agoFilter = (inputDate) => {
  const now = new Date();
  const date = new Date(inputDate);

  const years = now.getFullYear() - date.getFullYear();
  const months = now.getMonth() - date.getMonth();
  const days = now.getDate() - date.getDate();
  const hours = now.getHours() - date.getHours();
  const minutes = now.getMinutes() - date.getMinutes();
  const seconds = now.getSeconds() - date.getSeconds();

  if (years > 3) {
    return formatDate(inputDate);
  }
  else if (years) {
    return `${years} year${ years > 1 ? 's' : ''} ago`;
  } else if (months) {
    return `${months} month${ months > 1 ? 's' : ''} ago`;
  } else if (days) {
    return `${days} day${ days > 1 ? 's' : ''} ago`;
  } else if (hours) {
    return `${hours} hour${ hours > 1 ? 's' : ''} ago`;
  } else if (minutes) {
    return `${minutes} minute${ minutes > 1 ? 's' : ''} ago`;
  } else if (seconds) {
    return `${seconds} second${ seconds > 1 ? 's' : ''} ago`;
  }
  return formatDate(inputDate);
}

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = months[month] + " " + day + " " + year;
  return formattedDate;
}

Vue.filter('date', dateFilter)
Vue.filter('ago', agoFilter)
