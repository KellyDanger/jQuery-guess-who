console.log('Here are all the available people:', people);
$(document).ready(onReady);

function onReady(){
  console.log('JQ');
  //EVENT LISTENERS
  $('#photoContainer').on('click', '.pic', clickOnPic)
  //FUNCTIONS
  //appendPeople();//using shuffle instead
  shuffle(people);
  promptPlayer();
}//end onReady

function appendPeople(){
  console.log('people');
  //loop through the people array 
  for(let person of people){
  //append a div for each person in the array
    $('#photoContainer').append(`
      <div class="photoContainer">
        <img class="pic" data-picName="${person.name}"  src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of${person.name}">
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
  //give them a failure message and let them try again
  if (clickedPicName !== $('#dispName').text()){
    alert(`Sorry! That's not ${$('#dispName').text()} try again`)
  } 
  else {
    //alert(`Correct! That IS ${clickedPicName}'s pic!`);
    //add visual cue that they got it right with a delay
    $(this).parent().addClass('greenPic')
    setTimeout(function(){
      $('div').removeClass('greenPic')
      promptPlayer();
    }, 2000);   
  }//end if
}//end clickOnPic 


function shuffle(array){
  for(let i = array.length - 1; i >= 0; i--){
    let randomIndex = Math.floor(Math.random() * (i +1));
    let itemAtIndex = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = itemAtIndex;
  }
  for(let person of array){
    //append a div for each person in the array
      $('#photoContainer').append(`
        <div class="photoContainer">
          <img class="pic" data-picName="${person.name}"  src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of${person.name}">
        </div>
      `)//div should contain an image from each gitHub profile
    }  
}