const requestURL = 'http://localhost:3000/asteam.json';
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
  const teamMemberImage = document.querySelector('.user-pic img');
  const teamMemberName  = document.querySelector('.user-info .name');
  const teamMemberTitle = document.querySelector('.user-info .title');
  const teamMemberEmail = document.querySelector('.contact-info .email');
  const teamMemberPhone = document.querySelector('.contact-info .phone');
  const teamMembers     = data.team;
  let displayMemberID   = 0;
  
  console.log(teamMembers);
  
  showTeamMember(displayMemberID);

  function showTeamMember(displayMemberID) {
    teamMemberImage.src       = data.team[displayMemberID].image;
    teamMemberImage.alt       = data.team[displayMemberID].name;
    teamMemberName.innerHTML  = data.team[displayMemberID].name;
    teamMemberTitle.innerHTML = data.team[displayMemberID].title;
    teamMemberEmail.innerHTML = data.team[displayMemberID].email;
    teamMemberPhone.innerHTML = data.team[displayMemberID].phone;
  }
  // console.log(displayedMemberID);

  // function getCurrentIndex(displayedMemberID) {
    console.log(teamMembers.map(x => x.id).indexOf(displayMemberID));
  // }

  function advanceUser() {
    // getCurrentIndex()
    console.log("forward");
    ++displayMemberID;
    if ((displayMemberID + 1) <= teamMembers.length) {
      console.log("current user: " + displayMemberID + " total members: " + teamMembers.length);
      
      console.log(displayMemberID);
      showTeamMember(displayMemberID);
    } else {
      console.log('back to start');
    }
  }

  forwardArrow.addEventListener("click", advanceUser, false);
}