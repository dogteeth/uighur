// 主視覺動畫
gsap.registerPlugin(ScrollTrigger);

//
// 負片人群像

gsap.to(".people_invert", {
  scrollTrigger: {
    trigger: ".people_invert",
    start: "top 10%",
    end: "top 0%",
    scrub: 1,
    // markers: { fontSize: "2rem" },
  },
  duration: 5,
  opacity: 1,
});

// timeline animation .text-box

let targets = document.querySelectorAll(".text-box");

targets.forEach((target) => {
  gsap.from(target, {
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      scrub: 1,
      trigger: target,
      start: "top 90%",
      end: "top 50%",
    },
  });
});

// 如何幫助維吾爾人
gsap.to(".koran_text_img", {
  scrollTrigger: {
    trigger: ".helpUyghurBanner",
    start: "top 20%",
    end: "top 0%",
    scrub: 1,
    // markers: { fontSize: "2rem" },
    // toggleActions: "play none reverse none",
  },
  // duration: 1,
  opacity: 0,
});

gsap.to(".shadowFace", {
  scrollTrigger: {
    trigger: ".helpUyghurBanner",
    start: "top 5%",
    end: "top -20%",
    scrub: 1,
    // markers: { fontSize: "2rem" },
  },
  // duration: 1,
  filter: "drop-shadow(0px -10px 50px rgb(255, 255, 255, 1))",
});

gsap.to(".helpUyghur_title", {
  scrollTrigger: {
    trigger: ".helpUyghur_title",
    start: "top 45%",
    end: "top 40%",
    scrub: 1,
    // markers: { fontSize: "2rem" },
    // toggleActions: "play none reverse none",
  },
  duration: 1,
  opacity: 1,
});

// 結尾
gsap.to(".uyghurFace_new_2", {
  scrollTrigger: {
    trigger: ".uyghurFace_new_2",
    start: "top 20%",
    end: "top 10%",
    scrub: 1,
    // markers: { fontSize: "2rem" },
  },
  duration: 1,
  opacity: 0,
});

let mm = gsap.matchMedia();

// 手機版動畫
mm.add("(max-width: 768px)", () => {
  // 負片人群像文字
  gsap.to(".lost_people_title", {
    scrollTrigger: {
      trigger: ".uyghur_lost_people",
      start: "top 5%",
      end: "top 0%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
      toggleActions: "play none reverse none",
    },
    duration: 0.1,
    opacity: 0,
  });

  gsap.to(".mainFace", {
    scrollTrigger: {
      trigger: ".mainFace",
      start: "top 50%",
      end: "top 40%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
    },
    scale: 5,
    opacity: 0,
    duration: 2,
  });

  gsap.to(".chinaFlag", {
    scrollTrigger: {
      trigger: ".mainTitle",
      start: "top 42%",
      end: "top 20%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
    },
    duration: 0.5,
    opacity: 0,
    // filter: "grayscale(100%)",
  });

  gsap.to(".mainTitle", {
    scrollTrigger: {
      trigger: ".mainTitle",
      start: "bottom 100%",
      end: "bottom 70%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
    },
    duration: 2,
    opacity: 1,
  });
});

// 桌機版
mm.add("(min-width: 769px)", () => {
  // 負片人群像文字
  gsap.to(".lost_people_title", {
    scrollTrigger: {
      trigger: ".lost_people_title",
      start: "top 50%",
      end: "top 30%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
      // toggleActions: "play none reverse none",
    },
    duration: 0.5,
    opacity: 0,
  });

  gsap.to(".mainFace", {
    scrollTrigger: {
      trigger: ".uyghurNow",
      start: "top 100%",
      end: "top 70%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
    },
    scale: 5,
    opacity: 0,
    duration: 2,
  });

  gsap.to(".chinaFlag", {
    scrollTrigger: {
      trigger: ".uyghurNow",
      start: "top 100%",
      end: "top 80%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
    },
    duration: 2,
    opacity: 0,
    filter: "grayscale(100%)",
  });

  gsap.to(".mainTitle", {
    scrollTrigger: {
      trigger: ".mainTitle",
      start: "top 40%",
      end: "top 30%",
      scrub: 1,
      // markers: { fontSize: "2rem" },
    },
    duration: 2,
    opacity: 1,
  });
});

// 四位父母官動畫，desktop的狀態才出現
mm.add("(min-width: 1023px)", () => {
  // this setup code only runs when viewport is at least 800px wide
  // 四位政治人物動畫
  let expanders = gsap.utils.toArray(".expander");
  let active; // keep track of which expander is open
  expanders.forEach(function (expander, index) {
    // let close = expander.querySelector(".close");
    //create animation for each expander
    let animation = gsap.timeline({ paused: true });

    let mainText = expander.querySelector(".mainImgText");
    let mainTitle = expander.querySelector(".politicsFace_title");

    animation
      .to(expander, { width: 1200, duration: 0.1 })
      .to(mainTitle, { opacity: "0", duration: 0.5 })
      .set(mainTitle, { display: "none" })
      .to(mainText, { width: "95%", opacity: "1", duration: 0.1 });

    // animation.from(
    //   close,
    //   { opacity: 0, duration: 0.1, scale: 0.4, x: "-=10" },
    //   "-=0.1"
    // );
    //apply the timeline animation to an animation property on the expander
    expander.animation = animation;
    expander.addEventListener("click", function () {
      if (active) {
        //close the active expander if there is one by reversing it

        active.animation.reverse();
      }
      expander.animation.play(); // play the animation of the element you clicked on (this opens it)
      active = expander; // keep track of which expander is open
    });
    //close this expander when you click the close button by reversing the animation
    expander.addEventListener("mouseleave", function (event) {
      event.stopPropagation();
      expander.animation.reverse();
    });
  });
});

// 負片轉正片
var cursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
  });
});
