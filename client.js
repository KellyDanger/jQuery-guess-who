console.log('Here are all the available people:', people);
$(document).ready(onReady);

function onReady(){
  console.log('JQ');
  appendPeople();
}//end onReady

function appendPeople(){
  console.log('people');
  //loop through the people array 
  for(let person of people){
  //append a div for each person in the array
    $('body').append(`
      <div>
        This is a new div
      </div>
    `)
  }

  //div should contain an image from each gitHub profile
  
}//end appendPeople