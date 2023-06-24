import "../css/home.css";
//topSide imgs
import HomeImg from "../imgs/pexels-cats-coming-1907229.jpg";
import HomeImg2 from "../imgs/pexels-rdne-stock-project-6646208.jpg";
import todaysOfferImg1 from "../imgs/pexels-jan-n-g-u-y-e-n-🍁-2591594.jpg";
//Today's offer img

export default function homeScreen() {
  //homescreen
  const homeScreen = document.createElement("div");
  homeScreen.classList.add("homeScreen");

  //middle sile
  const topSide = document.createElement("div");
  const titleContainer = document.createElement("div");
  const restaurantTitle = document.createElement("h1");
  const restaurantSolgan = document.createElement("h2");
  const imgContainer = document.createElement("div");
  const homeImg = document.createElement("img");
  const homeImg2 = document.createElement("img");

  //add classes
  topSide.classList.add("topSide");

  titleContainer.classList.add("titleContainer");
  restaurantTitle.classList.add("restaurantTitle");
  restaurantSolgan.classList.add("restaurantSolgan");

  imgContainer.classList.add("imgContainer");
  homeImg.classList.add("homeImg");
  homeImg2.classList.add("homeImg2");

  //add inner text
  restaurantTitle.innerText = `Noodely Need `;
  restaurantSolgan.innerText = `"A Cultrural 'Tasty' Adventure"`;
  //add imgs links
  homeImg.src = `${HomeImg}`;
  homeImg2.src = `${HomeImg2}`;
  ////////////////////////////////////////////////////////////////////////////////////////////
  // rightside
  const midSide = document.createElement("div");

  const aboutNoodely = document.createElement("div");
  const aboutNoodelyH1 = document.createElement("h1");
  const aboutNoodelyH3 = document.createElement("h3");

  const todaysOffer = document.createElement("div");
  const todaysOfferH1 = document.createElement("h1");
  const todaysOfferName = document.createElement("h2");
  const offerContainer = document.createElement("div");
  const offerContainerH1 = document.createElement("h1");
  const offerContainerImg = document.createElement("img");
  //add clases
  midSide.classList.add("midSide");

  aboutNoodely.classList.add("aboutNoodely");
  aboutNoodelyH1.classList.add("aboutNoodelyH1");
  aboutNoodelyH3.classList.add("aboutNoodelyH3");

  todaysOffer.classList.add("todaysOffer");
  todaysOfferH1.classList.add("todaysOfferH1");
  todaysOfferName.classList.add("todaysOfferName");
  offerContainer.classList.add("offerContainer");
  offerContainerH1.classList.add("offerContainerH1");
  offerContainerImg.classList.add("offerContainerImg");
  //add innertext

  aboutNoodelyH1.innerText = `A Cultrural 'Tasty' Adventure `;
  aboutNoodelyH3.innerText = `Noodely Need takes you far away from your every day food and introduce to you a different taste a different cultural taste.`;

  todaysOfferH1.innerText = "Today's Special Offer:";
  todaysOfferName.innerText = "Ranchy Noodels:";
  offerContainerH1.innerText = `15.50$`;

  //add links
  offerContainerImg.src = todaysOfferImg1;
  ////////////////////////////////////////////////////////////////////////////////////////////
  //left side
  const botSide = document.createElement("div");

  const workingHours = document.createElement("div");
  const workingHoursH1 = document.createElement("h1");
  const workingHoursP1 = document.createElement("p");
  const workingHoursP2 = document.createElement("p");

  const location = document.createElement("div");
  const locationH1 = document.createElement("h1");
  const locationH3 = document.createElement("h3");

  //add clases
  botSide.classList.add("botSide");

  workingHours.classList.add("workingHours");
  workingHoursH1.classList.add("workingHoursH1");
  workingHoursP1.classList.add("workingHoursP1");
  workingHoursP2.classList.add("workingHoursP2");

  location.classList.add("location");
  locationH1.classList.add("locationH1");
  locationH3.classList.add("locationH3");

  //add text
  workingHoursH1.innerText = `working Hours :`;
  workingHoursP1.innerText = `Sunday-Thursday: 8 am - 11 pm`;
  workingHoursP2.innerText = `Saterday: 12 pm - 10 pm`;

  locationH1.innerText = `Location :`;
  locationH3.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae.`;
  //appending
  homeScreen.append(topSide, midSide, botSide);

  topSide.append(titleContainer, imgContainer);
  titleContainer.append(restaurantTitle, restaurantSolgan);
  imgContainer.append(homeImg, homeImg2);

  midSide.append(aboutNoodely, todaysOffer);
  aboutNoodely.append(aboutNoodelyH1, aboutNoodelyH3);
  todaysOffer.append(todaysOfferH1, todaysOfferName, offerContainer);
  offerContainer.append(offerContainerImg, offerContainerH1);

  botSide.append(location, workingHours);
  workingHours.append(workingHoursH1, workingHoursP1, workingHoursP2);
  location.append(locationH1, locationH3);

  return homeScreen;
}
