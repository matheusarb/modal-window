"use strict";

// select modal, overlay, close-modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("button clicked!");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const pageDefault = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", () => pageDefault());

overlay.addEventListener("click", () => pageDefault());
