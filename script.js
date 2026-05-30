window.onload = function() {
    console.log("JS loaded and running!");

    let images = [
        "img1.png", "img2.png", "img3.png", "img4.png", "img5.png",
        "img6.png", "img7.png", "img8.png", "img9.png", "img10.png", "img11.png"
    ];

    let index = 0;
    const slideshow = document.getElementById("slideshow");

    console.log("Slideshow element:", slideshow);

    function changeImage() {
        index = (index + 1) % images.length;
        console.log("Changing to:", images[index]);
        slideshow.src = images[index];
    }

    setInterval(changeImage, 2000);
};
