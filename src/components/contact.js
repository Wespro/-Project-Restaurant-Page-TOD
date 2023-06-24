import "../css/contact.css";
import Phone from "../icon/icons8-phone-100.png";
import Email from "../icon/icons8-mail-200.png";
import Facebook from "../icon/icons8-facebook-200.png";
import Instgram from "../icon/icons8-instagram-200.png";

export default function ContactScreen() {
  const contactScreen = document.createElement("div");
  const contactTitle = document.createElement("h1");
  const contactInfo = document.createElement("div");
  const phone = document.createElement("div");
  const phoneH1 = document.createElement("h1");
  const phoneIcon = document.createElement("img");
  const emial = document.createElement("div");
  const emialH1 = document.createElement("h1");
  const emialIcon = document.createElement("img");
  const facbook = document.createElement("div");
  const facbookH1 = document.createElement("h1");
  const facbookIcon = document.createElement("img");
  const instgram = document.createElement("div");
  const instegramH1 = document.createElement("h1");
  const instegramIcon = document.createElement("img");
  //add classes
  contactScreen.classList.add("contactScreen");
  contactTitle.classList.add("contactTitle");
  contactInfo.classList.add("contactInfo");

  phone.classList.add("phone", "container");
  phoneH1.classList.add("phoneH1");
  phoneIcon.classList.add("phoneIcon");

  emial.classList.add("emial", "container");
  emialH1.classList.add("emialH1");
  emialIcon.classList.add("emialIcon");

  facbook.classList.add("facbook", "container");
  facbookH1.classList.add("facbookH1");
  facbookIcon.classList.add("facbookIcon");

  instgram.classList.add("instgram", "container");
  instegramH1.classList.add("instegramH1");
  instegramIcon.classList.add("instegramIcon");

  // add text
  contactTitle.innerText = `Contact`;

  phoneH1.innerText = `0X XXX XXX XXXX`;
  emialH1.innerText = `XXXXXXXXX@gmail.com`;
  facbookH1.innerText = `www.facebook.com/NoodelNeed.eg/`;
  instegramH1.innerText = `www.instagram.com/NoodelNeed/?hl=en`;

  //add src img

  phoneIcon.src = Phone;
  emialIcon.src = Email;
  facbookIcon.src = Facebook;
  instegramIcon.src = Instgram;

  //appending
  contactScreen.append(contactTitle, contactInfo);
  contactInfo.append(phone, emial, facbook, instgram);
  phone.append(phoneIcon, phoneH1);
  emial.append(emialIcon, emialH1);
  facbook.append(facbookIcon, facbookH1);
  instgram.append(instegramIcon, instegramH1);
  return contactScreen;
}
