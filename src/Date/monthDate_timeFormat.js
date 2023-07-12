const months = ['January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Auguest',
    'September',
    'Octuber',
    'November',
    'December'
]

const now = new Date();
const month = months[now.getMonth()];
const date = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();


const DateAndTime = `${month} ${date}, ${hour}:${minute}`;

export default DateAndTime;