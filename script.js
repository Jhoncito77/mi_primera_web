/**
 * Scrip para visualizacion del menu responsive
 */
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".lista");
    navBar.classList.toggle("active");
};

let links_menu = document.querySelectorAll(".nav-item");

links_menu.forEach(element => {
    
element.onclick = function () {
    navBar = document.querySelector(".lista");
    navBar.classList.toggle("active");
};
});

/**
 * Scrip para validacion de formularios
 */

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});