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
  const teamMemberName = document.querySelector('.user-info .name');
  const teamMemberTitle = document.querySelector('.user-info .title');
  const teamMemberEmail = document.querySelector('.contact-info .email');
  const teamMemberPhone = document.querySelector('.contact-info .phone');
  const teamMembers = data.team;
  // const currentMember = 
  console.log(teamMembers);
  
  let displayedMember       = data.team[0];
  console.log(displayedMember);
  teamMemberImage.src       = data.team[0].image;
  teamMemberImage.alt       = data.team[0].name;
  teamMemberName.innerHTML  = data.team[0].name;
  teamMemberTitle.innerHTML = data.team[0].title;
  teamMemberEmail.innerHTML = data.team[0].email;
  teamMemberPhone.innerHTML = data.team[0].phone;

  function getCurrentIndex() {

  }

  function advanceUser() {
    // userID = 
    if (teamMembers.indexOf(displayedMember) + 1 < teamMembers.length) {
      console.log(teamMembers.indexOf(displayedMember) + 1);
      // displayedMember++;
      // console.log(displayedMember);
    } else {
      console.log('back to start');
    }

    console.log("forward");
    // console.log(data);
  }

  forwardArrow.addEventListener("click", advanceUser, false);
}