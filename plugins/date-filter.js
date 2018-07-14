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
  if (date.getFullYear() !== now.getFullYear()) {
    return `${now.getFullYear() - date.getFullYear()} years ago`;
  } else if (date.getMonth() !== now.getMonth()) {
    return `${now.getMonth() - date.getMonth()} months ago`;
  } else if (date.getDate() !== now.getDate()) {
    return `${now.getDate() - date.getDate()} days ago`;
  } else if (date.getHours() !== now.getHours()) {
    return `${now.getHours() - date.getHours()} hours ago`;
  } else if (date.getMinutes() !== now.getMinutes()) {
    return `${now.getMinutes() - date.getMinutes()} minutes ago`;
  } else if (date.getSeconds() !== now.getSeconds()) {
    return `${now.getSeconds() - date.getSeconds()} seconds ago`;
  }
  return 'some time ago';
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
