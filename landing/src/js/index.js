// Desctop hover menu 

(function () {

  var target = document.querySelector(".target");
  var links = document.querySelectorAll(".nav__link");
  var colors = ["#f5590e"];
  var active_link = document.querySelectorAll(".nav__item.active>.nav__link")[0];

  if(active_link !== undefined) {
      active_link.style.opacity = "1";

      target.style.width = active_link.getBoundingClientRect().width + "px";
      target.style.height = active_link.getBoundingClientRect().height + "px";
      target.style.left = active_link.getBoundingClientRect().left + window.pageXOffset + "px";
      target.style.top = 35 + "px";
      target.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
      target.style.transform = "none";
  }

  function mouseenterFunc() {
    if (!this.parentNode.classList.contains("active")) {
      for (var i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
        links[i].style.opacity = "0.5";
      }

      this.parentNode.classList.add("active");
      this.style.opacity = "1";

      var width = this.getBoundingClientRect().width;
      var height = this.getBoundingClientRect().height;
      var left = this.getBoundingClientRect().left + window.pageXOffset;
      var top = this.getBoundingClientRect().top + window.pageYOffset;
      var color = colors[Math.floor(Math.random() * colors.length)];

      target.style.width = width + "px";
      target.style.height = height + "px";
      target.style.left = left + "px";
      target.style.top = 35 + "px";
      target.style.borderColor = color;
      target.style.transform = "none";
    }
  }

  for (var i = 0; i < links.length; i++) {
    // links[i].addEventListener("click", function (e) {
    //   return e.preventDefault();
    // });
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }

  function resizeFunc() {
    var active = document.querySelector(".nav__link");

    if (active) {
      var left = active.getBoundingClientRect().left + window.pageXOffset;
      var top = active.getBoundingClientRect().top + window.pageYOffset;

      target.style.left = left + "px";
      target.style.top = top + "px";
    }
  }

  window.addEventListener("resize", resizeFunc);
})();

// Mobile Menu  
$(document).ready(function(){
  // menu click event
  $('.btn-menu').click(function() {
  $(this).toggleClass('act');
  if($(this).hasClass('act')) {
  $('.nav-mobile').addClass('act');
  }
  else {
  $('.nav-mobile').removeClass('act');
  }
  });
  });

  // Telephone Mask on Form
$(function(){
  $(".tel-field").mask("+7(999) 999-9999");
});

// Show lists calculator
$('.show-btn').click(function() {
  $('.calc__type_show').toggleClass("show");
  $(this).toggleClass("rotate");
});