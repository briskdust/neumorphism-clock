const [second] = document.getElementsByClassName("second");
const [minute] = document.getElementsByClassName("minute");
const [hour] = document.getElementsByClassName("hour");

const clockExec = () => {
  const currentDate = new Date();
  const secRat =
    (currentDate.getSeconds() * 1000 + currentDate.getMilliseconds()) / 60000;
  const minRat = (currentDate.getMinutes() + secRat) / 60;
  const hrRat = (currentDate.getHours() + minRat) / 12;

  second.style.setProperty("--rotation", secRat * 360);
  minute.style.setProperty("--rotation", minRat * 360);
  hour.style.setProperty("--rotation", hrRat * 360);
};

setInterval(clockExec, 1);

clockExec();
