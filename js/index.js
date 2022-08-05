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
    window.location.href = "../pages/alarmas-smart.html";
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

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    delay: 300,
    //reset: true
});

sr.reveal('.home__data, .contact__subtitule, .contact__text',{}); 
sr.reveal('.slider__cards, .client__logo',{delay: 200}); 
sr.reveal('.form-control',{ interval: 400}); 
sr.reveal('.service__1, .contact-icon, .list-item',{interval: 200}); 
