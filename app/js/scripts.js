$(function() {
  //preloader
  $(window).on('load', function () {
      $('.preloader').fadeOut();
  });
  $('.offer__slider').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
      dots: true,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
	});
  $('.type__item-gal').owlCarousel({
      nav: true,
      items: 4,
      loop: false,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1200 : {
            items: 4
        }
      }
  });
  $('.cat__pop-slider').owlCarousel({
      nav: true,
      loop: false,
      items: 2,
      dots: false,
      center: false,
      margin: 20,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        1200 : {
            items: 2
        }
      }
  });
	// tabs 
  $(document).ready(function () {
    $(".tabs__content-item:not(:first-child)").hide();
    $(".tabs__container div.tabs__content-item.active-tab").show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  $('.tech__item').hover( function() {
    $(this).toggleClass('active');
  });
  //cat item animation
  $('.cat__item-wrp').hover( function() {
    $(this).toggleClass('active');
  });

 $('.fancybox').fancybox({
      afterClose: function () {
         $('.cat__item-wrp').removeClass('active');
      }
  });

  $('.fancybox-close-small').on('click', function () {
    $('.cat__item-wrp').removeClass('active');
  });
  //cat popup accordeon
  $('.cat__pop-acc-cnt').hide();
  $('.cat__pop-acc-btn').on('click', function () {
    $(this).toggleClass('active').siblings('.cat__pop-acc-cnt').slideToggle();
  });
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });

});