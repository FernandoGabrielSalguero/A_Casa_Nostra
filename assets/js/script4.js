'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector("[data-search-btn]");
  const searchContainer = document.querySelector("[data-search-container]");
  const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
  const searchCloseBtn = document.querySelector("[data-search-close-btn]");

  const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

  for (let i = 0; i < searchBoxElems.length; i++) {
    const elem = searchBoxElems[i];
    if (elem) {
      elem.addEventListener("click", function () {
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
      });
    }
  }
});



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

// ENVIAR FORMULARIO DE RESERVA POR WHATSAPP
function prepareWhatsAppMessage() {
  // Obtener los valores del formulario
  var name = encodeURIComponent(document.querySelector('input[name="name"]').value);
  var seleccionOptions = document.querySelectorAll('select[name="seleccion"] option:checked');
  
  // Obtener los valores seleccionados del elemento select
  var seleccion = Array.from(seleccionOptions).map(option => encodeURIComponent(option.value)).join(', ');

  var message = encodeURIComponent(document.querySelector('textarea[name="message"]').value);

  var whatsappMessage = "¡Hola! Quiero hacer un pedido.%0A%0A" +
      "Mi nombre es:" + name + ".Quiero pedir:" + seleccion + ". Además:" + message;

  console.log(whatsappMessage);

  window.location.href = "https://wa.me/2615172248?text=" + whatsappMessage;
}

