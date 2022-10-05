// data definition:
const board = document.getElementById("board");

const createLetterCube = (char) => {
  let block = document.createElement("div");
  block.className = "letter";
  block.innerText = char;
  board.appendChild(block);
};

const shuffle = () => {
  board.innerHTML = "";
  for (let i = 0; i < letterCubes.length; i++) {
    let char = letterCubes[i][Math.floor(Math.random() * letterCubes[i].length)];
    createLetterCube(char);
  }
}

// var alarmSound = document.getElementById('sound');

const endTime = () => {
  // alarmSound.play();
  wait(2000);
  window.alert("Time's up!");
  // alarmSound.pause();
  document.getElementById("timer").innerText = "start timer";
}

const timer = () => {
  let button = document.getElementById("timer");
  if (button.innerText.toLowerCase() == "start timer") {
    // setTimeout(endTime, 180000);
    setTimeout(endTime, 30000);
    button.innerText = "stop timer";
  } else {
    clearTimeout();
    button.innerText = "start timer";
  }
}

shuffle();

// TODOS:
// functional sound
// pause
// display time