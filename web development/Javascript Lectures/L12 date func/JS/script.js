
/*
    new Date()
    new Date(date string)

    new Date(year,month)
    new Date(year,month,day)
    new Date(year,month,day,hours)
    new Date(year,month,day,hours,minutes)
    new Date(year,month,day,hours,minutes,seconds)
    new Date(year,month,day,hours,minutes,seconds,ms)

    new Date(milliseconds)

*/

const d = new Date();
const d1 = new Date("October 13, 2014 11:13:00");
const d2 = new Date("12-21-2004");
console.log(d2.toString());
console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.toISOString());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];
console.log(month);

// getDate methods

/*
    getFullYear() ---	Get year as a four digit number (yyyy)
    getMonth() ---	Get month as a number (0-11)
    getDate() --- Get day as a number (1-31)
    getDay() ---	Get weekday as a number (0-6)
    getHours() ---	Get hour (0-23)
    getMinutes() ---	Get minute (0-59)
    getSeconds() ---	Get second (0-59)
    getMilliseconds() ---	Get millisecond (0-999)
    getTime() ---	Get time (milliseconds since January 1, 1970)

*/

