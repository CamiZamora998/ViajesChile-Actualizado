import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

window.onscroll = function (e) {  
  var element = document.getElementById("mynav");
  if(scrollY >= 300){
      element.classList.remove("bg-opacity-75");
      element.classList.add("bg-dark");
  } else {
      element.classList.remove("bg-dark");
      element.classList.add("bg-opacity-75");
  }
} 

// Alerta
let alertContainer = document.getElementById("alertContainer");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertContainer.append(wrapper);
};

const alertTrigger = document.getElementById("alertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Mensaje enviado con éxito !!!", "success");
  });
}

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))