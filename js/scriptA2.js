$(function() { 
  function images_load_(){
            
       // $("#backgrounde_demander_login").hide();
        $("#div_server").hide();
        $("#In_circle_1").css("background-color","#FFFFFF");
       // $("#server_pg_txt").css("color","#000000"); 
        $("#In_circle_1").html("");
        $("#In_circlep2").css("background-color","#FFFFFF");
        //$("#login_pg_txt").css("color","#000000"); 
        $("#In_circlep2").html("");
        $("#in_circlep3").css("background-color","#FFFFFF");
        $("#in_circlep3").html("");
        // TweenLite.to(k3,1.2,{width:"0%",onComplete:myFuncPd1_LOAD})
        //TweenLite.to(k3,0.1,{width:"0%",onComplete:myFuncPk3_load})
        //TweenLite.to(k1,0.1,{width:"0%",onComplete:myFuncPk_load_1})
       // $("#div_demander_login").hide();
       // $("#div_demande_signup").hide();
       // $("#div_demande_checkmail").hide();
      //  $("#div_demande_signin").hide();
        $("#div_pg_in").hide();
       // $(".salam").hide();
    //  alert("hide");
      //  $("#div_pg_in_txt").hide();
         $("#div_dofus_2_in").hide();
        $("#div_dofus_129_in").hide();
        $("#div_dofus_touch_in").hide();
        $("#div_acheter_in").fadeIn('fast',function(){
            $("#div_pg_in").show();
             $("#div_pg_in").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeIn');
               // $("#div_pg_in_txt").show();
            // $("#div_pg_in_txt").fadeIn('slow',function(){
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
       // });
        });
        });
        });
       // 
       
       
            
       
          
    };
//var is_image_clicked = false;//--
    var m3 = $("#in_l3");  
    var m4 = $("#in_l4"); 
    function myFun_return2(){
    TweenLite.to(m3,0.3,{width:"0%"});
}
   function afficher_servers(){
    $("#in_circlep3").css('border-color', "#c2c1c3");
    $("#progress_acheter_txt_home").css("color","#727E7F"); 
    TweenLite.to(m4,1.2,{width:"0%",onComplete:myFun_return2});
    $("#div_done").hide();
    $("#div_demander").hide();
    $("#div_server").show();
    $("#div_prix_region").fadeIn(); 
    $("#div_prix_region").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
     
      $(this).removeClass('animated fadeInUp');
      });
    var x = "server_n";
     for(i=0;i<1000;i++){
     var y = "#"+  x + i ;
     var w = $(y);
     if(w!=null){
     myserver(y,i);
     $(y).addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
      });
         if ($(y).find(".n_icon").is(':contains("Stock")'))
      {
         $(y).css('outline',"thin solid #C11243");
       }
     }
     }
}
    function myserver(y,i){
    var t = i*200;
    if(i==1) t=0;
   setTimeout(function(){ $(y).show(); }, t); 
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
var done_icon ="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"img_done\" name=\"img_done\" x=\"0px\" y=\"0px\" viewBox=\"0 0 52 52\" style=\"enable-background:new 0 0 52 52;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"> <path d=\"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26  S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z\" fill=\"#12C18B\"/><path d=\"M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406   l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   C39.251,14.885,38.62,14.922,38.252,15.336z\" fill=\"#FFFFFF\"/>  </svg>";

var k1 = $("#in_l1");
var k2 = $("#in_l2");
var k3 = $("#in_l3");
var k4 = $("#in_l4");
function myFuncPk1(){
        TweenLite.to(k2,0.3,{width:"100%",onComplete:myFuncPk2})
    }
function myFuncPk2(){
        $("#In_circlep2").css('border-color', "#12c18b");
    }
   function myFuncPk3(){
        TweenLite.to(k4,1.2,{width:"100%",onComplete:myFuncPk4})
    }
     function myFuncPk4(){
        $("#in_circlep3").css('border-color', "#12c18b");
    }
$("#img_dofus_2_in").on('click',function() {
      //alert("s");//----------
			$("#div_game_in").fadeOut('slow', function() {
            // $("#div_server").fadeIn();  
        $("#In_circle_1").css("background-color","#12c18b");
        $("#server_pg_txt_home p").css("color","#12c18b");
       // $("#server_pg_txt").css("color","#12c18b"); 
        $("#In_circle_1").html(done_icon);
        TweenLite.to(k1,1.2,{width:"100%",onComplete:myFuncPk1})
         $("#In_circlep2").css("cursor", "pointer"); 
			/*$("#div_server").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });*/
                
		});
           afficher_servers();
		});
            $("#img_dofus129_in").on('click',function() {
                // alert("s");
			$("#div_game_in").fadeOut('slow', function() {
             //$("#div_server").fadeIn();   
              $("#In_circle_1").css("background-color","#12c18b");
              $("#server_pg_txt_home p").css("color","#12c18b");
       // $("#server_pg_txt").css("color","#12c18b"); 
        $("#In_circle_1").html(done_icon);
        TweenLite.to(k1,1.2,{width:"100%",onComplete:myFuncPk1})
         $("#In_circlep2").css("cursor", "pointer"); 
			/*$("#div_server").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });*/
               
		});
                 afficher_servers();
		});
    
     $("#In_circlep2").on('click',function() {
         reset_servers();
         afficher_servers();
     });
         $("#img_dofus_touch_in").on('click',function() {
              //alert("s");
			$("#div_game_in").fadeOut('slow', function() {
            // $("#div_server").fadeIn();  
       $("#In_circle_1").css("background-color","#12c18b");
       $("#server_pg_txt_home p").css("color","#12c18b");
       // $("#server_pg_txt").css("color","#12c18b"); 
        $("#In_circle_1").html(done_icon);
        TweenLite.to(k1,1.2,{width:"100%",onComplete:myFuncPk1})
         $("#In_circlep2").css("cursor", "pointer");  
			/*$("#div_server").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });*/
               afficher_servers();
              //  alert("this one");
		});
		});
          $("#div_server").on('click',function() {
           // alert("i m here");
			$("#div_server").fadeOut('slow', function() {
             $("#div_demander_login").fadeIn(); 
         $("#In_circlep2").css("background-color","#12c18b");
        $("#progress_acheter_txt_home").css("color","#12c18b"); 
        $("#In_circlep2").html(done_icon);
        TweenLite.to(k3,1.2,{width:"100%",onComplete:myFuncPk3})  
			$("#div_demander_login").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
          $("#lien_demande_signup").on('click',function() {
			$("#div_demande_signin").fadeOut('slow', function() {
             $("#div_demande_signup").fadeIn();   
			$("#div_demande_signup").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
              $("#lien_demander__signin").on('click',function() {
			$("#div_demande_signup").fadeOut('slow', function() {
             $("#div_demande_signin").fadeIn();   
			$("#div_demande_signin").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
      
        
    /* ========= !!!! ========== */
      $("#btn_demande_signup").on('click',function() {
			$("#div_demander_login").fadeOut('slow', function() {
             $("#div_demande_signup").fadeIn();   
			$("#div_demande_signup").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
      $("#btn_demander_sign_up").on('click',function() {
			$("#div_demande_signup").fadeOut('slow', function() {
             $("#div_demande_checkmail").fadeIn();   
			$("#div_demande_checkmail").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
		});
		});
      $("#btn_demande_signin").on('click',function() {
			$("#div_demander_login").fadeOut('slow', function() {
             $("#div_demande_signin").fadeIn();   
			$("#div_demande_signin").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
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
          $("#lien_acheter").on('click',function() {
            reset_comments();
             $("#rating_div").hide();
			       $("#div_row").fadeOut('slow', function() {

              images_load_();
              
		  
		});
		});
          $("#lien_chat").on('click',function() {
              $("#div_chat").show();
              $("#div_chat").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
        });
		});
            function reset_comments(){
      var x = "commentIn";
     for(i=0;i<1000;i++){
     var y =   x + i ;
     var w = document.getElementById(y);
     if(w!=null){
     w.style.display = "none";   }
     }
}
     /*   function images_load_(){
         $("#div_acheter_in").show();
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
          
    };*/
      $(".table-hover>tbody>tr").mouseover(function() {
        
         // alert("mouseover");
           if ($(this).find(".n_icon").is(':contains("Stock")'))
          {
              $(this).css("background-color","#F7F6F6");
                $(this).find(".n_icon").html(stock_complet_red);
              $(this).find(".prix").css("color", "#727E7F");
              
               $(this).css("cursor", "default");
             $(this).find(".div_server_hell").css("color", "#727E7F");
             $(this).find('td').css('border-color', "#C11243");
             $(this).find('th').css('border-color', "#C11243");
          }else{
              
               $(this).find(".n_icon").html(next_icon_white);
           $(this).find(".prix").css("color", "#FFF");
           $(this).find(".div_server_hell").css("color", "#FFF");
             $(this).find('td').css('border-color', "#12C18B");
             $(this).find('th').css('border-color', "#12C18B");
          }
            
            });
            $(".table-hover>tbody>tr").mouseleave(function() {
                  if ($(this).find(".n_icon").is(':contains("Stock")'))
                  {
                       $(this).css("cursor", "default");
                      $(this).css("background-color","#F7F6F6");
                       $(this).find(".prix").css("color", "#727E7F");
                 $(this).find(".n_icon").html(stock_complet_red);
             $(this).find(".div_server_hell").css("color", "#727E7F");
            $(this).find('td').css('border-color', '#F7F6F6');
             $(this).find('th').css('border-color', '#F7F6F6');
                 }
                else
                {
                       $(this).find(".prix").css("color", "#727E7F");
                 $(this).find(".n_icon").html(next_icon_green);
             $(this).find(".div_server_hell").css("color", "#727E7F");
            $(this).find('td').css('border-color', '#F7F6F6');
             $(this).find('th').css('border-color', '#F7F6F6');
                 }
              
            });
          var stock_complet_red = "<span style=\"color:red\">Stock Complet</span><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\" width=\"25px\" height=\"25px\"><path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\" fill=\"#D80027\"/></svg>";
          var next_icon_white = " <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 129 129\" enable-background=\"new 0 0 129 129\" width=\"30px\" height=\"30px\"><g> <path d=\"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z\" fill=\"#FFFFFF\"/></g></svg>";
           var stock_complet_white = " <span style=\"color:#FFF\">Stock Complet</span> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\" width=\"25px\" height=\"25px\"><path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\" fill=\"#FFF\"/></svg>";
     var next_icon_green = " <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 129 129\" enable-background=\"new 0 0 129 129\" width=\"30px\" height=\"30px\"><g> <path d=\"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z\" fill=\"#12C18B\"/></g></svg>";
    });