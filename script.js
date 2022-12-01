// put your globals here - hint: select elements from the HTML
const wordInput = document.querySelector("#text-area");
const wordCount = document.querySelector("#wordCountInput");
const countBtn = document.querySelector("#countBtn");
const findWord = document.querySelector("#findWordInput");
const findBtn = document.querySelector("#findBtn");
const wordFound = document.querySelector("#wordFoundInput");

// dont' forget to add event listeners to teh buttons
countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);



function countWords() {
 
  let str = wordInput.value;
  const words = str.split(' ');
  const count = words.length;
  printData(count, wordCount);
}


function findWords() {
  let selectedwords = [];
  let str = wordInput.value;
  const words = str.split(' ');
  words.forEach( (item) => {
    if(item === findWord.value){
      selectedwords.push(item);
    }
  });
  printData(selectedwords.length, wordFound);
}
 

// change param1 and param2 to identifiers that make sense
function printData(data, input) { 
  input.value = data;
}




 