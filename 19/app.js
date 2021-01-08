(() => {
  const modeButton = document.querySelector(".toggle");
  const modeButtonIcon = modeButton.querySelector("i");
  const html = document.querySelector("html");
  const hourNeedle = document.querySelector(".hour");
  const minuteNeedle = document.querySelector(".minute");
  const secondNeedle = document.querySelector(".second");
  const digitalTime = document.querySelector(".time");
  const dayAndMonth = document.querySelector(".date");

  function dayOfTheWeek(num) {
    switch (num) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "NONE";
    }
  }

  function months(num) {
    switch (num) {
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sept";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
      default:
        return "NONE";
    }
  }

  function catchTheseHandsBoi() {
    const currentDate = new Date();
    const secondsValue =
      currentDate.getSeconds() + currentDate.getMilliseconds() / 1000;
    const secondDegree = (secondsValue / 60) * 360;
    const minuteValue = currentDate.getMinutes();
    const minuteDegree = (minuteValue / 60) * 360 + secondDegree / 360;
    const hoursValue = currentDate.getHours();
    const hourDegree =
      hoursValue >= 12
        ? ((hoursValue - 12) / 12) * 360 + minuteDegree / 360
        : (hoursValue / 12) * 360 + minuteDegree / 360;

    return {
      hour: hourDegree,
      minute: minuteDegree,
      second: secondDegree,
      timestamp: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      day: dayOfTheWeek(currentDate.getDay()),
      month: months(currentDate.getMonth()),
      date: currentDate.getDate(),
    };
  }

  function updateDom() {
    const {
      hour,
      minute,
      second,
      timestamp,
      day,
      month,
      date,
    } = catchTheseHandsBoi();
    if (second >= 0 && second <= 1) {
      secondNeedle.style.transition = "none";
    } else {
      secondNeedle.style.transition = "transform 0.125s linear";
    }
    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hour}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${minute}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${second}deg)`;
    digitalTime.textContent = timestamp;
    dayAndMonth.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`;
  }

  window.addEventListener("DOMContentLoaded", () => {
    setInterval(updateDom, 250);
  });

  modeButton.addEventListener("click", () => {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
      modeButtonIcon.classList.remove("fa-moon");
      modeButtonIcon.classList.add("fa-sun");
    } else {
      modeButtonIcon.classList.remove("fa-sun");
      modeButtonIcon.classList.add("fa-moon");
    }
  });
})();
