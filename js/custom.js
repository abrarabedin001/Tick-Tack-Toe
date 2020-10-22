$(function () {
    //    PRELOADER JS
    $(window).on("load", function () {
        $(".preloader-bg").delay(1000).fadeOut(100)
    });

    
    //    STICKY MENU JS
    $(window).scroll(function () {
        var totop = $(this).scrollTop()
        if (totop > 0) {
            $(".navbar").addClass("navbar-bg")
        } else {
            $(".navbar").removeClass("navbar-bg")
        }
    });

    
    // BACK TO TOP JS
    
//    $(document).ready(function () {
//
//        //Check to see if the window is top if not then display button
//        $(window).scroll(function () {
//            if ($(this).scrollTop() > 100) {
//                $('.backtotop').fadeIn();
//            } else {
//                $('.backtotop').fadeOut();
//            }
//        });
//        $(".backtotop").click(function () {
//            $("html , body").animate({
//                scrollTop: 0
//            }, 2000);
//
//        });
//
//    });

});
