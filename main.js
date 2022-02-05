let scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// update the scroll after entering a page
barba.hooks.after(() => {
  scroll.update();
});

const animation = (container) => {
  const tl = new gsap.timeline({});
  tl.set(".text", {
    autoAlpha: 1,
  });
  tl.to(".info", 0.1, {
    opacity: 0,
  });
  tl.to(".transition", 1, {
    width: "102vw",
    height: "100vh",
    y: 220,
    ease: "expo.inOut",
  });
  tl.from(
    ".text",
    1,
    {
      autoAlpha: 0,
      y: 200,
      ease: "expo.inOut",
    },
    "-=0.8"
  );
};

const rev = (container) => {
  if (window.matchMedia("(max-width: 700px)").matches) {
    const tl = new gsap.timeline({});
    tl.to(".text", 1, {
      y: -200,
      ease: "expo.inOut",
    });
    tl.to(
      ".transition",
      1,
      {
        width: "230px",
        height: "200px",
        y: 0,
        ease: "expo.inOut",
      },
      "-=0.5"
    );
    tl.to(".info", 0.1, {
      opacity: 1,
    });
    tl.set(".text", {
      autoAlpha: 0,
    });
    return tl;
  } else {
    const tl = new gsap.timeline({});
    tl.to(".text", 1, {
      y: -200,
      ease: "expo.inOut",
    });
    tl.to(
      ".transition",
      1,
      {
        width: "500px",
        height: "400px",
        y: 0,
        ease: "expo.inOut",
      },
      "-=0.5"
    );
    tl.to(".info", 0.1, {
      opacity: 1,
    });
    tl.set(".text", {
      autoAlpha: 0,
    });
    return tl;
  }
  const tl = new gsap.timeline({});
  tl.to(".text", 1, {
    y: -200,
    ease: "expo.inOut",
  });
  tl.to(
    ".transition",
    1,
    {
      width: "500px",
      height: "400px",
      y: 0,
      ease: "expo.inOut",
    },
    "-=0.5"
  );
  tl.to(".info", 0.1, {
    opacity: 1,
  });
  tl.set(".text", {
    autoAlpha: 0,
  });
  return tl;
};

const fadeOut = (container) => {
  return gsap.to(container, 1, { autoAlpha: 0 });
};

const fade = (container) => {
  return gsap.set(container, { autoAlpha: 1 });
};
barba.init({
  transitions: [
    {
      name: "about",
      to: {
        namespace: ["about"],
      },
      once({ current }) {
        animation(current.container);
      },
      enter({ next }) {
        animation(next.container);
      },
    },
    {
      name: "home",
      to: {
        namespace: ["home"],
      },
      leave: ({ current }) => rev(current.container),
      once({ next }) {
        fade(next.container);
      },
      enter({ next }) {
        fade(next.container);
      },
    },
  ],
});
