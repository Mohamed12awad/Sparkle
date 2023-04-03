/* globals $ */
$(function () {
    'use strict';
    // adjust height
    var winH = $(window).height(),
        navH = $('.navbar').innerHeight(),
        scroll = new SmoothScroll('a[href*="#"]', {
            speed: 800
        });
        
    $('.header').height(winH - navH);
    
    $(window).ready(function () {
        $("#preloader").fadeOut(2000);
        $("body").css('overflow', 'auto');
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').css('background-color', 'rgba(26, 26, 26, .85)');
            $('.navbar').css('box-shadow', 'rgba(0, 0, 0, 0.4) 0px 0.5rem 1.2rem');
        } else {
            $('.navbar').css('background-color', 'rgba(26, 26, 26, 1)');
            $('.navbar').css('box-shadow', 'none');
        }
    });
});