const first = document.querySelector(".intro");
const main = document.querySelector(".main");
const gridClick = document.querySelector(".grid");

main.style.display = "none";

console.time("first");
anime
  .timeline({ loop: false })
  .add({
    targets: ".title .word",
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i,
  })
  .add({
    targets: ".title",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  })
  .finished.then(() => {
    main.style.display = "flex";
    first.style.display = "none";
    console.timeEnd("first");
    anime({
      targets: ".main",
      translateY: 20
    });
  });