// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

// Header slide in from top
gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// About section fade/slide
gsap.from("#aboutText", {
  scrollTrigger: {
    trigger: "#aboutText",
    start: "top 85%",
  },
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// Stats cards
gsap.from("#stats div", {
  scrollTrigger: {
    trigger: "#stats",
    start: "top 90%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// Skills cards in grid (desktop)
gsap.utils.toArray("#skills .grid > .flex").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 40,
    duration: 0.5,
    delay: i * 0.1,
    ease: "power2.out",
  });
});

// Experience timeline cards
gsap.utils.toArray("#experience article").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    delay: i * 0.1
  });
});

// Footer section columns
gsap.from(".footer-grid > div", {
  scrollTrigger: {
    trigger: ".footer-grid",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
  stagger: 0.2,
});


// leis code

const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);