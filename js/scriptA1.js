$(function() {
   // alert("ok");
   /* var x1 = $("#x1").width(),
        x2 = $("#x2").width(),
        x3 = $("#in_col_m_c").width(),
        x4 = $("#x4").width(),
        x5=$("#x5").width(),
       // u =$(window).width()*0.6,
        u =$("#div_pg_in").width(),
        padding_n = (u-(x1+x2+x3+x4+x5+43*3))/2,
        p = padding_n+"px";
  //  alert(p);
  alert(x1+x2+x3+x4+x5);
    alert(u);*/
    
   // alert(p);
      /*  $("#div_pg_in").css("padding-left",p);
       $("#div_pg_in_txt_home").css("padding-left",p);*/
    
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
   $("#background_forgot").fadeOut('slow', function() {
     $("#div_pg_forgot_pass").hide();
        $("#div_forgot_pass_done").show();
    $("#div_forgot_pass_done").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
   });
 });

  $("#btn_sign_up").on('click',function() {
   $("#div_signup").fadeOut('slow', function() {
     $("#div_signup_done").show();
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
  $("#lien_connecter").on('click',function() {
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
  /* __________________ */
  $("#lien_demande_forgot_in").on('click',function() {
    $("#div_acheter_in").hide('slow', function() {
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

  });
  $("#lien_forgot_in").on('click',function() {
    $("#div_signin").fadeOut('slow', function() {
    $("#div_forgot_pass_verification").hide();
    $("#div_forgot_pass_reset").hide();
     
        
     forgot_password_1();
   });
  });

  $("#btn_fg_pass_valider").on('click',function() {
    $("#div_forgot_pass_mail").fadeOut('slow', function() {
     forgot_password_2();
   });
  });

  $("#btn_fg_pass_continuer").on('click',function() {
    $("#div_forgot_pass_verification").fadeOut('slow', function() {
     forgot_password_3();
   });
  });
  $("#btn_rate").on('click',function() {
    $("#div_row").hide('slow', function() {
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
     $("#div_forgot_password").fadeIn();
    $("#div_forgot_pass_mail").show();
     $("#div_pg_forgot_pass").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeIn');
    });
     $("#txt_fg_pass_verifier").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
     $("#tb_fg_pass_mail").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
     $("#recaptcha1").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
     $("#btn_fg_pass_valider").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp');
    });
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
   $("#cb_remember_me").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });
   $("#btn_signin_in").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $(this).removeClass('animated fadeInUp');
  });
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