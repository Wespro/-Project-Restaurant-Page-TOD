import "../css/menu.css";
import Noodle1 from "../imgs/dishes/Bowl_of_kesme_2.jpg";
import Noodle2 from "../imgs/dishes/Mi_ayam_jamur.JPG";
import Noodle3 from "../imgs/dishes/Yakamein_(aka_old_sober)_red_bowl.jpg";
import Noodle4 from "../imgs/dishes/Mi_Quang_1A_Danang.jpg";
import Noodle5 from "../imgs/dishes/330px-Khow_suey.jpg";
import Noodle6 from "../imgs/dishes/Laghman .jpg";

export default function menuScreen() {
  //menuScreen
  const menuScreen = document.createElement("div");
  menuScreen.classList.add("menuScreen");

  //header side
  const menuTitle = document.createElement("div");
  const menuH1 = document.createElement("h1");

  //add classes

  menuTitle.classList.add("menuTitle");
  menuH1.classList.add("menuH1");

  //add inner text
  menuH1.innerText = `MENU `;

  //   const homeImg = document.createElement("img");
  //   const homeImg2 = document.createElement("img");
  //   homeImg.classList.add("homeImg");
  //   homeImg2.classList.add("homeImg2");
  //   //add imgs links
  //   homeImg.src = `${HomeImg}`;
  //   homeImg2.src = `${HomeImg2}`;
  ////////////////////////////////////////////////////////////////////////////////////////////
  // Menu Body
  const menuBody = document.createElement("div");

  const noodels = document.createElement("h1");
  const noodelsContainer = document.createElement("div");

  const noodel1 = document.createElement("div");
  const noodel1Name = document.createElement("h1");
  const noodel1Container = document.createElement("div");
  const noodel1Price = document.createElement("h1");
  const noodel1img = document.createElement("img");

  const noodel2 = document.createElement("div");
  const noodel2Name = document.createElement("h1");
  const noodel2Container = document.createElement("div");
  const noodel2Price = document.createElement("h1");
  const noodel2img = document.createElement("img");

  const noodel3 = document.createElement("div");
  const noodel3Name = document.createElement("h1");
  const noodel3Container = document.createElement("div");
  const noodel3Price = document.createElement("h1");
  const noodel3img = document.createElement("img");

  const noodel4 = document.createElement("div");
  const noodel4Name = document.createElement("h1");
  const noodel4Container = document.createElement("div");
  const noodel4Price = document.createElement("h1");
  const noodel4img = document.createElement("img");

  const noodel5 = document.createElement("div");
  const noodel5Name = document.createElement("h1");
  const noodel5Container = document.createElement("div");
  const noodel5Price = document.createElement("h1");
  const noodel5img = document.createElement("img");

  const noodel6 = document.createElement("div");
  const noodel6Name = document.createElement("h1");
  const noodel6Container = document.createElement("div");
  const noodel6Price = document.createElement("h1");
  const noodel6img = document.createElement("img");
  //add clases
  menuBody.classList.add("menuBody");

  noodels.classList.add("noodels");

  noodelsContainer.classList.add("noodelsContainer");

  noodel1.classList.add("noodel1", "noodle");
  noodel1Name.classList.add("noodel1Name");
  noodel1Container.classList.add("noodel1Container", "noodelContainer");
  noodel1Price.classList.add("noodel1Price", "noodelPrice");
  noodel1img.classList.add("noodel1img");

  noodel2.classList.add("noodel2", "noodle");
  noodel2Name.classList.add("noodel2Name");
  noodel2Container.classList.add("noodel2Container", "noodelContainer");
  noodel2Price.classList.add("noodel2Price", "noodelPrice");
  noodel2img.classList.add("noodel2img");

  noodel3.classList.add("noodel3", "noodle");
  noodel3Name.classList.add("noodel3Name");
  noodel3Container.classList.add("noodel3Container", "noodelContainer");
  noodel3Price.classList.add("noodel3Price", "noodelPrice");
  noodel3img.classList.add("noodel3img");

  noodel4.classList.add("noodel4", "noodle");
  noodel4Name.classList.add("noodel4Name");
  noodel4Container.classList.add("noodel4Container", "noodelContainer");
  noodel4Price.classList.add("noodel4Price", "noodelPrice");
  noodel4img.classList.add("noodel4img");

  noodel5.classList.add("noodel5", "noodle");
  noodel5Name.classList.add("noodel5Name");
  noodel5Container.classList.add("noodel5Container", "noodelContainer");
  noodel5Price.classList.add("noodel5Price", "noodelPrice");
  noodel5img.classList.add("noodel5img");

  noodel6.classList.add("noodel6", "noodle");
  noodel6Name.classList.add("noodel6Name");
  noodel6Container.classList.add("noodel6Container", "noodelContainer");
  noodel6Price.classList.add("noodel6Price", "noodelPrice");
  noodel6img.classList.add("noodel6img");

  //add innertext
  noodels.innerText = `Noodels`;

  noodel1Name.innerText = `Kesme`;
  noodel1Price.innerText = `10.50$`;

  noodel2Name.innerText = ` Mie ayam`;
  noodel2Price.innerText = `13.50$`;

  noodel3Name.innerText = `Yaka mein`;
  noodel3Price.innerText = `14.50$`;

  noodel4Name.innerText = `Mì Quảng`;
  noodel4Price.innerText = `16.50$`;

  noodel5Name.innerText = `Khow suey`;
  noodel5Price.innerText = `20.50$`;

  noodel6Name.innerText = `Laghman`;
  noodel6Price.innerText = `22.50$`;

  //add links
  noodel1img.src = Noodle1;
  noodel2img.src = Noodle2;
  noodel3img.src = Noodle3;
  noodel4img.src = Noodle4;
  noodel5img.src = Noodle5;
  noodel6img.src = Noodle6;

  //appending

  menuScreen.append(menuTitle, menuBody);

  menuTitle.append(menuH1);

  menuBody.append(noodels, noodelsContainer);

  noodelsContainer.append(noodel1, noodel2, noodel3, noodel4, noodel5, noodel6);

  noodel1.append(noodel1Name, noodel1Container);
  noodel2.append(noodel2Name, noodel2Container);
  noodel3.append(noodel3Name, noodel3Container);
  noodel4.append(noodel4Name, noodel4Container);
  noodel5.append(noodel5Name, noodel5Container);
  noodel6.append(noodel6Name, noodel6Container);

  noodel1Container.append(noodel1img, noodel1Price);
  noodel2Container.append(noodel2img, noodel2Price);
  noodel3Container.append(noodel3img, noodel3Price);
  noodel4Container.append(noodel4img, noodel4Price);
  noodel5Container.append(noodel5img, noodel5Price);
  noodel6Container.append(noodel6img, noodel6Price);
  return menuScreen;
}
