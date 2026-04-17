(() => {
  const sliders = document.querySelectorAll(".customer-logos-slider");
  if (!sliders.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  sliders.forEach((slider) => {
    const track = slider.querySelector(".customer-logos-track");
    if (!track) return;

    let position = 0;
    let frameId = null;
    const speed = Number(slider.dataset.speed || 0.12);
    let loopWidth = track.scrollWidth / 2;

    const step = () => {
      position -= speed;
      if (Math.abs(position) >= loopWidth) {
        position = 0;
      }
      track.style.transform = `translate3d(${position}px, 0, 0)`;
      frameId = window.requestAnimationFrame(step);
    };

    const start = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(step);
    };

    const stop = () => {
      if (frameId === null) return;
      window.cancelAnimationFrame(frameId);
      frameId = null;
    };

    const handleResize = () => {
      loopWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= loopWidth) {
        position = 0;
      }
    };

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);
    window.addEventListener("resize", handleResize);

    start();
  });
})();
