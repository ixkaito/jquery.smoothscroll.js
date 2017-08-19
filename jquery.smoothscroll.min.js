/*
 * jquery.smoothscroll.js - jQuery plugin to animate scrolling to anchor links
 * Version 1.0.3 (Aug 19, 2017)
 * Copyright 2017 Kite - https://github.com/ixkaito
 * MIT License
 */
/* eslint-disable no-var, no-invalid-this */
(function(a,b){a.fn.smoothscroll=function(d){var e={duration:400,easing:"swing",offset:0,hash:true,};var c=a.extend(true,{},e,d);return this.each(function(){a(this).on("click",function(g){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var h=this.hash;
var f=a(h);f=f.length?f:a("[name="+this.hash.slice(1)+"]");if(f.length){g.preventDefault();a("html, body").stop().animate({scrollTop:f.offset().top+c.offset,},c.duration,c.easing,function(){if(c.hash){if(history.pushState){history.pushState(null,null,h);
}else{if(0==c.offset){window.location.hash=h;}else{var i=(c.offset>0?"+":"-");window.location.hash=h+"-offset-"+i+Math.abs(c.offset);}}}f.focus();if(f.is(":focus")){return false;
}else{f.attr("tabindex","-1");f.focus();}});}}});});};})(jQuery);
