/**
 * @license
 * jquery.smoothscroll.js - jQuery plugin to animate scrolling to anchor links
 * Version 1.0.4 (Aug 19, 2017)
 * Copyright 2017 Kite - https://github.com/ixkaito
 * MIT License
 */
(function($, undefined) {

  'use strict';

  $.fn.smoothscroll = function(options) {

    var defaults = {
      duration:  400,
      easing: 'swing',
      offset: 0,
      hash: true,
      focus: true,
    };

    var config = $.extend(true, {}, defaults, options);

    return this.each(function() {
      $(this).on('click', function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var hash = this.hash;
          var $target = hash ? $(hash) : $('html');
          $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if ($target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').stop().animate({
              scrollTop: $target.offset().top + config.offset,
            }, config.duration, config.easing, function() {
              // Callback after animation
              // Add the target hash to the end of the URL
              if (config.hash) {
                if (history.pushState) {
                  history.pushState(null, null, hash);
                } else if (0 == config.offset) {
                  window.location.hash = hash;
                } else { // Fallback on old browsers without history API.
                  var operator = (config.offset > 0 ? '+' : '-');
                  window.location.hash = hash + '-offset-' + operator + Math.abs(config.offset);
                }
              }
              if (config.focus) {
                // Must change focus!
                $target.focus();
                if ($target.is(':focus')) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            });
          }
        }
      });
    });

  };

})(jQuery);
