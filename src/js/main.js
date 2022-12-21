window.addEventListener("load", function () {
  var minutes = 00;
  var seconds = 00;
  var tenths = 00;
  var appendTenths = document.getElementById("tenths");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tenths = "00";
    seconds = "00";
    minutes = "00";
    appendTenths.innerHTML = tenths;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };
  function startTimer() {
    tenths++;

    if (tenths <= 9) {
      appendTenths.innerHTML = "0" + tenths;
    }
    if (tenths > 9) {
      appendTenths.innerHTML = tenths;
    }
    if (tenths > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tenths = 0;
      appendTenths.innerHTML = "0" + 0;
    }
    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9) {
      appendMinutes.innerHtml = minutes;
    }
  }
});
