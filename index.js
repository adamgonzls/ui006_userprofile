const requestURL = './asteam.json';
const request = new XMLHttpRequest();
const backArrow = document.querySelector('.direction-arrow.back');
const forwardArrow = document.querySelector('.direction-arrow.forward');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  loadUser(data);
}

function loadUser(data) {
  const teamMemberImage   = document.querySelector('.user-pic img');
  const teamMemberName    = document.querySelector('.user-info .name');
  const teamMemberTitle   = document.querySelector('.user-info .title');
  const teamMemberEmail   = document.querySelector('.contact-info .email');
  const teamMemberPhone   = document.querySelector('.contact-info .phone');
  const teamMembers       = data.team;
  let displayMemberIndex  = 0;
  
  console.log(teamMembers);
  
  showTeamMember(displayMemberIndex);

  function showTeamMember(displayMemberIndex) {
    teamMemberImage.src       = data.team[displayMemberIndex].image;
    teamMemberImage.alt       = data.team[displayMemberIndex].name;
    teamMemberName.innerHTML  = data.team[displayMemberIndex].name;
    teamMemberTitle.innerHTML = data.team[displayMemberIndex].title;
    teamMemberEmail.innerHTML = data.team[displayMemberIndex].email;
    teamMemberPhone.innerHTML = data.team[displayMemberIndex].phone;
  }

  function advanceUser(e) {
    if(event.target.classList.contains('forward')) {
      displayMemberIndex++;
      if ((displayMemberIndex + 1) <= teamMembers.length) {
        showTeamMember(displayMemberIndex);
      } else {
        displayMemberIndex = 0;
        showTeamMember(displayMemberIndex);
      }
    } else {
      console.log("current pos: " + displayMemberIndex + " total members: " + teamMembers.length);
      displayMemberIndex--;
      if ((displayMemberIndex) >= 0) {
        showTeamMember(displayMemberIndex);
      } else {
        displayMemberIndex = (teamMembers.length - 1);
        showTeamMember(displayMemberIndex);
      }
    }
  }

  forwardArrow.addEventListener("click", advanceUser, false);
  backArrow.addEventListener("click", advanceUser, false);
}