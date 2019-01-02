$(function(){
	   setInterval(function(){
	      $(".container ul").animate({marginLeft:-750},1500,function(){
		 $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
	      })
	   }, 4000);
	});
