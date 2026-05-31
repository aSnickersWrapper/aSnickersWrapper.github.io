window.onload = function() {

    // --- Slideshow 1 ---
    let index1 = 0;
    const track1 = document.getElementById("track1");
    const slides1 = track1.children.length;

    function slide1() {
        index1 = (index1 + 1) % slides1;
        track1.style.transform = `translateX(-${index1 * 100}%)`;
    }

    setInterval(slide1, 2000);


    // --- Slideshow 2 ---
    let index2 = 0;
    const track2 = document.getElementById("track2");
    const slides2 = track2.children.length;

    function slide2() {
        index2 = (index2 + 1) % slides2;
        track2.style.transform = `translateX(-${index2 * 100}%)`;
    }

    setInterval(slide2, 2000);
};
