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

        $('html,body').animate({scrollTop:target_top -110}, 800);


    });


    // For page transitions
    $(".animsition").animsition({
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'page-loader',
    });

    // For tooltips
    $('[data-toggle="tooltip"]').tooltip();

    

    // For changing body class on scroll
    $(window).on("scroll resize", function() {
        if ($(window).scrollTop() >= 75) {
            $("body").addClass("body-scrolled");
        }
        else {
            return $("body").removeClass("body-scrolled");
        }
    });

    $(window).resize(function() {
      fullscreen();
    });
    //首图全屏
    function fullscreen() {
        var width = $(window).width(),
            height = $(window).height();
        $('.banner').css({"width":width+"px","height":height+"px"})
    }
});
