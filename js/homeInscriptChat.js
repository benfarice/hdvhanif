$(function() {
$("#lien_rappeler_in").on('click',function() { 
	rappeler_call();
});
$("#btn_rappeler").on('click',function() { 
	rappeler_call();
});
$("#lien_chat_in").on('click',function() { 
	chat_call();
});
$("#btn_chat").on('click',function() { 
	chat_call();
});

function rappeler_call(){
	$("#rappeler_div_in").show();
 $("#rappeler_div_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
              $(this).removeClass('animated fadeInUp'); 
          });
 $("#btn_rappeler").hide();
}
function chat_call(){
	$("#chat_div_in").show();
 $("#chat_div_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
              $(this).removeClass('animated fadeInUp'); 
          });
 $("#btn_rappeler").hide();
}
$("#btn_rappeler_exit_in").on('click',function() { 

 $("#rappeler_div_in").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
              $(this).removeClass('animated fadeOutDown'); 

  });
  setTimeout(function(){$("#rappeler_div_in").hide();},500);
 // 
  $("#btn_rappeler").show();
  $("#btn_chat").show();
});
$("#btn_chat_exit_in").on('click',function() { 

 $("#chat_div_in").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
              $(this).removeClass('animated fadeOutDown'); 

  });
  setTimeout(function(){$("#chat_div_in").hide();},500);
 // 
  $("#btn_rappeler").show();
   $("#btn_chat").show();
});
// TweenLite.to(k1,1.2,{width:"100%",onComplete:myFuncPk1})

function myFunchat1(){
	$("#div_rappeler_done_in").show();
	$("#div_rappeler_done_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
              $(this).removeClass('animated fadeInUp'); 
          });
}
$("#div_rappeler_footer_in").on('click',function() { 
	TweenLite.to("#div_rappeler_body_in",0.2,{display:"none",onComplete:myFunchat1});
	TweenLite.to("#div_rappeler_footer_in",0.2,{display:"none"});
	
}); 
});