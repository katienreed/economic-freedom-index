// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require d3
//= require topojson


(function($) {
  $(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
        $('#social').fadeIn(1000);
      } else {
        $('#social').fadeOut(1000);
      }
    });
  });
})(jQuery);
(function($) {
  $(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
        $('#social2').fadeIn(1000);
      } else {
        $('#social2').fadeOut(1000);
      }
    });
  });
})(jQuery);
(function($) {
  $(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
        $('#social3').fadeIn(1000);
      } else {
        $('#social3').fadeOut(1000);
      }
    });
  });
})(jQuery);
