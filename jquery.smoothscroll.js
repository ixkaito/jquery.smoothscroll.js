/*
 * jquery.smoothscroll.js - Animate scrolling to anchor links jQuery plugin
 * Version 1.0.0 (Aug 19, 2017)
 * Copyright 2017 Kite - https://github.com/ixkaito
 * MIT License
 */

/* eslint-disable no-var, key-spacing, no-invalid-this */
(function($, undefined) {

  'use strict';

  $.fn.smoothscroll = function(options) {

    var defaults = {
      speed:  500,
      easing: 'swing',
      hash:   true,
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
          var $target = $(hash);
          $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if ($target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').stop().animate({
              scrollTop: $target.offset().top,
            }, config.speed, config.easing, function() {
              // Callback after animation
              // Must change focus!
              $target.focus();
              if ($target.is(':focus')) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
              // Add the target hash to the end of the URL
              if (config.hash) {
                window.location.hash = hash;
              }
            });
          }
        }
      });
    });

  };

})(jQuery);
