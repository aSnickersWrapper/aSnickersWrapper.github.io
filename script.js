const clickable = document.getElementById("clickable");
const sfx = new Audio("jp3.mp3"); // single audio instance

clickable.addEventListener("click", () => {
    // play sound only if not already playing
    if (sfx.paused) {
        sfx.currentTime = 0;
        sfx.play();
    }

    triggerShake();
    changeBackground();
});

/* SHAKE EFFECT */
function triggerShake() {
    clickable.classList.add("shake");
    setTimeout(() => clickable.classList.remove("shake"), 250);
}

/* BACKGROUND FADE EFFECT */
function changeBackground() {
    document.body.style.backgroundImage = "url('spino.png')"; // your uploaded dinosaur image
    document.body.classList.add("fade-bg");

    setTimeout(() => {
        document.body.style.backgroundImage = "none";
        document.body.classList.remove("fade-bg");
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
