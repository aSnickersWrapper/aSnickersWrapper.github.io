window.onload = function() {

    // Slideshow 1 (images 1–4)
    let images1 = ["img1.png", "img2.png", "img3.png", "img4.png"];
    let index1 = 0;
    const slideshow1 = document.getElementById("slideshow1");

    function changeImage1() {
        index1 = (index1 + 1) % images1.length;
        slideshow1.src = images1[index1];
    }

    setInterval(changeImage1, 2000);


    // Slideshow 2 (images 5–11)
    let images2 = ["img5.png", "img6.png", "img7.png", "img8.png", "img9.png", "img10.png", "img11.png"];
    let index2 = 0;
    const slideshow2 = document.getElementById("slideshow2");

    function changeImage2() {
        index2 = (index2 + 1) % images2.length;
        slideshow2.src = images2[index2];
    }

    setInterval(changeImage2, 2000);
};
