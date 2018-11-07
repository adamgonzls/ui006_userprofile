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
  // console.log(teamMemberNav)
  const teamMembers       = data.team;
  let displayMemberIndex  = 0;
  
  console.log(teamMembers);
  
  showTeamMember(displayMemberIndex, teamMemberNav);
  showTeamMemberNav(teamMembers);

  function showTeamMemberNav(teamMembers) {
    for (i = 0; i < teamMembers.length; i++) {
      const navElement  = document.createElement("a");
      const navText     = document.createTextNode(i);
      navElement.appendChild(navText);
      navElement.href   = "#";
      teamMemberNav.appendChild(navElement);
    }
  }

  function showTeamMember(displayMemberIndex, teamMemberNav) {
    teamMemberImage.src       = data.team[displayMemberIndex].image;
    teamMemberImage.alt       = data.team[displayMemberIndex].name;
    teamMemberName.innerHTML  = data.team[displayMemberIndex].name;
    teamMemberTitle.innerHTML = data.team[displayMemberIndex].title;
    teamMemberEmail.innerHTML = data.team[displayMemberIndex].email;
    teamMemberPhone.innerHTML = data.team[displayMemberIndex].phone;
    console.log(teamMemberNav.children[1]);
    // teamMemberNav.children[1].text;
    // console.log(children);
    // let child = teamMemberNav.querySelectorAll("a");
    // console.log(child);
    // children[0].style.backgroundColor = "red";
    // console.log(child)
    // updateNav(displayMemberIndex);
  }

  // function updateNav(displayMemberIndex) {
  //   console.log(Array.from(teamMemberNav.children));
  // }

  // function dotNav(e) {
  //   console.log(e);
  //   const target = event.target.innerHTML;
  //   console.log(target);
  //   showTeamMember(target);
  // }

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
      // console.log("current pos: " + displayMemberIndex + " total members: " + teamMembers.length);
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
  // teamMemberLink.addEventListener("click", dotNav, false);
}