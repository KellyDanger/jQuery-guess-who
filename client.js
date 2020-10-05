console.log('Here are all the available people:', people);
$(document).ready(onReady);

function onReady(){
  console.log('JQ');
  appendPeople();
  promptPlayer();
}//end onReady

function appendPeople(){
  console.log('people');
  //loop through the people array 
  for(let person of people){
  //append a div for each person in the array
    $('body').append(`
      <div data-userName="${person.githubUsername}">
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of${person.name}">
      </div>
    `)//div should contain an image from each gitHub profile
  }  
}//end appendPeople

function promptPlayer(){
  console.log('Play!');
  //randomly select a name from the people array
  let randomName = people[Math.floor(Math.random()*people.length)].name;
  console.log(randomName);
  //display a randomly selected name on the DOM
  $('#dispName').text(`${randomName}`)
}//end promptPlayer