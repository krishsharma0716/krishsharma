//----------------------------
//
//Inital Values
//
//----------------------------

//Sprites for inital screen (clicking on letter and evil cupid)
const obj = document.getElementById("arrow")
const letta = document.getElementById("letter")
const cup = document.getElementById("cupid")
const textBox = document.getElementById("cupid-text")

// GAME ELEMENTS
const canvas = document.querySelector("canvas"); //This makes a canvas
const ctx = canvas.getContext("2d"); //This renders the canvas in 2d
const girl = document.getElementById("girl"); // This is the girl sprite, main charecter

//Keyboard Inputs
let gameRun = false;
let rightPressed = false;
let leftPressed = false;
let playerX = canvas.width / 2;
const playerSize = 50;
const squares = [];
let score = 0;

//----------------------------
//
//INTRO W/ CUPID
//
//----------------------------

function myfunc() {
  //This sets the arrow position for it flying in
  const centerX = window.innerWidth / 2 - obj.offsetWidth / 2;
  const centerY = window.innerHeight / 2 - obj.offsetHeight / 2;

  //This part connects to CSS Styling which enables the arrow to smoothly transition in (Look at line 280 ish with #arrow)
  obj.style.left = centerX + 'px';
  obj.style.top = centerY + 'px';

  //Makes letter disappear
  setTimeout(function(){
    letta.style.display = "none";
  }, 800);

  setTimeout(function(){
    obj.style.display = "none";
  }, 800);

  //Makes cupid fly in using setTimeout function and SummonCupid subfunction
  setTimeout(summonCupid,
    1600);

  //This begins to display cupid talking initially
  setTimeout(() => {
    typeWriter(
      document.getElementById("text1").textContent
    );
  }, 2400);

  document.addEventListener("keypress", triggerGame, false); //Starts the game after monologe 
}

//----------------------------
//
// SUBFUNCTIONS FOR INTRO
//
//----------------------------

//Subfunction to make cupid come in
function summonCupid() {
  const centerX = window.innerWidth / 2 - cup.offsetWidth / 2;
  const centerY = window.innerHeight / 2 - cup.offsetHeight / 2;
  cup.style.left = centerX + 'px';
  cup.style.top = centerY + 'px';
  return 0;
}

//Subfunction for displaying text, uses delays and CSS styling to make it look clean.
function typeWriter(text, i = 0) {
  if (i === 0) {
    //Unhides the textbox
    textBox.classList.remove("hidden");
    textBox.textContent = "";
  }
  if (i < text.length) {
    textBox.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 50); // 50ms delay per letter
  }
}

//----------------------------
//
// GAME PORTION
//
//----------------------------

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
