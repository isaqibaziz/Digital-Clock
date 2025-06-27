function digitalClock() {
  let now = new Date();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeFormat = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
  document.querySelector('.format').textContent = timeFormat;

  // Day highlight
  document.querySelectorAll('.weekdays span').forEach(span => {
    span.classList.remove('active');
  });
  document.querySelector(`.weekdays span:nth-child(${day + 1})`).classList.add('active');
}

setInterval(digitalClock, 1000);
digitalClock();