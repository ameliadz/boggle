// data definition:
const board = document.getElementById("board");

const createLetterCube = (char) => {
  let block = document.createElement("div");
  block.className = "letter";
  block.innerText = char;
  board.appendChild(block);
};

function shake(array) {
  for (let i = array.length - 1; i > 0; i--) {
    console.log(Math.floor(Math.random() * (i + 1)));

    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let testArray = ["1","2","3"];
let newArray = shake(testArray);
console.log(newArray);

const shuffle = () => {
  board.innerHTML = "";
  let newOrder = shake(letterCubes);
  for (let i = 0; i < newOrder.length; i++) {
    let char = newOrder[i][Math.floor(Math.random() * newOrder[i].length)];
    createLetterCube(char);
  }
}

// var alarmSound = document.getElementById('sound');

const endTime = () => {
  // alarmSound.play();
  // wait(2000);
  window.alert("Time's up!");
  // alarmSound.pause();
  document.getElementById("timer").innerText = "start timer";
}

const timer = () => {
  let button = document.getElementById("timer");
  if (button.innerText.toLowerCase() == "start timer") {
    setTimeout(endTime, 180000);
    // setTimeout(endTime, 10000);
    button.innerText = "stop timer";
  } else {
    clearTimeout();
    button.innerText = "start timer";
  }
}

// shuffle();

// TODOS:
// functional sound
// pause
// display time