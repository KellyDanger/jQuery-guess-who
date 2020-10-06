console.log('Here are all the available people:', people);
$(document).ready(onReady);

function onReady(){
  console.log('JQ');
  //EVENT LISTENERS
  $('#photoContainer').on('click', '.pic', clickOnPic)
  //FUNCTIONS
  appendPeople();
  promptPlayer();
}//end onReady

function appendPeople(){
  console.log('people');
  //loop through the people array 
  for(let person of people){
  //append a div for each person in the array
    $('#photoContainer').append(`
      <div>
        <img class="pic" data-picName="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of${person.name}">
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

//if the player clicks on the correct player
function clickOnPic(){
  let clickedPicName = $(this).data('picname');
  //give them a success message
  if (clickedPicName !== $('#dispName').text()){
    alert(`Sorry! That's not ${$('#dispName').text()} try again`)
  } else {
    alert(`Correct! That IS ${clickedPicName}'s pic!`)
    //add visual cue that they got it right with a delay
    promptPlayer();
  }//end if
}//end clickOnPic 
