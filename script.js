const clickable = document.getElementById("clickable");
const overlay = document.getElementById("bg-overlay");

// Single audio instance (no overlap)
const sfx = new Audio("jp3.mp3");

clickable.addEventListener("click", () => {
    // Play sound only if not already playing
    if (sfx.paused) {
        sfx.currentTime = 0;
        sfx.play();
    }

    triggerShake();
    triggerDinoEffect();
});

/* SHAKE EFFECT */
function triggerShake() {
    clickable.classList.add("shake");
    setTimeout(() => clickable.classList.remove("shake"), 250);
}

/* DINOSAUR BACKGROUND + PHONE FALL */
function triggerDinoEffect() {
    // Set dinosaur image
    overlay.style.backgroundImage = "url('spino.png')";

    // Fade in
    overlay.style.opacity = "1";

    // Phone falls to bottom + rotates
    clickable.classList.add("phone-fall");

    // After 2 seconds fade out + reset phone
    setTimeout(() => {
        overlay.style.opacity = "0";
        clickable.classList.remove("phone-fall");
    }, 2000);
}

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
