/* CLICKER GAME */
let score = 0;
const clickable = document.getElementById("clickable");
const scoreDisplay = document.getElementById("score");

clickable.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = `Clicks: ${score}`;

    // Overlapping sound
    const sfx = new Audio("jp3.mp3");
    sfx.play();

    spawnParticles();
    triggerShake();
});

/* SHAKE EFFECT */
function triggerShake() {
    clickable.classList.add("shake");
    setTimeout(() => clickable.classList.remove("shake"), 250);
}

/* YELLOW PARTICLES AROUND PHONE */
function spawnParticles() {
    const rect = clickable.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");

        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 40;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        p.style.left = `${centerX}px`;
        p.style.top = `${centerY}px`;
        p.style.transform = `translate(${x}px, ${y}px)`;

        document.body.appendChild(p);

        setTimeout(() => p.remove(), 600);
    }
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
