export function shakeScreen(intensity = 6, duration = 300) {
  const el = document.body;

  el.animate(
    [
      { transform: "translate(0px, 0px)" },
      { transform: `translate(-${intensity}px, ${intensity}px)` },
      { transform: `translate(${intensity}px, -${intensity}px)` },
      { transform: "translate(0px, 0px)" },
    ],
    {
      duration,
      easing: "ease-in-out",
    }
  );
}
