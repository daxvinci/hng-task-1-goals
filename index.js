const htmlDay = document.getElementById('current-day')
const htmlTime = document.getElementById('current-time')

    let date = new Date()
    let days = date.getDay()
    let day;
    switch (days) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      htmlDay.innerHTML = '<b> current day: </b> ' + day

setInterval(()=>{
    htmlDay.innerHTML = '<b> current day: </b> ' + day
},86000000)
htmlDay.setAttribute('data-testId',day)



setInterval(()=>{
    let currentTime = new Date()
    let time = currentTime.getHours() + ' hours ' + currentTime.getMinutes() + ' minutes ' + currentTime.getSeconds() + ' seconds'
    htmlTime.innerHTML = '<b> current time: </b> ' + time
    htmlTime.setAttribute('data-testId',time)
},1000)


