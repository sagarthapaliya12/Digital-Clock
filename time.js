function updateTime() {
var dateInfo = new Date();

    // time
    var hr,
     min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),

     sec = (dateInfo.getSeconds() < 10)? "0" + dateInfo.getSeconds() : dateInfo.getSeconds (),

    amPm = (dateInfo.getHours() ? "PM" : "AM") ;
   
    // replace 0 with 12 at midnight, subject 12 form hour if 13-23

    if (dateInfo.getHours() == 0) {
       hr = 12;
     } else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
     } else {
        hr = dateInfo.getHours();
  }

    //  current time

    var currentTime = hr + ":" + min + ":" + sec;

    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;

    document.getElementsByClassName("amPm")[0].innerHTML = amPm;

    // date
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",    
    ],

    month = [
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
    ],

    // store date
   
    day = dateInfo.getDate();

    var currentDate = days[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

    document.getElementsByClassName("date")[0].innerHTML = currentDate;


 
}; 

// print time and date once, then update them every second

updateTime();
setInterval(function() {
    updateTime()
},1000);





    


