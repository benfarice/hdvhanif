$(document).ready(function () {

 $("#btn_infos_cancel").on('click',function() {
   $("#btn_infos_save_cancel").fadeOut('slow', function() {
    $("#btn_infos_edit").show();
    $("#btn_infos_edit").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
    $("#tb_info_nom_prenom").fadeOut('400', function() {
     $("#txt_info_name").show();
     $("#txt_info_name").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    }); 
   });
    $("#db_infos_devise_desc").fadeOut('400', function() {
      $("#txt_infos_devise_desc").show();
      $("#txt_infos_devise_desc").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      }); 
    });



    $("#tb_infos_rib").fadeOut('400', function() {
      $("#txt_infos_rib").show();
      $("#txt_infos_rib").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      }); 
    });

    $("#tb_info_bank_nom_prenom").fadeOut('400', function() {
     $("#txt_infos_bank_nom").show();
     $("#txt_infos_bank_nom").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    }); 
   });



    $("#tb_infos_mode").fadeOut('400', function() {
      $("#txt_info_mode").show();
      $("#txt_info_mode").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      }); 
    });
    

    $("#tb_infos_bank").fadeOut('400', function() {
     $("#txt_infos_bank").show();
     $("#txt_infos_bank").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    }); 
   });


    
    $("#tb_infos_tel").fadeOut('400', function() {
     $("#txt_infos_tel").show();
     $("#txt_infos_tel").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    }); 
   });


    $("#tb_infos_adresse").fadeOut('400', function() {
      $("#txt_infos_adresse").show();
      $("#txt_infos_adresse").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      });
    });


    
    
    $("#tb_infos_mail").fadeOut('400', function() {
     $("#txt_infos_mail").show();
     $("#txt_infos_mail").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
   });


    
  });
 });
 $("#btn_infos_edit").on('click',function() {
   $(this).fadeOut('slow', function() {
    $("#btn_infos_save_cancel").show();
    $("#btn_infos_save_cancel").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
    $("#txt_info_name").fadeOut('400', function() {
      $("#tb_info_nom_prenom").show();
      $("#tb_info_nom_prenom").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      }); 
    });

    
    
    $("#txt_infos_devise_desc").fadeOut('400', function() {
     $("#db_infos_devise_desc").show();
     $("#db_infos_devise_desc").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });
   });



    $("#txt_info_mode").fadeOut('400', function() {
     $("#tb_infos_mode").show();
     $("#tb_infos_mode").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    }); 
   });



    $("#txt_infos_bank").fadeOut('400', function() {
     $("#tb_infos_bank").show();
     $("#tb_infos_bank").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    }); 
   });



    $("#txt_infos_rib").fadeOut('400', function() {
      $("#tb_infos_rib").show();
      $("#tb_infos_rib").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      }); 
    });

    

    $("#txt_infos_bank_nom").fadeOut('400', function() {
      $("#tb_info_bank_nom_prenom").show();
      $("#tb_info_bank_nom_prenom").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      }); 
    });



    $("#txt_infos_tel").fadeOut('400', function() {
      $("#tb_infos_tel").show();
      $("#tb_infos_tel").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('animated fadeInUp'); 
      });
    });


    
    $("#txt_infos_adresse").fadeOut('400', function() {
     $("#tb_infos_adresse").show();
     $("#tb_infos_adresse").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    }); 
   });


    
    
    $("#txt_infos_mail").fadeOut('400', function() {
     $("#tb_infos_mail").show();
     $("#tb_infos_mail").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('animated fadeInUp'); 
    });

   });


  });
 });
 $("#div_commandes_table tr").each(function(){
  if ($(this).children('.txt_commandes_status').is(':contains("attente")')) {
    $(this).children('.txt_commandes_status').css("color", "#FFCA4B");
    $(this).css('outline', "thin solid #FFCA4B");
  }
  if ($(this).children('.txt_commandes_status').is(':contains("Acceptée")')) {
    $(this).children('.txt_commandes_status').css("color", "#1281C1");
    $(this).css('outline', "thin solid #1281C1");
  }
  if ($(this).children('.txt_commandes_status').is(':contains("Payée")')) {
    $(this).children('.txt_commandes_status').css("color", "#12C18B");
    $(this).css('outline', "thin solid #12C18B");
  }
  if ($(this).children('.txt_commandes_status').is(':contains("Refusée")')) {
    $(this).children('.txt_commandes_status').css("color", "#B00404");
    $(this).css('outline', "thin solid #B00404");
  }
  if ($(this).children('.txt_commandes_status').is(':contains("Annulée")')) {
    $(this).children('.txt_commandes_status').css("color", "#EC4372");
    $(this).css('outline', "thin solid #EC4372");
  }

});
 $("#div_commandes_table .table-hover>tbody>tr").mouseover(function() {

  $(this).find(".txt_commandes_id").css("color", "#FFF");
  $(this).find(".txt_commandes_game").css("color", "#FFF");
  $(this).find(".txt_commandes_server").css("color", "#FFF");
  $(this).find(".txt_commandes_type").css("color", "#FFF");
  $(this).find(".txt_commande_qte").css("color", "#FFF");
  $(this).find(".txt_commandes_total").css("color", "#FFF");
  $(this).find(".txt_commandes_date_d").css("color", "#FFF");
  $(this).find(".txt_commandes_status").css("color", "#FFF");
  $(this).find(".commandes_date_p").css("color", "#FFF");
  if ($(this).children('.txt_commandes_status').is(':contains("attente")'))
  {
    $(this).css("background-color","#FFCA4B");
  }
  if ($(this).children('.txt_commandes_status').is(':contains("Acceptée")')) {
    $(this).find(".btn_commandes_status").find('abbr').html(i_icon_BAYEDA);
    $(this).css("background-color","#1281C1");
  }
  if ($(this).children('.txt_commandes_status').is(':contains("Payée")')) {
   $(this).css("background-color","#12C18B");
   /*$(this).find(".btn_commandes_resend").html(icon_bayed);*/
 }
 if ($(this).children('.txt_commandes_status').is(':contains("Refusée")')) {
   $(this).find(".btn_commandes_status").find('abbr').html(i_icon_BAYEDA);
   $(this).css("background-color","#B00404");
 }
 if ($(this).children('.txt_commandes_status').is(':contains("Annulée")')) {
   $(this).css("background-color","#EC4372");
 }

});
 $("#div_ref_right .table-hover>tbody>tr").mouseover(function() {

  $(this).find(".txt_ref_username").css("color", "#FFF");
  $(this).find(".txt_ref_mail").css("color", "#FFF");
  $(this).find(".txt_ref_date").css("color", "#FFF");
  $(this).find(".txt_ref_gain").css("color", "#FFF");
});
 $("#div_ref_right .table-hover>tbody>tr").mouseleave(function() {

  $(this).find(".txt_ref_username").css("color", "#000");
  $(this).find(".txt_ref_mail").css("color", "#000");
  $(this).find(".txt_ref_date").css("color", "#000");
  $(this).find(".txt_ref_gain").css("color", "#000");
});
 $("#div_commandes_table .table-hover>tbody>tr").mouseleave(function() {

  $(this).find(".txt_commandes_id").css("color", "#000");
  $(this).find(".txt_commandes_game").css("color", "#000");
  $(this).find(".txt_commandes_server").css("color", "#000");
  $(this).find(".txt_commandes_type").css("color", "#000");
  $(this).find(".txt_commande_qte").css("color", "#000");
  $(this).find(".txt_commandes_total").css("color", "#000");
  $(this).find(".txt_commandes_date_d").css("color", "#000");
  $(this).find(".commandes_date_p").css("color", "#000");
  $(this).css("background-color","#F7F6F6");
  if ($(this).children('.txt_commandes_status').is(':contains("attente")'))
  {
   $(this).find(".txt_commandes_status").css("color", "#FFCA4B");
 }   
 if ($(this).children('.txt_commandes_status').is(':contains("Acceptée")')) {
  $(this).find(".btn_commandes_status").find('abbr').html(i_icon_zar9a);
  $(this).find(".txt_commandes_status").css("color", "#1281C1");
}
if ($(this).children('.txt_commandes_status').is(':contains("Payée")')) {

      /* $(this).find(".btn_commandes_resend").html(icon_khder);
      */
      $(this).find(".txt_commandes_status").css("color", "#12C18B");
    }
    if ($(this).children('.txt_commandes_status').is(':contains("Refusée")')) {
      $(this).find(".btn_commandes_status").find('abbr').html(i_icon_refuse);

      $(this).find(".txt_commandes_status").css("color", "#B00404");
    }
    if ($(this).children('.txt_commandes_status').is(':contains("Annulée")')) {

      $(this).find(".txt_commandes_status").css("color", "#EC4372");
    }
  });
 
 $("#btn_commandes_filter").on('click',function() {
    $("#div_commandes_filter").fadeToggle('fast', function() {
      
    });
  });
});
var i_icon_zar9a = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 65 65\" style=\"enable-background:new 0 0 65 65;\" xml:space=\"preserve\" width=\"12px\" height=\"12px\"> <path d=\"M32.5,0C14.58,0,0,14.579,0,32.5S14.58,65,32.5,65S65,50.421,65,32.5S50.42,0,32.5,0z M32.5,61C16.785,61,4,48.215,4,32.5    S16.785,4,32.5,4S61,16.785,61,32.5S48.215,61,32.5,61zv\" fill=\"#1281C1\"/><circle cx=\"33.018\" cy=\"19.541\" r=\"3.345\" fill=\"#1281C1\"/><path d=\"M32.137,28.342c-1.104,0-2,0.896-2,2v17c0,1.104,0.896,2,2,2s2-0.896,2-2v-17C34.137,29.237,33.241,28.342,32.137,28.342z    \" fill=\"#1281C1\"/></svg>";
var i_icon_BAYEDA = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 65 65\" style=\"enable-background:new 0 0 65 65;\" xml:space=\"preserve\" width=\"12px\" height=\"12px\"> <path d=\"M32.5,0C14.58,0,0,14.579,0,32.5S14.58,65,32.5,65S65,50.421,65,32.5S50.42,0,32.5,0z M32.5,61C16.785,61,4,48.215,4,32.5    S16.785,4,32.5,4S61,16.785,61,32.5S48.215,61,32.5,61zv\" fill=\"#FFFFFF\"/><circle cx=\"33.018\" cy=\"19.541\" r=\"3.345\" fill=\"#FFFFFF\"/><path d=\"M32.137,28.342c-1.104,0-2,0.896-2,2v17c0,1.104,0.896,2,2,2s2-0.896,2-2v-17C34.137,29.237,33.241,28.342,32.137,28.342z    \" fill=\"#FFFFFF\"/></svg>";
var i_icon_refuse = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 65 65\" style=\"enable-background:new 0 0 65 65;\" xml:space=\"preserve\" width=\"12px\" height=\"12px\"> <path d=\"M32.5,0C14.58,0,0,14.579,0,32.5S14.58,65,32.5,65S65,50.421,65,32.5S50.42,0,32.5,0z M32.5,61C16.785,61,4,48.215,4,32.5    S16.785,4,32.5,4S61,16.785,61,32.5S48.215,61,32.5,61zv\" fill=\"#B00404\"/><circle cx=\"33.018\" cy=\"19.541\" r=\"3.345\" fill=\"#B00404\"/><path d=\"M32.137,28.342c-1.104,0-2,0.896-2,2v17c0,1.104,0.896,2,2,2s2-0.896,2-2v-17C34.137,29.237,33.241,28.342,32.137,28.342z    \" fill=\"#B00404\"/></svg>";
