
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);


/* cursor logic */
window.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY
    });
    gsap.to(".cursor-follow", {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "power3.out"
    });
})

document.body.classList.remove("loading");

var imageView = false; // whatever image is opened
var currentOpenImage;
var slide = 1; // current slide

function init() {
    let imgs = document.querySelectorAll(".header-wrp img");
    imgs.forEach((i) => {
        i.addEventListener("mouseenter", () => {
            if (imageView) return;
            imgs.forEach((f) => {
                if (f == i) return;
                gsap.to(f, {opacity: .3});
            });
        });
        i.addEventListener("mouseleave", () => {
            if (imageView) return;
            imgs.forEach((f) => {
                gsap.to(f, {opacity: 1});
            });
        });

        i.addEventListener("click", selectImage);
    });
}

window.onload =init();

// Timeline for image click
var tli = gsap.timeline();

function selectImage(img) {

    // Close image if open
    if (imageView) {
        closeImage(e);
        return;
    }

    currentOpenImage = img;

    img.target.parentNode.classList.add("crossCursor");

    tli = gsap.timeline();

    let imgs = document.querySelectorAll(".slide" + slide + " .img");

    imgs.forEach((f) => {
        if (f == img.target.parentNode) return;
        tli.to(f, {opacity: 0}, 0);
    });

    // Set image open state to true
    imageView = true;

    // hide the slide headlines
    tli.to(".bg", {opacity: 0}, .6);

    // if not the centered image (i1), change to center
    if (!img.target.parentNode.classList.contains("i1"))
    tli.to(img.target.parentNode, {
            x:"-50%", y:"-50%"
        }, 0);

    // resize image to full screen
    tli.to(img.target.parentNode, {width: "80vw",
        height: "80vh", opacity: 1,
        ease: "power3.out", duration: 1}, .5);

    // hide cursor
    gsap.to(".c", {
        opacity: 0
    });
}

function closeImage(img) {

}