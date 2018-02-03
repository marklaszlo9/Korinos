$(document).ready(function() {

  // NAVIGATION
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function() {
      if ($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
  // NAVIGATION END

  // SCROLL
  (function(jQuery) {
    jQuery.mark = {
      jump: function(options) {
        var defaults = {
          selector: 'a.scroll-on-page-link'
        };
        if (typeof options == 'string') {
          defaults.selector = options;
        }

        options = jQuery.extend(defaults, options);
        return jQuery(options.selector).click(function(e) {
          var jumpobj = jQuery(this);
          var target = jumpobj.attr('href');
          var thespeed = 1000;
          var offset = jQuery(target).offset().top;
          jQuery('html,body').animate({
            scrollTop: offset
          }, thespeed, 'swing');
          e.preventDefault();
        });
      }
    };
  })(jQuery);


  jQuery(function() {
    jQuery.mark.jump();
  });
  // SCROLL END

  // FADE IN
  var element = document.getElementById("js-fadeInElement");
  $(element).addClass('js-fade-element-hide');

  var element1 = document.getElementById("js-fadeInElement1");
  $(element1).addClass('js-fade-element-hide');

  var element2 = document.getElementById("js-fadeInElement2");
  $(element2).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if ($("#js-fadeInElement").length > 0) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if (elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show');
      } else if (elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });

  $(window).scroll(function() {
    if ($("#js-fadeInElement1").length > 0) {
      var elementTopToPageTop = $(element1).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if (elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element1).addClass('js-fade-element-show');
      } else if (elementTopToWindowBottom < 0) {
        $(element1).removeClass('js-fade-element-show');
        $(element1).addClass('js-fade-element-hide');
      }
    }
  });

  $(window).scroll(function() {
    if ($("#js-fadeInElement2").length > 0) {
      var elementTopToPageTop = $(element2).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if (elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element2).addClass('js-fade-element-show');
      } else if (elementTopToWindowBottom < 0) {
        $(element2).removeClass('js-fade-element-show');
        $(element2).addClass('js-fade-element-hide');
      }
    }
  });
  // FADE IN END

  // ABOUT TAB
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
  // ABOUT TAB END
  

});
