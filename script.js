/* CLICKER GAME */
let score = 0;
const clickable = document.getElementById("clickable");
const scoreDisplay = document.getElementById("score");

// Load your sound file
const clickSound = new Audio("jp3.mp3");

clickable.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = `Clicks: ${score}`;
    clickSound.currentTime = 0;
    clickSound.play();
});

/* SLIDESHOW 1 */
let index1 = 0;
const track1 = document.getElementById("track1");
const slides1 = track1.children.length;

setInterval(() => {
    index1 = (index1 + 1) % slides1;
    track1.style.transform = `translateX(-${index1 * 100}%)`;
}, 2000);

/* SLIDESHOW 2 */
let index2 = 0;
const track2 = document.getElementById("track2");
const slides2 = track2.children.length;

setInterval(() => {
    index2 = (index2 + 1) % slides2;
    track2.style.transform = `translateX(-${index2 * 100}%)`;
}, 2000);
