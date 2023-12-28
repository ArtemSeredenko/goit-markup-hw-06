let menuBtn = document.querySelector(".burger-btn");
let menu = document.querySelector(".mobile-menu");
let menuItem = document.querySelectorAll(".close-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });

  menuItem.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
}

let modalOpenBtn = document.querySelector(".hero-button");
let modal = document.querySelector(".backdrop");
let modalCloseBtn = document.querySelector(".modal-btn");

if (modalOpenBtn && modalCloseBtn && modal) {
  modalOpenBtn.addEventListener("click", function () {
    modal.classList.add("is-open");
  });

  modalCloseBtn.addEventListener("click", function () {
    modal.classList.remove("is-open");
  });
}
