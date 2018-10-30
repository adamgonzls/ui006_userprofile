const requestURL = 'http://localhost:3000/asteam.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  loadUser(data);
}

function loadUser(data) {
  const teamMemberImage = document.querySelector('.user-pic img');
  const teamMemberName = document.querySelector('.user-info .name');
  const teamMemberTitle = document.querySelector('.user-info .title');
  const teamMemberEmail = document.querySelector('.contact-info .email');
  const teamMemberPhone = document.querySelector('.contact-info .phone');
  console.log(data)
  // document.addEventListener('DOMContentLoaded', function() {
    // userImage
    teamMemberImage.src = data.team[0].image;
    teamMemberImage.alt = data.team[0].name;
    teamMemberName.innerHTML = data.team[0].name;
    teamMemberTitle.innerHTML = data.team[0].title;
    teamMemberEmail.innerHTML = data.team[0].email;
    teamMemberPhone.innerHTML = data.team[0].phone;

  // }, false);
}

