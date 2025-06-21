const button = document.getElementById("prankButton");

function moveButton() {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

const messages = [
  "Too slow!",
  "Try harder!",
  "Almost got me!",
  "Nope 😎",
  "Getting warmer!",
  "You wish!"
];

function dodgeButton() {
  button.textContent = messages[Math.floor(Math.random() * messages.length)];
  moveButton();
}

button.addEventListener("mouseover", dodgeButton);   // for mouse
button.addEventListener("touchstart", dodgeButton);  // for touch

