const requestURL      = './asteam.json';
const request         = new XMLHttpRequest();
const backArrow       = document.querySelector('.direction-arrow.back');
const forwardArrow    = document.querySelector('.direction-arrow.forward');
const teamMemberLink  = document.querySelector('.team-member-navigation');

request.open('GET', requestURL);
request.responseType  = 'json';
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
  const teamMemberNav     = document.querySelector('.team-member-navigation');
  const teamMembers       = data.team;
  let displayMemberIndex  = 0;
  
  showTeamMemberNav(teamMembers);
  showTeamMember(displayMemberIndex);

  function showTeamMemberNav(teamMembers) {
    for (i = 0; i < teamMembers.length; i++) {
      const navElement  = document.createElement("a");
      const navText     = document.createTextNode(i);
      navElement.appendChild(navText);
      navElement.href   = "#";
      teamMemberNav.appendChild(navElement);
    }
  }

  function showTeamMember(displayMemberIndex) {
    teamMemberImage.src       = teamMembers[displayMemberIndex].image;
    teamMemberImage.alt       = teamMembers[displayMemberIndex].name;
    teamMemberName.innerHTML  = teamMembers[displayMemberIndex].name;
    teamMemberTitle.innerHTML = teamMembers[displayMemberIndex].title;
    teamMemberEmail.innerHTML = teamMembers[displayMemberIndex].email;
    teamMemberPhone.innerHTML = teamMembers[displayMemberIndex].phone;
    updateNav(displayMemberIndex)
  }

  function updateNav(displayMemberIndex) {
    const els = document.querySelectorAll('.team-member-navigation a');
    for (i = 0; i < els.length; i++) {
      els[i].classList.remove("platinum");
    }
    teamMemberNav.childNodes[displayMemberIndex].className = "platinum";
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