/**
 * @license
 * jquery.smoothscroll.js - jQuery plugin to animate scrolling to anchor links
 * Version 1.0.4 (Aug 19, 2017)
 * Copyright 2017 Kite - https://github.com/ixkaito
 * MIT License
 */
(function($,undefined){"use strict";$.fn.smoothscroll=function(options){var defaults={duration:400,easing:"swing",offset:0,hash:true,focus:true};var config=$.extend(true,{},defaults,options);return this.each(function(){$(this).on("click",function(event){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var hash=this.hash;var $target=hash?$(hash):$("html");$target=$target.length?$target:$("[name="+this.hash.slice(1)+"]");if($target.length){event.preventDefault();$("html, body").stop().animate({scrollTop:$target.offset().top+config.offset},config.duration,config.easing,function(){if(config.hash){if(history.pushState){history.pushState(null,null,hash)}else if(0==config.offset){window.location.hash=hash}else{var operator=config.offset>0?"+":"-";window.location.hash=hash+"-offset-"+operator+Math.abs(config.offset)}}if(config.focus){$target.focus();if($target.is(":focus")){return false}else{$target.attr("tabindex","-1");$target.focus()}}})}}})})}})(jQuery);