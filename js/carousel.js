// Owlcarousel
$(document).ready(function(){
    $("#slider .owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:2000,
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

    $('#client .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:5
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })

    $('#alarmas-dispositivos .owl-carousel').owlCarousel({
        loop:true,
        margin:-100,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2.5
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

  });
