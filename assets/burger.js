const burger = document.querySelector("#burger");
//For switchin icon when on/off
const icon = document.querySelector("nav ul li i");
const nav = document.querySelectorAll("nav ul li");

let switchIndex = 0;

document.querySelector("#burger").addEventListener("click", () => {
  switch (switchIndex) {
    case 0:
      //0-1ms
      for (var i = 0; i < nav.length; i++) {
        nav[i].style.display = "flex";
      }
      icon.className = "fa fa-x";
      switchIndex = 1;
      break;

    case 1:
      //0-2ms
      for (var i = 0; i < nav.length; i++) {
        nav[i].style.display = "none";
      }
      burger.style.display = "flex";
      icon.className = "fa fa-grip-lines";
      switchIndex = 0;
      break;
  }
});
