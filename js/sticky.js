if($(window).width() >= 991.98) {
    (function($) {
    "use strict";

        var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

        $(document).scroll(function() {
            var scrollTop = $(this).scrollTop();

            if (scrollTop > y_pos + height) {
                $navbar.addClass("sticky").animate({
                    top: 0
                });
            } 
            else if (scrollTop <= y_pos) {
                $navbar.removeClass("sticky").clearQueue().animate({
                    top: "-48px"
                }, 0);
            }
        });

    })(jQuery, undefined);
}
else{    
    var $navbar = $("#navbar");
    $navbar.addClass("sticky");
}