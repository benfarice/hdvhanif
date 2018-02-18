$(function() {
	function reset_comments(){
      var x = "commentIn";
     for(i=0;i<1000;i++){
     var y =   x + i ;
     var w = document.getElementById(y);
     if(w!=null){
     w.style.display = "none";   }
     }
}
$("#btn_rate_in").on('click',function() {
   
    $("#div_row_page1").fadeOut('slow', function() {
    $("#rating_div").show();
    $("#header_comments_in").fadeIn(); 
    $("#header_comments_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
     
      $(this).removeClass('animated fadeInUp');
      });
     var x = "commentIn";
     for(i=1;i<1000;i++){
    // var u = (i + 0.1) +"s" ;   
     var y =  "#" + x + i ;
     var w = $(y);
     if(w!=null){
    // $(y).css("-webkit-animation-delay",u);
     myf(y,i);
     
     $(y).addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
      });
     }
     }
   });
  });
function myf(y,i){
    var t = i*200;
    if(i==1) t=0;
   setTimeout(function(){ $(y).show(); }, t); 
}
 $( "#img_dofus_2_in" ).mouseover(function() {
          $("#dofus2_logo_in").show();
                TweenLite.to(this, 1, {css:{transform:"scale(1.2,1.2)"}});
                TweenLite.to(this, 1, {'background-blend-mode':"luminosity"});
                TweenLite.to(this, 1, {backgroundColor:"transparent"});
        });
        $( "#img_dofus_2_in" ).mouseleave(function() {
           $("#dofus2_logo_in").hide();
                 TweenLite.to(this, 1, {css:{transform:"scale(1,1)"}});
                 TweenLite.to(this, 1, {backgroundColor:"#788f92"})
                 TweenLite.to(this, 1, {'background-blend-mode':"luminosity"});
        });
         $( "#img_dofus129_in" ).mouseover(function() {
          $("#dofus129_logo_in").show();
                TweenLite.to(this, 1, {css:{transform:"scale(1.2,1.2)"}});
                TweenLite.to(this, 1, {'background-blend-mode':"luminosity"});
                TweenLite.to(this, 1, {backgroundColor:"transparent"});
        });
        $( "#img_dofus129_in" ).mouseleave(function() {
           $("#dofus129_logo_in").hide();
                 TweenLite.to(this, 1, {css:{transform:"scale(1,1)"}});
                 TweenLite.to(this, 1, {backgroundColor:"#788f92"})
                 TweenLite.to(this, 1, {'background-blend-mode':"luminosity"});
        });
      $( "#img_dofus_touch_in" ).mouseover(function() {
          $("#dofus_touch_logo_in").show();
                TweenLite.to(this, 1, {css:{transform:"scale(1.2,1.2)"}});
                TweenLite.to(this, 1, {'background-blend-mode':"luminosity"});
                TweenLite.to(this, 1, {backgroundColor:"transparent"});
        });
        $( "#img_dofus_touch_in" ).mouseleave(function() {
           $("#dofus_touch_logo_in").hide();
                 TweenLite.to(this, 1, {css:{transform:"scale(1,1)"}});
                 TweenLite.to(this, 1, {backgroundColor:"#788f92"})
                 TweenLite.to(this, 1, {'background-blend-mode':"luminosity"});
        });
});