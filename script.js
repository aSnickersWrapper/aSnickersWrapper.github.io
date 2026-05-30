window.onload = function() {
    console.log("Website loaded!");
    let images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png",
                  "img6.png", "img7.png", "img8.png", "img9.png", "img10.png", "img11.png"];
    let index = 0;

    function changeImage() {
        index = (index + 1) % images.length;
        document.getElementById("slideshow").src = images[index];
    }

    setInterval(changeImage, 2000);
};
