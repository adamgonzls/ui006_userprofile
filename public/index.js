document.addEventListener('DOMContentLoaded', function() {
  console.log("Ready!");

}, false);

const requestURL = 'http://localhost:3000/asteam.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var team = request.response;
  console.log(team);
}