const obj = document.getElementById("arrow")
const letta = document.getElementById("letter")
const cup = document.getElementById("cupid")
const textBox = document.getElementById("cupid-text")

// GAME ELEMENTS
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const girl = document.getElementById("girl");

let gameRun = false;
let rightPressed = false;
let leftPressed = false;
let playerX = canvas.width / 2;
const playerSize = 50;
const squares = [];
let score = 0;

//INTRO W/ CUPID

function myfunc() {
  const centerX = window.innerWidth / 2 - obj.offsetWidth / 2;
  const centerY = window.innerHeight / 2 - obj.offsetHeight / 2;
  obj.style.left = centerX + 'px';
  obj.style.top = centerY + 'px';

  setTimeout(function(){
    letta.style.display = "none";
  }, 800);

  setTimeout(function(){
    obj.style.display = "none";
  }, 800);

  setTimeout(summonCupid,
    1600);

  setTimeout(() => {
    typeWriter(
      document.getElementById("text1").textContent
    );
  }, 2400);

  document.addEventListener("keypress", triggerGame, false);
}

function summonCupid() {
  const centerX = window.innerWidth / 2 - cup.offsetWidth / 2;
  const centerY = window.innerHeight / 2 - cup.offsetHeight / 2;
  cup.style.left = centerX + 'px';
  cup.style.top = centerY + 'px';
  return 0;
}

function typeWriter(text, i = 0) {
  if (i === 0) {
    textBox.classList.remove("hidden");
    textBox.textContent = "";
  }
  if (i < text.length) {
    textBox.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 50); // 50ms delay per letter
  }
}

// GAME PORTION

function triggerGame() {
  textBox.classList.remove("hidden");
  textBox.textContent = "";
  cup.style.top = 100 + "px";
  girl.style.display = "block";
  girl.style.bottom = 100 + "px";
  girl.style.left = -100 + "px";
  arrow.style.tranform = "rotate(90deg)"
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

for(let i = 0; i < 5; i++){
  squares.push({
    x: Math.random() * (canvas.width - playerSize),
    y: Math.random() * -canvas.height,
    size: playerSize,
  });
}
