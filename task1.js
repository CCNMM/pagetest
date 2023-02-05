function countdown(min, elem) {
  let minutes = min;
  let seconds = 0;
  let timer = elem;
  let start = false;

  function updateElem() {
    if (seconds < 10) {
      timer.innerText = minutes + ":0" + seconds;
    } else {
      timer.innerText = minutes + ":" + seconds;
    }
  }

  function counter() {
    // Stop interval if minutes and second = 0
    if (minutes <= 0 && seconds <= 0) {
      updateElem();
      clearInterval(interval);
    } else {
      //   Initial timer start
      if (start === false) {
        updateElem();
        start = true;
      } else {
        if (seconds === 0) {
          // if seconds reach 0 re-set to 60 and minus 1 from minutes
          seconds = 60;
          seconds--;
          minutes--;
          updateElem();
        } else {
          // minus 1 per second
          seconds--;
          updateElem();
        }
      }
    }
  }

  const interval = setInterval(counter, 1000); // Interval every second
}

window.onload = function () {
  const minutes = 2;
  const timer = document.querySelector(".countdown .timer");
  countdown(minutes, timer); // Function run
};
