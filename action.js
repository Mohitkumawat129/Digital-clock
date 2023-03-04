function digital() {
  const hour = document.querySelector(".hours");
  const minute = document.querySelector(".minutes");
  const second = document.querySelector(".seconds");
  const para = document.querySelector(".para1");

  let systemHour = new Date().getHours();
  let systemMinute = new Date().getMinutes();
  let systemSecond = new Date().getSeconds();

  if (systemHour > 12) {
    para.innerHTML = "pm";
  } else {
    para.innerHTML = "am";
  }
  if (systemHour === 00) {
    systemHour += 12;
  }
  if (systemHour > 12) {
    systemHour -= 12;
  }
  if (systemSecond < 10) {
    systemSecond = "0" + systemSecond;
  }

  if (systemMinute < 10) {
    systemMinute = "0" + systemMinute;
  }

  if (systemHour < 10) {
    systemHour = "0" + systemHour;
  }

  hour.innerHTML = systemHour;
  minute.innerHTML = systemMinute;
  second.innerHTML = systemSecond;
}
setInterval(digital, 1000);
