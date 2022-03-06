const burger = document.querySelector("#burger");
const nav = document.querySelectorAll("nav ul li");

let switchIndex = 0;

document.querySelector("#burger").addEventListener("click", () => {
  switch (switchIndex) {
    case 0:
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.display = "block";
          }
        switchIndex = 1;
      break;

    case 1:
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.display = "none";
          }
          burger.style.display = "block"
          switchIndex = 0;
      break;
  }
});
