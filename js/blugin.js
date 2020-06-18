$(document).ready(function(){
    $(".slider,.slider .carousel-inner .carousel-item ,.slider .carousel-inner .carousel-item img").height($(window).height() - ( $(".upper-part").innerHeight() + $("nav").innerHeight()));
    $(".slider .carousel-inner .carousel-item,.slider .carousel-inner .carousel-item img").width($(window).width());
    $(".featured-work ul li").on({
        click:function(){
            $(this).addClass("active").siblings().removeClass("active");
            if ($(this).data("img") === "all"){
                $(".featured-work .row img").fadeIn(500)
            }else{
                $(".featured-work .row img").not($($(this).data('img'))).fadeOut(500),
                $($(this).data('img')).fadeIn(500);
            }
        }
    })
})