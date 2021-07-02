
/*-------random content-------*/
//random integer value will ge generated from 0 to array length
function randomGenerator(array){
  //floor to get value in integer
  const ranValue = Math.floor(Math.random()*array.length);
  return array[ranValue];// returns array with index 
}

//array that will be used 
let storyDetail = 'It was 94 fahrenheit outside, so :newname: went for a walk. When they got to :newplace:, they stared in horror for a few moments, then :newverb:. Bob saw the whole thing, but was not surprised — :newname: weighs 300 pounds, and it was a hot day.';
let randNames = ['Willy the Goblin','Big Daddy','Father Christmas'];
let randPlaces = ['the soup kitchen','Disneyland','the White House'];
let randVerb = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];


/*-------manipulating html with random content-------*/
// vars for manupulating dom

var btn = document.getElementById('storyBtn');
var diffStory = document.getElementById('storyContent');


//main function to manipulate story contents
function viewStory(){
  let currentStory = storyDetail;
  //call funtionn to create random index
  let currentName = randomGenerator(randNames);
  let currentPlace = randomGenerator(randPlaces);
  let currentVerb = randomGenerator(randVerb);

  // //incase user has entered customer name
  var enteredName = document.getElementById('cname').value;
  if (enteredName!=='') {
    currentStory = currentStory.replace('Bob', enteredName);
  }


  //replace code to change content
  currentStory = currentStory.replace(':newname:',currentName);
  currentStory = currentStory.replace(':newname:',currentName);
  currentStory = currentStory.replace(':newplace:',currentPlace);
  currentStory = currentStory.replace(':newverb:',currentVerb);
  

  //incase user chooses uk as country
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286) + ' stone'
    let temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    currentStory = currentStory.replace('94 fahrenheit',temperature);
    currenttory = currentStory.replace('300 pounds',weight);
  }

  diffStory.innerHTML=currentStory;
  diffStory.style.display = 'block';
}

//viewstory() will be executed when btn is clicked
btn.addEventListener('click', viewStory);