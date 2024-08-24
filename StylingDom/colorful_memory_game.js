const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
];

let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let gameInterval;

const startbtn = document.getElementById("startbtn");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

function generateCards() {
  let board = `<div class="container text-center" >`;
  let count = 1;
  let isRow = false;
  for (const color of cards) {
    if (!isRow) {
      isRow = true;
      board += `<div class="row">`;
    }

    board += ` <div class="col border cardItem" id="card-${count}"   data-color="${color}" style="width:50px;" >
       <img src="./question.gif" id="image${count}" alt="..." style="width:50px;">
    </div>`;
    if (count % 4 == 0) {
      isRow = false;
      board += `</div>`;
    }
    count++;
  }

  board += `</div>`;
  gameContainer.innerHTML = board;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function handleCardClick(event) {
  let card = event.target.tagName;
  if (card === "IMG") {
    card = event.target.parentNode;
  } else {
    card = event.target;
  }
  console.log(card);
  if (
    !card.classList.contains("cardItem") ||
    card.classList.contains("matched")
  ) {
    return;
  }

  // card.textContent = card.dataset.color;
  if (selectedCards.length == 2 && card.dataset.color) return;

  card.style.backgroundColor = card.dataset.color;
  selectedCards.push(card);
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 400);
  }
}

function checkMatch() {
  const [card1, card2] = selectedCards;
  if (
    card1.dataset.color === card2.dataset.color &&
    card1.getAttribute("id") !== card2.getAttribute("id")
  ) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    card1.innerHTML = `<p class="img-fluid" style="width:50px;height:62.5px;"></p>`;
    card2.innerHTML = `<p class="img-fluid" style="width:50px"></p>`;
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    card1.innerHTML = `<img src="./question.gif" class="img-fluid" alt="..." style="width:50px">`;
    card2.innerHTML = `<img src="./question.gif" class="img-fluid" alt="..." style="width:50px">`;
    card1.style.backgroundColor = "#fff";
    card2.style.backgroundColor = "#fff";
  }
  //reset
  selectedCards = [];
}

function startGame() {
  let timeLeft = 100;
  startbtn.disabled = true;
  score = 0; // Reset score to zero
  scoreElement.textContent = `Score: ${score}`;
  startGameTimer(timeLeft);
  cards = shuffle(colors.concat(colors));
  selectedCards = [];
  gameContainer.innerHTML = "";
  generateCards();
  gameContainer.addEventListener("click", handleCardClick);
}

function startGameTimer(timeLeft) {
  timerElement.textContent = `Time Left: ${timeLeft}`;

  gameInterval = setInterval(() => {
    timeLeft--;
    console.log(score);
    timerElement.textContent = `Time Left: ${timeLeft}`;
    document.getElementsByClassName(
      "progress-bar"
    )[0].style.width = `${timeLeft}%`;
    if (timeLeft === 0 || score === 24) {
      clearInterval(gameInterval);
      if (score === 24) {
        alert("You Win!");
      } else {
        alert("Game Over!");
      }
      startbtn.disabled = false;
    }
  }, 1000);
}

startbtn.addEventListener("click", () => {
  startGame();
});
generateCards();
