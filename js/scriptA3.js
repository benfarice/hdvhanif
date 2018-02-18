$(function() {
    
    /* _____________ */
    $("#img_dofus_2").on('click',function() {
			$("#div_game").fadeOut('slow', function() {
              //  alert("serveur");
             $("#div_server").fadeIn();   
			$("#div_server").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
            $("#img_dofus129").on('click',function() {
			$("#div_game").fadeOut('slow', function() {
             $("#div_server").fadeIn();   
			$("#div_server").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
         $("#img_dofus_touch").on('click',function() {
			$("#div_game").fadeOut('slow', function() {
             $("#div_server").fadeIn();   
			$("#div_server").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
    /*
    .live('click', function()
           
        $(".yourButtonClass").on('click', function(event){
        $(".addproduct").unbind().click(function(){
           $(".n_icon").unbind().click(function(){
			$("#div_server").fadeOut('slow', function() {
             $("#div_demander").fadeIn();   
			$("#div_demander").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
        */
    function demander_done_animation(){
          $("#div_demander").fadeIn();   
			$("#txt_emander_title").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
        $("#de_d_1").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
        $("#de_d_2").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
         $("#de_d_3").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
         $("#salouti").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
    }
             $("#div_server").on('click',function() {
			$("#div_server").fadeOut('slow', function() {
               // alert("here");
           demander_done_animation();
		});
		});
         
          
        /* ------ n_icon ------ */
               $("#btn_demander").on('click',function() {
			$("#div_demander").fadeOut('slow', function() {
                $("#div_pg_in").hide();
               // alert("here");
               $("#div_pg_in_txt_home").hide();
             $("#div_done").fadeIn();   
			$("#div_done").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
        $( "#img_dofus_2" ).mouseover(function() {
          $("#dofus2_logo").show();
        });
        $( "#img_dofus_2" ).mouseleave(function() {
           $("#dofus2_logo").hide();
        });
         $( "#img_dofus129" ).mouseover(function() {
          $("#dofus129_logo").show();
        });
        $( "#img_dofus129" ).mouseleave(function() {
           $("#dofus129_logo").hide();
        });
      $( "#img_dofus_touch" ).mouseover(function() {
          $("#dofus_touch_logo").show();
        });
        $( "#img_dofus_touch" ).mouseleave(function() {
           $("#dofus_touch_logo").hide();
        });
    
      $("#btn_home_in_acheter").on('click',function() {
          
          $("#div_home_in").hide();
          $("#div_fb_rat").hide();
        	$("#div_row_page1").fadeOut('slow', function() {
           // alert("here");///--   
		  images_load_();
		});
		});
     $("#btn_home_in_vendre").on('click',function() {
            $("#div_home_in").hide();
             $("#div_fb_rat").hide();
			$("#div_row_page1").fadeOut('slow', function() {
               
		  images_load_();
		});
		});
      $("#lien_acheter_in").on('click',function() {
         // alert("here");//-----------------
          
          $("#rating_div").fadeOut('slow',function(){
            $("#div_home_in").hide();
             $("#div_fb_rat").hide();
            $("#div_row_page1").fadeOut('slow', function() {
               
          images_load_();
            });
          });
        });
        $("#lien_vendre_in").on('click',function() {
           
          $("#rating_div").fadeOut('slow',function(){
            $("#div_home_in").hide();
             $("#div_fb_rat").hide();
            $("#div_row_page1").fadeOut('slow', function() {
               
          images_load_();
            });
          });
        });
     $("#In_circle_1").on('click',function() {
            $("#div_home_in").hide();
             $("#div_fb_rat").hide();
            $("#div_row_page1").fadeOut('slow', function() {
               
          images_load_();
        });
        });
  var m1 = $("#in_l1");  
 var m2 = $("#in_l2"); 
 var m3 = $("#in_l3");  
 var m4 = $("#in_l4"); 
function myFun_return1(){
    TweenLite.to(m1,0.3,{width:"0%"});
}
function myFun_return2(){
    TweenLite.to(m3,0.3,{width:"0%"});
}
      function reset_servers(){
    var x = "server_n";
     for(i=0;i<1000;i++){
     var y =   x + i ;
     var w = document.getElementById(y);
     if(w!=null){
     w.style.display = "none";   }
     }
}
 function images_load_(){
            
       // $("#backgrounde_demander_login").hide();
        //alert("here image load");//----------------
        $("#div_server").hide();
        reset_servers();
        $("#In_circle_1").css("background-color","#FFFFFF");
        $("#game_pg_txt_home").css("color","#12c18b"); 
        $("#In_circle_1").html("");
        $("#In_circlep2").css("background-color","#FFFFFF");
        $("#server_pg_txt_home p").css("color","#727E7F"); 
        //  
        $("#progress_acheter_txt_home").css("color","#727E7F"); 
        $("#In_circlep2").html("");
        $("#in_circlep3").css("background-color","#FFFFFF");
        $("#in_circlep3").html("");
        $("#In_circlep2").css('border-color', "#c2c1c3");
        $("#in_circlep3").css('border-color', "#c2c1c3");
        
         TweenLite.to(m2,1.2,{width:"0%",onComplete:myFun_return1})
         TweenLite.to(m4,1.2,{width:"0%",onComplete:myFun_return2})
        //TweenLite.to(k1,0.1,{width:"0%",onComplete:myFuncPk_load_1})
        $("#div_server").hide();
        $("#div_demander").hide();
        $("#div_done").hide();
        $("#rating_div").hide();
        $("#div_pg_in").hide();
        $("#div_pg_in_txt_home").hide();
        $(".salam").hide();
       // alert("hide");
         $("#div_dofus_2_in").hide();
        $("#div_dofus_129_in").hide();
        $("#div_dofus_touch_in").hide();
        $("#div_acheter_in").fadeIn('fast',function(){
            $("#div_pg_in").show();
             $("#div_pg_in").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeIn');
               // $("#div_pg_in_txt").show();
            // $("#div_pg_in_txt").fadeIn('slow',function(){
        $("#div_pg_in_txt_home").fadeIn('slow',function(){
          //  alert("it fade in");
             $("#div_game_in").show();     
        $("#div_dofus_2_in").show();
        $("#div_dofus_129_in").show();
        $("#div_dofus_touch_in").show();
        $("#div_dofus_2_in").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
        });
         $("#div_dofus_129_in").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
        });
         $("#div_dofus_touch_in").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
             $(".salam").fadeIn('slow');
       // });
        });
        });
       
        });
        });
       // 
       
       
            
       
          
    };

});