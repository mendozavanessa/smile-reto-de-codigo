window.onload = colores;
function colores() {
  document.body.style.backgroundColor = 'rgb(' +
  Math.floor(Math.random() * 256) + ',' +
  Math.floor(Math.random() * 256) + ',' +
  Math.floor(Math.random() * 256) + ')';
  setTimeout('colores()', 800);
}
$(document).ready(function() {
  var $users = [ ];
  localStorage.setItem('users', JSON.stringify($users));

  setTimeout(function() {
    window.location.href = 'views/principalView.html';
  }, 6000);
  var $logoApp = $('#logoApp');
  var $pulse = (60 / 140) * 1000;
  var $pulseReverse = 858.57142857142856;
  function pulseInterval() {
    $logoApp.removeClass('antiPulse');
    $logoApp.addClass('pulse');
  }
  function antiPulseInterval() {
    $logoApp.removeClass('pulse');
    $logoApp.addClass('antiPulse');
  }
  function move() {
    setInterval(pulseInterval, $pulse);
    setInterval(antiPulseInterval, $pulseReverse);
  }
  $logoApp.ready(move);
});
