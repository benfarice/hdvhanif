$(function() {
    
	      $("#lien_fg_pass_signup").on('click',function() {
			$("#div_forgot_password").fadeOut('slow', function() {
         signUp_();
		});
		});
	$("#btn_sinin").on('click',function() {
		$("#div_summary").fadeOut('slow', function() {
      login_();
    });
	});
	
  $("#btn_signup").on('click',function() {
   $("#div_summary").fadeOut('slow', function() {
     signUp_();
   });
 });  
     $("#btn_fg_pass_reset").on('click',function() {
   $("#background_forgot").fadeOut('slow');
    $("#div_pg_forgot_pass").fadeOut('slow');
    $("#div_pg_forgot_pass_txt").fadeOut('slow',function(){
    $("#div_forgot_pass_done").show();
    $("#img_fg_pass_done").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
    $("#txt_fg_pass_done").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
    $("#btn_fg_pass_signin").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
   });
 });
$("#div_rappeler_footer").on('click',function() { //1
   $("#div_rappeler_body").fadeOut('slow', function() {});
     $("#div_rappeler_footer").fadeOut('slow',function() {
         $("#div_rappeler_done").show();
         $("#div_rappeler_done").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
              $(this).removeClass('animated fadeInUp'); 
          });
         $("#rappeler_div").show();
        // alert("ok");
       
   });
     $("#rappeler_div").show();
 });
$("#lien_rappeler").on('click',function() {
    if($('#chat_div').css('display') != 'none')
     {
    
     $("#chat_div").hide();
     }
   
   is_AcheterClicked=false;
   is_vender_clicked=false;
   is_chat_clicked=false;
   is_rappeler_clicked=true;
   emplacemant_vert();
  
   $("#rappeler_div").show();
  $("#rappeler_div").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
         $(this).removeClass('animated fadeInUp'); 
         });
   
  
   $("#btn_rappeler").hide();
   //alert("ok rappeler here");//-----------
   
});
$("#btn_rappeler_exit").on('click',function() { //***
         is_AcheterClicked=false;
         is_vender_clicked=false;
         is_chat_clicked=false;
         is_rappeler_clicked=false;
         emplacemant_vert();
         //alert("hello exit hzer");//-------
         
         $("#rappeler_div").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
         $(this).removeClass('animated fadeOutDown');
         $("#rappeler_div").hide();
         });
         $("#btn_rappeler").show();
        
    /*  $("#div_rappeler_done").hide(function(){
         $("#rappeler_div").fadeOut(function(){   });
          $("#div_rappeler_body").fadeOut();
        $("#div_rappeler_footer").fadeOut(function(){ });
     });
   
   */
    

 });
 var is_AcheterClicked = false;
    var is_vender_clicked = false;
    var is_rappeler_clicked = false;
    var is_chat_clicked = false;
    function emplacemant_vert(){
        if(is_AcheterClicked == true){
        $("#lien_acheter").removeClass("hvr-underline-from-center").addClass("hvr-underline_y");
        $("#lien_vendre").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");   
        $("#lien_chat").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
        $("#lien_rappeler").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
         }
        else if(is_vender_clicked == true){
        $("#lien_vendre").removeClass("hvr-underline-from-center").addClass("hvr-underline_y");
        $("#lien_acheter").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");   
        $("#lien_chat").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
        $("#lien_rappeler").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");   
        }
        else if(is_chat_clicked == true){
         $("#lien_chat").removeClass("hvr-underline-from-center").addClass("hvr-underline_y");
        $("#lien_vendre").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");   
        $("#lien_acheter").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
        $("#lien_rappeler").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");    
        }
        else if(is_rappeler_clicked == true){
         $("#lien_rappeler").removeClass("hvr-underline-from-center").addClass("hvr-underline_y");
        $("#lien_vendre").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");   
        $("#lien_chat").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
        $("#lien_acheter").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");    
        }
        else{
        $("#lien_rappeler").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
        $("#lien_vendre").removeClass("hvr-underline_y").addClass("hvr-underline-from-center");   
        $("#lien_chat").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
        $("#lien_acheter").removeClass("hvr-underline_y").addClass("hvr-underline-from-center"); 
        }
    }
  
$("#lien_chat").on('click',function() {
     if($('#rappeler_div').css('display') != 'none')
     {
       $("#rappeler_div").hide();
     }
    /*
       $("#lien_chat").on('click',function() {
        
              $("#div_chat").show();
              $("#div_chat").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated zoomIn');
        });
    });
     }*/
     is_AcheterClicked=false;
      is_vender_clicked=false;
         is_chat_clicked=true;
         is_rappeler_clicked=false;
         emplacemant_vert();
    $("#chat_div").show();
    $("#btn_chat").hide();
    $("#btn_rappeler").hide();
    //alert("here");
    $("#div_chating").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
      
    });
    setTimeout(function(){TweenLite.to("#chat_div",0.1,{"border-radius":"2%"});}, 400); 
    setTimeout(function(){TweenLite.to("#chat_div",0.1,{"box-shadow":"1px 1px 10px 2px #888888"}); }, 400);
   
 });
$("#btn_chat_exit").on('click',function() {
   $("#chat_div").css("border-radius","0%"); 
  // TweenLite.to("#chat_div",0.1,{"border-radius":"0%"});
   //TweenLite.to("#chat_div",0.1,{"box-shadow":"0px 0px 0px 0px #000000"});
   $("#chat_div").css("box-shadow","0px 0px 0px 0px #000000"); 
    is_AcheterClicked=false;
      is_vender_clicked=false;
         is_chat_clicked=false;
         is_rappeler_clicked=false;
         emplacemant_vert();
  // $("#chat_div").fadeOut('slow');
   $("#div_chating").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
   $(this).removeClass('animated fadeOutDown');
    $("#chat_div").hide();
  // 
  
   });
     $("#btn_rappeler").show();
     $("#btn_chat").show();
 });
$("#btn_rappeler").on('click',function() {
   /* if($('#chat_div').css('display') == 'block')
{
    $("#chat_div").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeOutDown');  
    $("#chat_div").hide();
    });
}
    
     $("#div_rappeler_done").hide(function(){
         $("#rappeler_div").show(function(){
        $("#div_rappeler_body").show();
        $("#div_rappeler_footer").show();
       
         });
     });
    
    $("#btn_rappeler").hide();
    $("#div_rappeler").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
*/
 });

 function div_sign_up_done_animation(){
      $("#div_signup_done").fadeIn();   
      $("#svg_done").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
      $("#txt_signup_done_title").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
      $("#txt_signup_done_subtitle").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated fadeInUp');
        });
 }
    
 
  $("#btn_sign_up").on('click',function() {
   $("#div_signup").fadeOut('slow', function() {
     //----------------
       div_sign_up_done_animation();
   });
 });
  

  $("#lien_signup").on('click',function() {
   $("#div_signin").fadeOut('slow', function() {
     signUp_();
   });
 });
  $("#lien_signin").on('click',function() {
    $("#div_signup").fadeOut('slow', function() {
      login_();
    });
  });

  $("#btn_rexiews_add").on('click',function() {
      reset_comments();
    $("#rating_div").fadeOut('slow', function() {
      $("#div_summary").hide();
      $("#div_signup").hide();
      $("#div_signup_done").hide();

      $("#div_forgot_password").hide();
      $("#div_row").show();
      $("#div_fb_rat").show();
      $("#div_signin").show(); 
      login_();
    });
  });
function reset_comments(){
      var x = "comment";
     for(i=0;i<1000;i++){
     var y =   x + i ;
     var w = document.getElementById(y);
     if(w!=null){
     w.style.display = "none";   }
     }
}
  $("#lien_connecter").on('click',function() {
       is_AcheterClicked=false;
         is_vender_clicked=false;
         is_chat_clicked=false;
         is_rappeler_clicked=false;
         emplacemant_vert();
    reset_servers();
    reset_comments();
   $("#rating_div").hide();
   $("#div_summary").hide();
   $("#div_signup").hide();
   $("#div_signup_done").hide();

   $("#div_forgot_password").hide();

   $("#div_acheter_in").fadeOut('slow', function() {

    $("#div_row").show(); 

    $("#div_fb_rat").fadeIn(); 
    $("#div_signin").show(); 
    login_();   
    $("#div_fb_rat").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeIn');

    });
  });
 });
    $("#btn_fg_pass_signin").on('click',function() {
   $("#rating_div").hide();
   $("#div_summary").hide();
   $("#div_signup").hide();
  $("#div_forgot_pass_done").addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeOut');
          $("#div_forgot_password").hide();

    $("#div_acheter_in").fadeOut('slow', function() {
    
    $("#div_row").show(); 

    $("#div_fb_rat").fadeIn(); 
    $("#div_signin").show(); 
    login_();   
    $("#div_fb_rat").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeIn');

    });
  
   });
   
    });
        

  

   
 });
    
  /* __________________ */
  $("#lien_demande_forgot_in").on('click',function() {
    /*$("#div_acheter_in").hide('slow', function() {
      $("#div_demande_signin").fadeOut('slow', function() {
       $("#div_summary").hide();
       $("#div_pg_in").hide('slow', function() {
        $("#div_fb_rat").show();

      });
       $("#div_row").show('slow',function(){
        forgot_password_1();
      });

     });
    });
    -----------------------------
   
*/
  is_AcheterClicked=false;
  is_vender_clicked=false;
         is_chat_clicked=false;
         is_rappeler_clicked=false;
         emplacemant_vert();
   reset_servers();
   reset_comments();
   $("#rating_div").hide();
   $("#div_summary").hide();
   $("#div_signup").hide();
   $("#div_signin").hide();
   $("#div_signup_done").hide();
   $("#div_forgot_pass_done").hide();
   $("#div_forgot_password").hide();
   $("#div_forgot_pass_reset").hide();
   $("#div_forgot_pass_verification").hide();
   $("#div_acheter_in").fadeOut('slow', function() {

    $("#div_row").show(); 

    $("#div_fb_rat").fadeIn(); 
    $("#div_row").show('slow',function(){
        forgot_password_1();
      });
  });
  });
var done_icon ="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"img_done\" name=\"img_done\" x=\"0px\" y=\"0px\" viewBox=\"0 0 52 52\" style=\"enable-background:new 0 0 52 52;\" xml:space=\"preserve\" width=\"100%\" height=\"100%\"> <path d=\"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26  S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z\" fill=\"#12C18B\"/><path d=\"M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406   l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   C39.251,14.885,38.62,14.922,38.252,15.336z\" fill=\"#FFFFFF\"/>  </svg>";
var  p1 = $("#l1");
var  w1 = $("#line1").width();
var  p2 = $("#l2");
var  w2 = $("#div_p_left").width();
var  p3 = $("#l3");
var  w3 = $("#div_p_right").width();
var  p4 = $("#l4");
var  w4 = $("#line4").width();
var total1 =(w1+w2)/1.5;
var total2 = (w3+w4)/1.5;
var speedw1 = w1/total1;

var speedw2 = w2/total1;
var speedw3 = w3/total2;
var speedw4 = w4/total2;
  $("#lien_forgot_in").on('click',function() {
    $("#div_signin").fadeOut('slow', function() {
    $("#div_forgot_pass_verification").hide();
    $("#div_forgot_pass_done").hide();
    $("#div_forgot_pass_reset").hide();
     forgot_password_1();
     $("#email_forget").css("color","#12c18b");
   // alert("w1 = "+w1+" -- w2 : "+w2);
   // alert("spped1 : "+speedw1+" -- speed2 = "+speedw2+"speed 3 :"+speedw3);
   });
  });

  $("#btn_fg_pass_valider").on('click',function() {
    $("#div_forgot_pass_mail").fadeOut('slow', function() {
     forgot_password_2();
       $("#circlep1").css("background-color","#12c18b");
        $("#circlep1").html(done_icon);
        
       TweenLite.to(p1,speedw1,{width:"100%",onComplete:myFuncP})
   });
  });
    function myFuncP(){
        TweenLite.to(p2,speedw2,{width:"100%",onComplete:myFuncP2})
    }
    function myFuncPR(){
        TweenLite.to(p1,speedw1,{width:"0%",onComplete:myFuncP2R})
    }
    function myFuncP3(){
        TweenLite.to(p4,speedw4,{width:"100%",onComplete:myFuncP4})
    }
    function myFuncP3R(){
        TweenLite.to(p3,speedw3,{width:"0%",onComplete:myFuncP4R})
    }
    function myFuncP2(){
        $("#circlep2").css('border-color', "#12c18b");
        $("#veri_forgot").css("color","#12c18b");
    }
    function myFuncP2R(){
        $("#circlep2").css('border-color', "#c2c1c3");
    }
    function myFuncP4(){
        $("#circlep3").css('border-color', "#12c18b");
        $("#reset_forget").css("color","#12c18b");
    }
    function myFuncP4R(){
        $("#circlep3").css('border-color', "#c2c1c3");
    }
    
  $("#btn_fg_pass_continuer").on('click',function() {
    $("#div_forgot_pass_verification").fadeOut('slow', function() {
        forgot_password_3();
        $("#circlep2").css("background-color","#12c18b");
        $("#circlep2").html(done_icon);
      
         TweenLite.to(p3,speedw3,{width:"100%",onComplete:myFuncP3})
   });
  });
  $("#btn_rate").on('click',function() {
    $("#div_row").fadeOut('slow', function() {
    $("#rating_div").show();
    $("#header_comment").fadeIn(); 
    $("#header_comment").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
     
      $(this).removeClass('animated fadeInUp');
      });
     var x = "comment";
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
 function afficher_servers(){
    $("#div_server").show();
    $("#server_combobox").fadeIn(); 
    $("#server_combobox").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
     
      $(this).removeClass('animated fadeInUp');
      });
    var x = "server_n";
     for(i=0;i<1000;i++){
     var y =   x + i ;
     var w = document.getElementById(y);
     if(w!=null){
     myserver(y,i);
     $(y).addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
      });
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
function myf(y,i){
    var t = i*200;
    if(i==1) t=0;
   setTimeout(function(){ $(y).show(); }, t); 
}
  $("#btn_rate_in").on('click',function() {
    $("#div_row_page1").hide('slow', function() {
     $("#rating_div").show('slow', function() {

     });
   });
  });
    /* _________________ 
    
    
     ,,,,,
     */
     function forgot_password_3(){

       $("#div_forgot_pass_reset").fadeIn();

       $("#txt_fg_pass_mdp").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });
       $("#tb_fg_pass_mdp").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });
       $("#tb_fg_pass_confirm").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });
       $("#btn_fg_pass_reset").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });
     }
     function forgot_password_2(){
      $("#div_forgot_pass_verification").fadeIn();
      $("#txt_fg_pass_code").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });
      $("#tb_fg_pass_code").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });

      $("#btn_fg_pass_continuer").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });
      $("#lien_fg_pass_renvoyer").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp');
      });
    }
    function forgot_password_1(){
    //alert("here forget");//------------
     $("#circlep1").css("background-color","#FFFFFF");
     $("#circlep1").html("");
     $("#veri_forgot").css("color","#727E7F");
      myFuncP2R();
      myFuncP4R();
     TweenLite.to(p2,speedw2,{width:"0%",onComplete:myFuncPR})
     $("#circlep2").css("background-color","#FFFFFF");
     $("#circlep2").html("");
     $("#reset_forget").css("color","#727E7F");
     TweenLite.to(p4,speedw4,{width:"0%",onComplete:myFuncP3R})
     $("#div_forgot_password").show();
     $("#div_forgot_pass_mail").show();
        
    $("#div_pg_forgot_pass").hide();
    $("#div_pg_forgot_pass_txt").hide();
    $("#background_forgot").hide();
    $("#txt_fg_pass_verifier").hide();
    $("#tb_fg_pass_mail").hide();
    $("#btn_fg_pass_valider").hide();
    $("#lien_fg_pass_signup").hide();
    $("#div_pg_forgot_pass").show();
     $("#div_pg_forgot_pass").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeIn');
          $("#div_pg_forgot_pass_txt").show();
     $("#div_pg_forgot_pass_txt").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeIn');
          $("#background_forgot").show();
     $("#background_forgot").fadeIn('slow',load_frg_pass());
         
    });
         
    });
    
   }
function load_frg_pass(){
      $("#txt_fg_pass_verifier").show();
     $("#txt_fg_pass_verifier").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
         $("#tb_fg_pass_mail").show();
     $("#tb_fg_pass_mail").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
   /*  $("#recaptcha1").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });*/
        $("#btn_fg_pass_valider").show();
     $("#btn_fg_pass_valider").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
         $("#lien_fg_pass_signup").show();
     $("#lien_fg_pass_signup").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
}
   function signUp_(){
    $("#div_signup").fadeIn(function() {

    });
    $("#tb_username_up").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
    $("#tb_password_up").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
    $("#tb_confirm_password").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
    $("#tb_email_up").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
    $("#tb_tel_up").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
    $("#recaptcha2").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
    $("#btn_sign_up").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
    $("#already").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
  };
  function login_(){
   $("#div_signin").fadeIn( function() {

   });
   $("#txt_signin").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeIn');
  });
   $("#tb_username_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });
   $("#tb_password_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });
   $("#div_cb_remember_me_sign_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });
  /* $("#btn_signin_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });*/
   $("#lien_forgot_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });
   $("#have_not").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });
 };
});


var recaptcha1;
var recaptcha2;
var myCallBack = function() {
        //Render the recaptcha1 on the element with ID "recaptcha1"
        recaptcha1 = grecaptcha.render('recaptcha1', {
          'sitekey' : '6LdUWicUAAAAAL8mgVPZSXFnCrLrDWvtFoGO9DF1', //Replace this with your Site key
          'theme' : 'light'
        });
        
        //Render the recaptcha2 on the element with ID "recaptcha2"
        recaptcha2 = grecaptcha.render('recaptcha2', {
          'sitekey' : '6LdUWicUAAAAAL8mgVPZSXFnCrLrDWvtFoGO9DF1', //Replace this with your Site key
          'theme' : 'light'
        });
      };