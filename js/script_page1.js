$(function() {
    
    /* _____________ */
    $("#img_dofus_2").on('click',function() {
			$("#div_game").fadeOut('slow', function() {
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
    
             $("#div_server").on('click',function() {
			$("#div_server").fadeOut('slow', function() {
             $("#div_demander").fadeIn();   
			$("#div_demander").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
         
          
        /* ------ n_icon ------ */
               $("#btn_demander").on('click',function() {
			$("#div_demander").fadeOut('slow', function() {
                $("#div_pg_in").hide();
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
    function images_load_(){
        $("#div_acheter_in").fadeIn();
        $("#div_pg_in").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeIn');
        });
         $("#div_dofus_2").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
        });
         $("#div_dofus_129").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
        });
         $("#div_dofus_touch").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
        });
          
    };

});