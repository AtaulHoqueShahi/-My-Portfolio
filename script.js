// TYPING EFFECT

const text = [
  "Web Developer",
  "Frontend Developer",
  "Designer",
  "Freelancer"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");

function typeWord() {

  if (charIndex < text[textIndex].length) {

    typing.textContent += text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWord, speed);

  }

  else {

    setTimeout(eraseWord, 1000);

  }

}

function eraseWord() {

  if (typing.textContent.length > 0) {

    typing.textContent =
      typing.textContent.slice(0, -1);

    setTimeout(eraseWord, 50);

  }

  else {

    textIndex++;

    if (textIndex >= text.length) {
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWord, 500);

  }

}

document.addEventListener("DOMContentLoaded", () => {

  if (text.length) {

    setTimeout(typeWord, 1000);

  }

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(
  ".skill-card, .project-card"
);

window.addEventListener("scroll", () => {

  cards.forEach((card) => {

    const cardTop =
      card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }

  });

});

cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";

});


// BUTTON CLICK EFFECT

const button = document.querySelector(".btn");

button.addEventListener("click", () => {

  alert(
    "Your CV download will start soon!"
  );

});


// CONTACT FORM

const form =
  document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert(
    "Message Sent Successfully!"
  );

});