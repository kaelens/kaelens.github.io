$("#slideshow > .fade:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > .fade:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  4000);
