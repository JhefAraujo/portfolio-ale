import { animate, scroll } from "motion";
import { inView, animate } from "motion";

// Progress bar representing gallery scroll
scroll(animate(".progress", { scaleX: [0, 1] }));

document.querySelectorAll("section").forEach((section) => {
  const header = section.querySelector("h2");
  scroll(animate(header, { y: [-400, 400] }), {
    target: header
  });
});

inView("section", ({ target }) => {
    animate(
      target.querySelector("span"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log('a');
  });