function locomotiveCtrl() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        tablet: { smooth: true },
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotiveCtrl();

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "40px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation();

function navAnimation() {
    let nav = document.querySelector("nav");

    nav.addEventListener('mouseenter', () => {
        let tl = gsap.timeline();

        tl.to(".nav-bottom", {
            height: "21vh"
        })

        tl.to(".nav-part2 h5", {
            display: "block"
        })

        tl.to(".nav-part2 h5 span", {
            y: 0,
            duration: 0.2,
            stagger: {
                amount: 0.6
            }

        })

    })

    nav.addEventListener('mouseleave', () => {
        let tl = gsap.timeline();


        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }

        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav-bottom", {
            height: "0vh",
            duration: 0.01
        })


    })
};
navAnimation();

function page2Animation() {

    let rightElm = document.querySelectorAll(".right-elem");

    rightElm.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener('mousemove', (dets) => {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })


        })
    });
};
page2Animation();

function videoAnimation() {
    let page3center = document.querySelector(".page3-center");
    let video = document.querySelector(".page3 video");

    page3center.addEventListener('click', () => {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 1

        })

    })
    video.addEventListener('click', () => {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"

        })

    })
};
videoAnimation();

function rightVideo() {
    let sections = document.querySelectorAll(".sec-right");
    sections.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            elem.childNodes[3].style.opacity = 1;
            elem.childNodes[3].play();
        })
        elem.addEventListener("mouseleave", () => {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load();
        })
    })

}
rightVideo();

function bottomAnimation() {

    gsap.from(".btm6-p2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".btm6-p2 h4",
            scroller: ".main",
            start: "top 80%",
            end: "top 10%",
            scrub: true

        }

    })
    gsap.from(".btm6-p3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".btm6-p3 h4",
            scroller: ".main",
            start: "top 80%",
            end: "top 10%",
            scrub: true

        }

    })
    gsap.from(".btm6-p4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".btm6-p4 h4",
            scroller: ".main",
            start: "top 80%",
            end: "top 10%",
            scrub: true

        }

    })


}
bottomAnimation();



