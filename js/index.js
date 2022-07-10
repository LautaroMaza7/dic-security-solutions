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
// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });