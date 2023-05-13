// $(document).ready(function () {
//     $(window).scroll(function () {
//       var scroll = $(window).scrollTop();
//       if (scroll > 0) {         
//         $(".navigation").addClass("add-me");
//       } else {
//         $(".navigation").removeClass("add-me");        
//       }
//     });
//   });  

// add remove class   
$(document).ready(function () {
  $(".nav-item1").click(function () {
    $(".nav-link1").addClass("active");
    $(".nav-link2").removeClass("active");
    $(".nav-link3").removeClass("active");
    $(".nav-link4").removeClass("active");
  });

  $(".nav-item2").click(function () {
    $(".nav-link1").removeClass("active");
    $(".nav-link2").addClass("active");
    $(".nav-link3").removeClass("active");
    $(".nav-link4").removeClass("active");
  });

  $(".nav-item3").click(function () {
    $(".nav-link1").removeClass("active");
    $(".nav-link2").removeClass("active");
    $(".nav-link3").addClass("active");
    $(".nav-link4").removeClass("active");
  });

  $(".nav-item4").click(function () {
    $(".nav-link1").removeClass("active");
    $(".nav-link2").removeClass("active");
    $(".nav-link3").removeClass("active");
    $(".nav-link4").addClass("active");
  });

});

// swiper slider   
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

//bottom to top button  
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// aos effect 
AOS.init({
  duration: 1500   
});