let holes = document.querySelectorAll(".hole");
let moles = document.querySelectorAll(".mole");
let scoreBoard = document.querySelector(".score");
let score = 0;
let timeUp = false;
let lastHole;
function startGame() {
  scoreBoard.innerText = 0;
  score = 0;
  timeUp = false;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}
function peep() {
  let time = randomTime(200, 1000);
  let hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomHole(holes) {
  let id = Math.floor(Math.random() * holes.length);
  let hole = holes[id];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
function bonk(event) {
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.innerText = score;
}
moles.forEach((mole)=>{
    mole.addEventListener("click", bonk);
});