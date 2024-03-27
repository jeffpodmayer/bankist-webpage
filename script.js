"use strict";

///////////////////////////////////////

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
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
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

//////////////////////// EVENT DELEGATION: PAGE NAVIGATION /////////////////
// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// 1. ADD EVENT LISTENER TO COMMON PARENT ELEMENT
//2. DETERMINE WHAT ELEMENT ORIGINATED THE EVENT

//EVEN DELEGATION
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

//////////////////////// TABBED COMPONENT ///////////////////////////
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);

  //Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove(`operations__tab--active`));
  tabsContent.forEach((c) => c.classList.remove(`operations__content--active`));

  // Activate Tab
  clicked.classList.add(`operations__tab--active`);

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

///////////////// MENU FADE ANIMATION  /////////////////////////////

const handleHover = function (e, opacity) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector(`.nav`);

// Passing "argument" into handler
nav.addEventListener(`mouseover`, handleHover.bind(0.5));

//  function (e) {
// if (e.target.classList.contains(`nav__link`)) {
//   const link = e.target;
//   const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
//   const logo = link.closest(`.nav`).querySelector(`img`);

//   siblings.forEach((el) => {
//     if (el !== link) el.style.opacity = 0.5;
//   });
//   logo.style.opacity = 0.5;
// }
// });

nav.addEventListener(`mouseout`, handleHover.bind(1));

// function (e) {
//   if (e.target.classList.contains(`nav__link`)) {
//     const link = e.target;
//     const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
//     const logo = link.closest(`.nav`).querySelector(`img`);

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

///////////////// APPLIED TO THE PAGE EXAMPLES /////////////////////////////
///////////////////////////  EVENT DELEGATION ///////////////////////////

// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great you are reading hte heading!`);
// };
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

//////////////////// DOM TRAVERSING ///////////////////////////
/*
const h1 = document.querySelector(`h1`);

// Going downwards: child elements
console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = `white`;
h1.lastElementChild.style.color = `orangered`;

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(`.header`).style.background = `var(--gradient-secondary)`;
h1.closest(`h1`).style.background = `var(--gradient-primary)`;

//Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = `scale(0.5)`;
});
*/
