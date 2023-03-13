
$(document).ready(()=>{
  console.log(getImagesArray(8));
});


function getImagesArray(imageNumber) {
  // Check whether the number is even.
  if ((imageNumber & 1) == 1) {
    return;
  }
  //Define array
  var imageArray = new Array(imageNumber);

  for (var i = 0, j = 1; i < imageNumber; i++) {
    imageArray[i] = "card_" + j + ".png";
    j++;
    if (j > imageNumber / 2) {
      j = 1;
    }
  }
  //Shuffle array and return.
  return shuffle(imageArray);
}

//Shuffle array and return a new array.
function shuffle(array){
  var copy = [],n=array.length;
  while(n){
    var i = Math.floor(Math.random() * array.length);
    if (i < array.length) {
      copy.push(array[i]);
      delete array[i];
      array = copyArray(array);
      n--;
    }
  }
  return copy;
}

//Delete the undefined elements from array, and return the new array.
function copyArray(array){
  var copy = [];
  for(var index = 0; index < array.length; index++){
    if(array[index] !== undefined){
      copy.push(array[index]);
    }
  }
  return copy;
}