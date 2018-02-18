$(function() {
	$("#lien_rappeler").on('click',function() {
		$("#rappeler_div_pro").fadeIn('slow', function() {
    });
	});
	
	$("#btn_rappeler_exit_pro").on('click',function() {
		$("#rappeler_div_pro").fadeOut('slow', function() {
    });
	});
	//------------------------------
	$("#lien_chat").on('click',function() {
		$("#chat_div_in_p").fadeIn('slow', function() {
    });
	});
	
	$("#btn_chat_exit_in_p").on('click',function() {
		$("#chat_div_in_p").fadeOut('slow', function() {
    });
	});

});