
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
var pausedSlider = false; // slider paused state
var progress = 0; // slider progress in second

function init() {
    let imgs = document.querySelectorAll(".header-wrp img");
    imgs.forEach((i) => {
        i.addEventListener("mouseenter", () => {
            if (imageView) return;
            imgs.forEach((f) => {
                if (f == i) return;
                gsap.to(f, {opacity: .3});

                // pause slider on image hover
                pausedSlider = true;
            });
        });
        i.addEventListener("mouseleave", () => {
            if (imageView) return;
            imgs.forEach((f) => {
                gsap.to(f, {opacity: 1});
            });

            // resume slider on mouseleave
            pausedSlider = false;
        });

        i.addEventListener("click", selectImage);
    });
}

window.onload =init();

// Timeline for image click
var tli = gsap.timeline();

function selectImage(img) {

    // do not interrupt animation
    if (tli.isActive()) {
        return;
    }
    
    // Close image if open
    if (imageView) {
        closeImage(img);
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
    tli.to(".slide" + slide + " h2", {opacity: 0}, 0);

    // hide background
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
    tli.reverse();

    imageView = false;

    // hide the cross Cursor
    img.target.parentNode.classList.remove("crossCursor");

    // unhide follow cursor
    gsap.to(".c", {opacity: 1});
}

/* slide animations */
var tl1 = gsap.timeline({paused: false});
var ease = CustomEase.create("custom", "M0,0 C0.246,0.041 0.22,0.315 0.359,0.606 0.427,0.748 0.571,0.989 1,1 ");

tl1.from(".slide1 .i1 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .7);
tl1.from(".slide1 .i2 img", {x: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .2);
tl1.from(".slide1 .i3 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl1.from(".slide1 .i4 img", {y: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .4);
tl1.from(".slide1 .i5 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl1.from(".slide1 .i6 img", {x: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .9);

tl1.fromTo(".slide1 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, .9);

tl1.fromTo(".slide1 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, 1.1);

// second slide animation
var tl2 = gsap.timeline({paused: true});
tl2.from(".slide2 .i1 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .7);
tl2.from(".slide2 .i2 img", {x: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .2);
tl2.from(".slide2 .i3 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl2.from(".slide2 .i4 img", {y: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .4);
tl2.from(".slide2 .i5 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl2.from(".slide2 .i6 img", {x: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .9);

tl2.fromTo(".slide2 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, .9);

tl2.fromTo(".slide2 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, 1.1);

// third slide animation
var tl3 = gsap.timeline({paused: true});
tl3.from(".slide3 .i1 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .7);
tl3.from(".slide3 .i2 img", {x: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .2);
tl3.from(".slide3 .i3 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl3.from(".slide3 .i4 img", {y: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .4);
tl3.from(".slide3 .i5 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl3.from(".slide3 .i6 img", {x: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .9);

tl3.fromTo(".slide3 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, .9);

tl3.fromTo(".slide3 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, 1.1);

// fourth slide animation
var tl4 = gsap.timeline({paused: true});
tl4.from(".slide4 .i1 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .7);
tl4.from(".slide4 .i2 img", {x: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .2);
tl4.from(".slide4 .i3 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl4.from(".slide4 .i4 img", {y: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .4);
tl4.from(".slide4 .i5 img", {y: "110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .5);
tl4.from(".slide4 .i6 img", {x: "-110%", opacity: 0,
    ease: ease, duration: 1, scaleY: .5}, .9);

tl4.fromTo(".slide4 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, .9);

tl4.fromTo(".slide4 .title1 span", {
    y: '40%', opacity: 0, duration: 1, ease: 'power3.out'
}, {
    y: '0%', opacity: 1
}, 1.1);

// change slide to new id
function changeSlide(id) {
    // close image view if still open
    if (imageView) {
        closeImage(currentOpenImage);
    }

    // Reverse the show animation from the current slide
    window["tl" + slide].reverse(1);

    // play new animation
    window["tl" + id].restart();

    // remove active state from any slide
    let slides = document.querySelectorAll("header");
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    let newSlide = document.querySelector(".slide" + id);
    newSlide.classList.add("active");

    // update slide id
    slide = id;

    // reset controls
    let controls = document.
        querySelectorAll(".controls ul li");
        

    controls.forEach((f) => {
        f.classList.remove("active");
    });

    // Set new active
    controls[id-1].classList.add("active");

    // reset progress to zero on manual slide change
    progress = 0;

    // unpause slider on previously paused
    pausedSlider = false;
}

// click events to right controls (index)
var controls = document.querySelectorAll(".controls ul li");

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", () => {
        changeSlide(i+1);
    });
}

function startProgressBar() {
    setInterval(() => {
        // If slider is paused skip interval
        if (pausedSlider) return;

        progress += .1;

        // After 8 seconds, change slide
        if (progress >= 8) {
            changeSlide((slide % 4) + 1);
            progress = 0;
        }

        gsap.to(".slideProgress", {
            scaleX: progress / 8,
            duration: .3});
    }, 100);
}
startProgressBar();

// change slide by arrow clicks
let prevArrow = document.querySelector(".arrows svg:nth-child(1)");
let nextArrow = document.querySelector(".arrows svg:nth-child(2)");

prevArrow.addEventListener("click", () => {
    let delta = slide == 1 ? 4 : slide - 1;
    changeSlide(delta);
})
nextArrow.addEventListener("click", () => {
    changeSlide((slide % 4) + 1);
})
