$(function() {
    $("#txt_summary_title").removeClass("animated fadeInUp").addClass("animated fadeInUp");
    $("#txt_summary_desc").removeClass("animated fadeInUp").addClass("animated fadeInUp");
    $("#txt_summary_subtitle").removeClass("animated fadeInUp").addClass("animated fadeInUp");
    $("#div_btn").removeClass("animated fadeIn").addClass("animated fadeIn");

    
     function toArabic(){
         $("#txt_summary_title").html("Arabic");
         $("#txt_summary_desc").html("Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic Arabic");
         $("#txt_summary_subtitle").html("Arabic Arabic");
         
     }
    function toFrench(){
         $("#txt_summary_title").html("Summary");
         $("#txt_summary_desc").html("Apparently we had reached a great height in the atmosphepaparently we had reached a great height in the atmosphere, for thparently we had reached");
         $("#txt_summary_subtitle").html("About Your Site");
        // $("#txt_summary_title").removeClass("animated fadeInUp").addClass("animated fadeInUp");
        // $("#txt_summary_desc").removeClass("animated fadeInUp").addClass("animated fadeInUp");
        // $("#txt_summary_subtitle").removeClass("animated fadeInUp").addClass("animated fadeInUp");
     }
    $("#db_ar").on('click',function() {
        toArabic();
        $("#db_language").html("Ar <span class=\"caret\"></span>");
    });
    $("#db_fr").on('click',function() {
        toFrench();
        $("#db_language").html("FR <span class=\"caret\"></span>");
    });
    
});