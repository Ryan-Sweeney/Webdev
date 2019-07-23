(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// var instance = M.Carousel.init({
//   fullWidth: true,
//   indicators: true
// });

// init with jquery
// carousel slider
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true,
  dist: 0,
  duration: 200,
});

// modal button init
$(document).ready(function(){
  $('.modal').modal();
});

// modal init 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});
     
// carousel slider  
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });
   
// slider init streaming section 
$(document).ready(function(){
  $('.slider').slider();
});
      


