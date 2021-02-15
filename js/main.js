// get current time and show it on the navigation bar
function getnow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  var date = now.getDate();
  if (date < 10) {
    date = '0' + date;
  }
  var hour = now.getHours();
  if (hour < 10) {
    hour = '0' + hour;
  }
  var minute = now.getMinutes();
  if (minute < 10) {
    minute = '0' + minute;
  }
  var second = now.getSeconds();
  if (second < 10) {
    second = '0' + second;
  }
  var nowstr =
    month + '/' + date + '/' + year + ' ' + hour + ':' + minute + ':' + second;
  var nowspan = document.getElementById('time');
  nowspan.innerHTML = nowstr;

  setTimeout('getnow()', 1000);
}
