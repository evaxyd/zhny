/*! --------------------------------------------------------------
# main.js
#
# Main theme js file for SaltTechno template.
# This is compressed js file. You get uncompressed version with download.
--------------------------------------------------------------*/

$(function($) {
    'use strict';

    fullscreen();

    $(".navbar-nav a").click(function(event){

        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#"+trgt).offset();
        var target_top = target_offset.top;

        $('html,body').animate({scrollTop:target_top -90}, 800);


    });


    // For page transitions
    $(".animsition").animsition({
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'page-loader',
    });

    // For tooltips
    $('[data-toggle="tooltip"]').tooltip();

    

    

    $(window).resize(function() {
      fullscreen();
    });
    //首图全屏
    function fullscreen() {
        var width = $(window).width(),
            height = $(window).height();
        $('.banner').css({"width":width+"px","min-height":height+"px"});
        $('.fullscreen').css({"width":width+"px","min-height":height+"px"});
        $('.fullscreen .container').each(function() {
            var nh = $(this).height();
            if(height > nh) {
                $(this).css("margin-top",(height-nh)/2 + 'px');
            }else{
                $(this).css("margin-top",(nh-height)/2 + 'px');
            }
            
        })
    }
});
