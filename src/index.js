import "./css/index.css";

import HomeScreen from "./components/home";
import MenuScreen from "./components/menu";
import ContactScreen from "./components/contact";

(function Restaurant() {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  const footer = document.createElement("footer");
  const icons8 = document.createElement("a");

  icons8.innerText = "icons8.com";
  icons8.href = "https://icons8.com/";
  footer.innerHTML = `
  <a href="https://github.com/Wespro"> Copyright © 2023 Abdelrahman Mohammed</a>`;

  const fragment = document.createDocumentFragment();
  //taps
  const taps = document.createElement("div");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  //classes
  taps.classList.add("taps");
  home.classList.add("tap", "home");
  menu.classList.add("tap", "menu");
  contact.classList.add("tap", "contact");
  //content

  home.innerText = "HOME";
  menu.innerText = "MENU";
  contact.innerText = "CONTACT";

  //apending
  taps.append(home, menu, contact);

  home.addEventListener("click", () => {
    content.innerHTML = "";
    fragment.append(taps, HomeScreen());

    content.appendChild(fragment);
  });

  menu.addEventListener("click", () => {
    content.innerHTML = "";
    fragment.append(taps, MenuScreen());

    content.appendChild(fragment);
  });
  contact.addEventListener("click", () => {
    content.innerHTML = "";
    fragment.append(taps, ContactScreen());

    content.appendChild(fragment);
  });

  fragment.append(taps, HomeScreen());

  content.appendChild(fragment);
  footer.appendChild(icons8);
  body.appendChild(footer);
})();
