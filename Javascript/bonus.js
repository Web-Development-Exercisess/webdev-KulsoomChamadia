// Select elements
const rgbValue = document.getElementById('rgb-value');
const optionsContainer = document.getElementById('options');
const livesDisplay = document.getElementById('lives');
const scoreDisplay = document.getElementById('score');
const playAgainButton = document.getElementById('play-again');

// Variables
let correctColor = '';
let lives = 3;
let score = 0;

// Function to generate random color
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Start new round
function newRound() {
  optionsContainer.innerHTML = ''; // Clear previous options

  correctColor = generateRandomColor();
  rgbValue.textContent = correctColor; // Show the RGB to guess

  // Random position for correct color
  const correctPosition = Math.floor(Math.random() * 3);

  for (let i = 0; i < 3; i++) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('option');

    if (i === correctPosition) {
      colorDiv.style.backgroundColor = correctColor;
      colorDiv.dataset.correct = "true";
    } else {
      colorDiv.style.backgroundColor = generateRandomColor();
      colorDiv.dataset.correct = "false";
    }

    colorDiv.addEventListener('click', checkAnswer);
    optionsContainer.appendChild(colorDiv);
  }
}

// Check user's answer
function checkAnswer(e) {
  const isCorrect = e.target.dataset.correct === "true";

  if (isCorrect) {
    score++;
  } else {
    lives--;
  }

  updateStatus();

  if (lives === 0) {
    endGame();
  } else {
    newRound();
  }
}

// Update lives and score on screen
function updateStatus() {
  livesDisplay.textContent = lives;
  scoreDisplay.textContent = score;
}

// End the game
function endGame() {
  optionsContainer.innerHTML = '';
  rgbValue.textContent = "Game Over!";
  playAgainButton.style.display = 'inline-block';
}

// Restart the game
playAgainButton.addEventListener('click', () => {
  lives = 3;
  score = 0;
  updateStatus();
  playAgainButton.style.display = 'none';
  newRound();
});

// Start the first round
newRound();
