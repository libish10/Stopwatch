var i = 1,
  second = 0,
  minute = 0,
  hour = 0;
var starting;
function timer() {
  if (i < 99) {
    i++;
    if (i <= 9) {
      document.getElementById("faster").innerHTML = "0" + i;
    } else {
      document.getElementById("faster").innerHTML = i;
    }
    if (i == 99) {
      i=1;
      second += 1;
      if (second <= 9) {
        document.getElementById("seconds").innerHTML = "0" + second;
      } else {
        document.getElementById("seconds").innerHTML = second;
      }
      if (second == 59) {
        second = 1;
        minute = minute + 1;
        if (minute <= 9) {
          document.getElementById("minutes").innerHTML = "0" + minute;
        } else {
          document.getElementById("minutes").innerHTML = minute;
        }

        if (minute == 59) {
          minute = 0;
          hour += 1;
          if (hour <= 9) {
            document.getElementById("hour").innerHTML = "0" + hour;
          } else {
            document.getElementById("hour").innerHTML = hour;
          }

          if (hour == 12) {
            hour = 0;
          }
        }
      }
    }
  } else {
    i = 0;
  }
}

function start() {
   //clearInterval(starting);
   starting = setInterval(timer, 10);
}

function pause() {
  clearInterval(starting);
}

function reset() {
  clearInterval(starting);
  document.getElementById("faster").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
}
