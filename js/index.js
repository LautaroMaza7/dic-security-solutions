function servicios() {
    window.location.href = "../pages/servicios.html";
}
function camaraswifi() {
    window.location.href = "../pages/productos-camaras-wifi.html";
}
function camarasana() {
    window.location.href = "../pages/productos-camaras-analogicas.html";
}
function alarmassmart() {
    window.location.href = "../pages/servicios.html";
}
function alarmaspro() {
    window.location.href = "../pages/productos-alarmas.html";
}
function dictecno() {
    window.location.href = "https://lau7aro-maza.github.io/DIC-Tecnology-Solutions/";
}
function facebook() {
    window.location.href = "https://facebook.com/DicSeguridad";
}
function instagram() {
    window.location.href = "https://www.instagram.com/dicsecuritysolutions/";
}
function whatsapp() {
    window.location.href = "https://api.whatsapp.com/send?phone=541164864919";
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
