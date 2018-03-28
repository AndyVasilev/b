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
        target.style.top = 35 + "px";
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
    $('.nav_mobile').addClass('act');
    }
    else {
    $('.nav_mobile').removeClass('act');
    }
    });
    });

    // Telephone Mask on Form
  $(function(){
    $(".tel-field").mask("+7(999) 999-99-99");
  });

  // Show lists calculator
  $('.show-btn').click(function() {
    $('.calc__type_show').toggleClass("show");
    $(this).toggleClass("rotate");
  });

  // anchor

  $(document).ready(function() {
    $("a.scrollto").click(function() {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
  });



  //

  ymaps.ready(function () {
    var height=0;var width=0;

    var myMap = new ymaps.Map('map', {
            center: [59.980594, 30.322775],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'БригадуНадо',
            balloonContent: 'Выборгская набережная, 61, офис 400/3'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/svg/map.svg',
            // Размеры метки.
            iconImageSize: [57, 76],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -78]
        });

        myMap.behaviors.disable('scrollZoom');

        myMap.setCenter([59.978594, 30.322775], 16, {
            checkZoomRange: true
        });

    myMap.geoObjects
        .add(myPlacemark);
});


jQuery(document).ready(function($){
	//open popup
	$('.trigger').on('click', function(event){
		event.preventDefault();
		$('.modal').addClass('is-visible');
	});

	//close popup
	$('.modal').on('click', function(event){
		if( $(event.target).is('.close') || $(event.target).is('.modal') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
            $(this).find(".form-send__success_visible").removeClass('form-send__success_visible').addClass('form-send__success_hidden');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.modal').removeClass('is-visible');
	    }
    });

    $('#callback-form').submit(function(){
        var name = $(this).find('input[name=user_name]').val();
        var phone = $(this).find('input[name=user_phone]').val();
        var title = $(this).find('input[name=title]').val();
        if(!name || !phone) return false;
        try {
            yaCounter24554348.reachGoal('perezvonite-shapka');
        } catch(e){}
        $.ajax({
            type: "POST",
            url: "/site/submit-callback",
            dataType: 'json',
            data: {name:name,phone:phone,title:title},
            success: function () {
                $(".callback_success").addClass('form-send__success_visible').removeClass('form-send__success_hidden');
            }
        });
        return false;
    });
});


$(".tit").click(function(e) {
  $(".tit").removeClass('active');
  $(this).addClass('active');

  $('.product').removeClass('block-active');
  $($(this).attr('data-class')).addClass('block-active');
});
