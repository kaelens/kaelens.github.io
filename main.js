<script type="text/javascript">
$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});
</script>

//My failed attempt at something cool
// Wrap every letter in a span
//$('.ml1 .letters').each(function(){
//  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
//});
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.ml1 .letter',
//    scale: [0.3,1],
//    opacity: [0,1],
//    translateZ: 0,
//    easing: "easeOutExpo",
//    duration: 600,
//    delay: function(el, i) {
//      return 70 * (i+1)
//    }
//  }).add({
//    targets: '.ml1 .line',
//    scaleX: [0,1],
//    opacity: [0.5,1],
//    easing: "easeOutExpo",
//    duration: 700,
//    offset: '-=875',
//    delay: function(el, i, l) {
//      return 80 * (l - i);
//    }
//  }).add({
//    targets: '.ml1',
//    opacity: 0,
//    duration: 1000,
//    easing: "easeOutExpo",
//    delay: 1000
//  });
// I also forgot how to do multiline comments on Javascript if you cant tell oof
