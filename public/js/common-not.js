'use strict';

$(document).ready(function(){
    
    /// Animations
    setInterval(function(){
        $('.phone-number a').toggleClass('tada-number');
    }, 3500);

    // pulse
    var target = $('.big-orange-span');
    if ( target.length ){
        var targetPos = target.offset().top,
            winHeight = $(window).height(),
            scrollToElem = targetPos - winHeight;
        $(window).scroll(function(){
          var winScrollTop = $(this).scrollTop();
          if(winScrollTop > scrollToElem){
              $('.big-orange-span').addClass('span-pulse');
          }
        });
    }
    setInterval(function(){
        $('.big-orange-span').toggleClass('span-pulse');
    }, 3500);
    
    window.onload = function(){
        
        var rocket = document.getElementsByClassName('rocket-img');
        rocket.onmouseover = function(){
            rocket.addClass('fadeOutUpBig');
        };
        rocket.onmouseout = function(){
            rocket.removeClass('fadeOutUpBig');
        }
        
    };


    /// Fixed Header
    var $topBar = $(".header-mobile-nav-bar");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 20 ) {
            $topBar.addClass("floater-nav-bar");
        } else if ($(this).scrollTop() <= 20 ) {
            $topBar.removeClass("floater-nav-bar")
        }
    });


    $('.packet-text-block').click(function() {
        $(this).find('.packet-hidden-block').slideToggle('read-packet');
    });


    // Map script
    var nav = $('.show-map-button');
        nav.click(function(e) {
        
            $('.google-map-block').slideToggle('show-map');

            e.preventDefault();
            $('html, body').animate({
                scrollTop: nav.offset().top
            }, 1000);

            // console.log(nav[0].innerText);

            if (nav[0].innerText === 'Показать на карте') {
                nav[0].innerText = 'Скрыть карту';
            } else {
                nav[0].innerText = 'Показать на карте';
            }

        });


    // Mobile menu
    $('.button-nav').click(function() {
        $(this).toggleClass('active-button-nav');
        $('.hidden-menu').slideToggle('show-map');
    });
    
    $('.ancor-link').click(function() {
        $('.button-nav').removeClass('active-button-nav');
        $('.hidden-menu').slideToggle('show-map');
    });
    
    $('.modal-button').click(function() {
        $('.button-nav').removeClass('active-button-nav');
        $('.hidden-menu').slideToggle('show-map');
    });

    $('#modal-call-back').on('show.bs.modal', function(e){
        console.log(e);
        var text = '';
        if($(e.relatedTarget).hasClass('more-clients')) {
            text = 'Хотите увелить количество клиентов?';
        } else if ($(e.relatedTarget).hasClass('more-money')) {
            text = 'Хотите средний чек больше?';
        } else{
            text = 'Пожалуйста, заполните форму и мы свяжемся с вами в ближайшее время.';
        }
        $(this).find('.modal-title').text(text);
    });


    $('.wrap-menu').click(function(){
		$('.modal-menu').toggleClass('open-menu');
	});
    
    $('.modal-close').click(function(){
		$('.modal-menu').toggleClass('open-menu');
	});

    // modals
    // escape btn close opened popup
    $(document).keyup(function (e) {
        if (e.keyCode === 27) { // escape btn close opened popup
            $('.modal.show[data-backdrop="static"]').modal('hide');
        }
    });
    // on click anywhere
    $('body').on('click', '.modal.show[data-backdrop="static"]', function (e) { // on click anywhere
        if ($(e.target).is('.modal.show[data-backdrop="static"]')) {
            $(this).modal('hide');
        }
    });

    // Smooth scroll
    if (window.location.href.toString().split(window.location.host)[1] !== "/bloggers.html") {
        $("#ancor_block, #floating-navigation-block").on("click", "a", function (event) {
            event.preventDefault();

            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }

    $("#mobile-bar").on("click",".ancor-link", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 70;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    
    
    // Navigation dots
    var $menu = $("#floating-navigation-block");
    
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 600 ) {
            $menu.addClass("fixed");
        } else if ($(this).scrollTop() <= 600 ) {
            $menu.removeClass("fixed")
        }
    });
    
    
    /*var target = $('#header,#about_us,#our_advantech,#packeges,#services,#cases,#footer');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    setInterval(function(){
        $('.dotte-now').removeClass('dotte-now');
        $(window).scroll(function(){
          var winScrollTop = $(this).scrollTop();
          if(winScrollTop > scrollToElem){
            //сработает когда пользователь доскроллит к элементу с классом .elem
              if(target = $('#our_advantech')){
                  $('.a_our_advantech').addClass('dotte-now');
              }
              else if(target = $('#packeges')){
                  $('.a_packeges').addClass('dotte-now');
              }
              else if(target = $('#services')){
                  $('.a_services').addClass('dotte-now');
              }
              else if(target = $('#cases')){
                  $('.a_cases').addClass('dotte-now');
              }
              else if(target = $('#footer')){
                  $('.a_footer').addClass('dotte-now');
              }
          }
        });
    }, 1000);*/
    
    
    window.onload = function(){
        var navigateMenu = $("#floating-navigation-block"),
             activeMenu = $(".dotte-now");
        if (navigateMenu.length){
            navigateMenu.on("click", "li", function() {
                activeMenu.removeClass("dotte-now");
                activeMenu = $(this).find("a").addClass("dotte-now")
            });
            var self = $(this);
            var blocks = $.map($(".block-for-nav"), function(el) {
                return $(el).offset().top - 100
            });
            $(window).scroll(function() {
                var top = $(this).scrollTop() + $(window).height();
                var  i = blocks.reduce(function(a, b, i) {
                    return b > top ? a : i
                }, 0);
                $("li", navigateMenu).eq(i).trigger("click")
            })
        }
    }
    
    /*var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.block-for-nav').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$('.dotte-now').removeClass('dotte-now');
                
			}
		});
	});*/
    
});


// Count numbers
function countup(className){
    var countBlockTop = $("."+className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll( function (){
        if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
            show = false;

            $('.'+className).spincrement({
                from: 1,
                duration: 4000
            });
        }
    })	
}
function get_counter_value(start_value, start_date, per_days) {
  var deferred = $.Deferred();
  $.ajax({
    method: 'POST',
    url: 'https://api.zina.com.ua/current_time',
    success: function(data) {
      var current_time = new Date(data.current_time);
      var time_diff = current_time.getTime() - start_date.getTime();
      var days = Math.floor(time_diff / 1000 / 86400);
      if(days > 0) {
        if(per_days === 2) {
          days = days * 2;
        } else if(per_days === 7) {
          days = Math.floor(days / 7);
        }
        if(days < 0) {
          days = 0;
        }
        deferred.resolve(start_value + days);
      } else {
        deferred.resolve(start_value);
      }
    },
    error: function() {
      deferred.resolve(start_value);
    }
  });
  return deferred.promise();
}
$(function() {

    if ( $('.block-with-count').length ){
        var set_counters = function() {
          var start_date = new Date('2018-07-10 00:00:00.000000');
          return [
            get_counter_value(424, start_date, 1).then(function(val){
              $(".big-number1").text(val);
            }),
            get_counter_value(3300, start_date, 2).then(function(val){
              $(".big-number2").text(val);
            }),
            get_counter_value(173, start_date, 7).then(function(val){
              $(".big-number3").text(val);
            })
          ];
        };
        $.when(set_counters()).then(function(){
          countup("big-number1", $(".big-number1").text());
          countup("big-number2", $(".big-number2").text());
          countup("big-number3", $(".big-number3").text());
        });
        setInterval(set_counters, 60000);
    }
});


// Smart phone field
(function( $ ){
	
  var $body;

  $(document).ready(function(){
    $body = $('body');

    $body
      .find('.user-phone').each(function(){
          $(this).mask("+38 (999) 999-99-99", {autoсlear: false});
      });

    $body.on('keyup','.user-phone',function(){
      var phone = $(this),
          phoneVal = phone.val(),
          form = $(this).parents('form');

      if ( (phoneVal.indexOf("_") != -1) || phoneVal == '' ) {
        form.find('.btn_submit').attr('disabled',true);
      } else {
        form.find('.btn_submit').removeAttr('disabled');
      }
    });

  });

})( jQuery );


var $slides = undefined,
    interval = undefined,
    $selectors = undefined,
    $btns = undefined,
    currentIndex = undefined,
    nextIndex = undefined;

var cycle = function cycle(index) {
	var $currentSlide = undefined,
	    $nextSlide = undefined,
	    $currentSelector = undefined,
	    $nextSelector = undefined;

	nextIndex = index !== undefined ? index : nextIndex;

	$currentSlide = $($slides.get(currentIndex));
	$currentSelector = $($selectors.get(currentIndex));

	$nextSlide = $($slides.get(nextIndex));
	$nextSelector = $($selectors.get(nextIndex));

	$currentSlide.removeClass("active").css("z-index", "0");

	$nextSlide.addClass("active").css("z-index", "1");

	$currentSelector.removeClass("current");
	$nextSelector.addClass("current");

	currentIndex = index !== undefined ? nextIndex : currentIndex < $slides.length - 1 ? currentIndex + 1 : 0;

	nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(function () {
	currentIndex = 0;
	nextIndex = 1;

	$slides = $(".slide");
	$selectors = $(".selector");
	$btns = $(".btn");

	$slides.first().addClass("active");
	$selectors.first().addClass("current");

	interval = window.setInterval(cycle, 6000);

	$selectors.on("click", function (e) {
		var target = $selectors.index(e.target);
		if (target !== currentIndex) {
			window.clearInterval(interval);
			cycle(target);
			interval = window.setInterval(cycle, 6000);
		}
	});

	$btns.on("click", function (e) {
		window.clearInterval(interval);
		if ($(e.target).hasClass("prev")) {
			var target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
			cycle(target);
		} else if ($(e.target).hasClass("next")) {
			cycle();
		}
		interval = window.setInterval(cycle, 6000);
	});
  if(docCookies.hasItem('anonymous_user_uuid') === false)
  {
    docCookies.setItem('anonymous_user_uuid', uuid4(), Infinity);
  }
  $('body').on('submit', 'form.ajax', function (e) {
    var form_data = new FormData(this);
    var $form = $(this);
    if (/^https:/.test($form.attr('action')) == false ||
        $form.attr('action') === 'https://api.zina.com.ua/send_form') {
      e.preventDefault();
    }
    else {
      return true;
    }

    $form.find('[type="submit"]').prop('disabled', true);
    if($form.attr('id') === 'call-back-form') {
      gtag_report_conversion('806560465', 'AkSjCOiS94UBENHFzIAD')
    } else if($form.hasClass('contact-form') || $form.attr('id') === 'call-back-small-form') {
      gtag_report_conversion('806560465', 'w_WXCIX67IUBENHFzIAD');
    }
    // поставить именно на отправку форм по Пакетам (на кнопки) и на кнопку "Перезвоните мне" в блоке "Предложить свой вариант".
    else if($form.attr('id') === 'optimal-packet-form' || $form.attr('id') === 'all-in-packet-form' || $form.hasClass('your-proposition')) {
      gtag_report_conversion('806560465', 'QyOCCO6D7YUBENHFzIAD');
    }
    $.ajax({
      method: 'POST',
      processData: false,
      contentType: false,
      url: $form.attr('action'),
      data: form_data,
      headers: {'X-UUID': docCookies.getItem('anonymous_user_uuid')},
      success: function (data) {
        after_submit($form, data);
        var form_id = $form.attr('id');
        if (form_id) {
          $.publish('{0}_submit'.format($form.attr('id')), [$form, data]);
        }
      },
      complete: function (jqXHR, textStatus) {
        $form.find('[type="submit"]').prop('disabled', false);
      }
    });
  });
  function gtag_report_conversion(convertion_id, convertion_label) {
    goog_snippet_vars = function() {
      var w = window;
      w.google_conversion_id = convertion_id;
      w.google_conversion_label = convertion_label;
      w.google_remarketing_only = false;
    };
    goog_snippet_vars();
    window.google_conversion_format = "3";
    var conv_handler = window['google_trackConversion'];
    console && console.log('conversion handler', conv_handler);
    if (typeof(conv_handler) == 'function') {
      conv_handler({});
    }
  }

  // Конверсия для кнопок "Получить решение" в разделах Пакеты. Кнопка "Нужна помощь" в разделе услуги. Кнопки "Хочу..." в разделе Кейсы. И а*нкоры на пакеты* в разделе "Кейсы". "Обратный звонок" в шапке сайта.
  $('.one-our-packet [data-target="#modal-optimal-packet"]').click(function(){
    gtag_report_conversion('806560465', 'AkPTCNuO7YUBENHFzIAD');
  });
  $('.one-our-packet [data-target="#modal-all-in-packet"]').click(function(){
    gtag_report_conversion('806560465', 'AkPTCNuO7YUBENHFzIAD');
  });
  $('.more-clients').click(function(){
    gtag_report_conversion('806560465', 'AkPTCNuO7YUBENHFzIAD');
  });
  $('.one-case-block [data-target="#modal-optimal-packet"]').click(function(){
    gtag_report_conversion('806560465', 'AkPTCNuO7YUBENHFzIAD');
  });
  $('.header [data-target="#modal-call-back-small"]').click(function () {
    gtag_report_conversion('806560465', 'AkPTCNuO7YUBENHFzIAD');
  });


    // jcarousel autorotate & swipe (!not initialization!)
    $('.jcarousel1')
        .jcarouselAutoscroll({
            interval: 6000,
            target: '+=1',
            autostart: true,
            vertical: false
        })
        .jcarouselSwipe();

    // colorbox
    $(".jcar-cb").colorbox({rel:'jcar-cb', onLoad: function (){ colorboxResize(); }   });

    $.colorbox.settings.onLoad = function() {
        colorboxResize();
    };
    // Customize colorbox dimensions
    var colorboxResize = function(resize) {
        //var height = "90%";

        if( $(window).width() < 1340 ) {
            //width = "auto";
            var width = "90%";
            $.colorbox.settings.width = width;
        }
        if( $(window).height() > 700 ) {
            var height = "auto";
            $.colorbox.settings.height = height;
        }

        //if window is resized while lightbox open
        if(resize) {
            $.colorbox.resize({
                //'height': height,
                //'width': width
            });
        }
    };
    colorboxResize(true);
    // In case of window being resized
    $(window).resize(function() {
        colorboxResize(true);
    });
});