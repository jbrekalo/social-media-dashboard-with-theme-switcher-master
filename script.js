"use strict";

const darkmodeToggle = document.querySelector("input");
const body = document.querySelector("body");

darkmodeToggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    body.removeAttribute("data-theme", "dark");
    body.setAttribute("data-theme", "light");
  } else {
    body.removeAttribute("data-theme", "light");
    body.setAttribute("data-theme", "dark");
  }
});
