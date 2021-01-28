
$(document).ready(function() {
  $('.post').on({
    mouseenter: function(){
      $(this).removeClass('faded');
      $('.post').not(this).addClass('faded');
    },
    mouseleave: function(){
      $('.post').removeClass('faded');
    }
  });
})
