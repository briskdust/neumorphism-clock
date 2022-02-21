const [second] = document.getElementsByClassName("second");
const [minute] = document.getElementsByClassName("minute");
const [hour] = document.getElementsByClassName("hour");

const clockExec = () => {
  const currentDate = new Date();
  const secRat = currentDate.getSeconds() / 60;

  second.style.setProperty("--rotation", secRat * 360);
};

setInterval(clockExec, 1000);

clockExec();
