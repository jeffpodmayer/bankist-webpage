"use strict";

///////////////////////////////////////
////////////////////////////  EVENT DELEGATION ///////////////////////////

// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great you are reading hte heading!`);
// };

//////////////////////// MODAL WINDOW //////////////////////////
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////// SMOOTH SCROLLING ///////////////////////////
btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();

  //SCROLLING
  // window.scrollTo(
  //   s1coords.left + pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  //MORE MODERN WAY TO SCROLL
  section1.scrollIntoView({ behavior: `smooth` });
});

//////////////////////// PAGE NAVIGATION //////////////////////////
document.querySelectorAll(`.nav__link`).forEach(function (el) {
  el.addEventListener(`click`, function (e) {
    e.preventDefault();
    const id = this.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  });
});

///////////////// APPLIED TO THE PAGE EXAMPLES /////////////////////////////
////////////////////////////    EVENTS   ///////////////////////////
// const h1 = document.querySelector(`h1`);

// const alertH1 = function (e) {
//   alert(`addEventListener: Great you are reading hte heading!`);
//   h1.removeEventListener(`mouseenter`, alertH1);
// };

// h1.addEventListener(`mouseenter`, alertH1);

// setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 3000);

////////////////////////////  EVENT PROPOGATION ///////////////////////////
///// STLYING THE NAV BAR
//rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(`.nav`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });
//////////////////////////////////////// REFERENCE ///////////////////////
//////////////////////////////////////// LESSONS /////////////////////////
///////////////////// SELECTING ELEMENTS /////////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`);
const allSections = document.querySelectorAll(`.section`);
console.log(allSections);

document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`));

/////////////////////////// CREATING AND INSERTING ELEMENTS ////////////
//.insertAdjacentHTML
const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
message.textContent = `We use cookies for improved functionaity and analytics.`;
message.innerHTML = `We use cookies for improved functionaity and analytics.<button class="btn btn--close-cookie"> Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//////////////////////////// DELETE ELEMENTS /////////////////////
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });

//////////////////// STYLES /////////////////////////////
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

// document.documentElement.style.setProperty(`--color-primary`, "orangered");

//////////////////// ATTRIBUTES ///////////////////////////
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = `Beautiful minimlaist logo`;

//NOn-STANDARD
console.log(logo.designer);
console.log(logo.getAttribute(`designer`));
logo.setAttribute(`company`, `Bankist`);

console.log(logo.src);
console.log(logo.getAttribute(`src`));

const link = document.querySelector(`.twitter-link`);
console.log(link.href);
console.log(link.getAttribute(`href`));

//// DATA ATTRIBUTES
console.log(logo.dataset.versionNumber);

//// CLASSES
logo.classList.add(`c`, `j`);
logo.classList.remove(`c`, `j`);
logo.classList.toggle(`c`, `j`);
logo.classList.contains(`c`, `j`);

// DON'T USE!!!! -> Overrides all classes
logo.className = `jonas`;
