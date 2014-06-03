$(document).ready(function () {

    if ($(".Team").length > 0) {

        $(".Member").mouseenter(function (e) {
            $(this).find(".Description").fadeIn(200);
            $(this).addClass("active");
        })
        $(".Member").mouseleave(function (e) {
            $(this).find(".Description").hide();
            $(this).removeClass("active");
        })
        $(".Member").click(function (e) {
            $(".Member").removeClass("active");
            $(this).addClass("active");
            e.stopPropagation();
        })
        $(document).click(function () {
            $(".Member").removeClass("active");
        });

    }

    if ($(".Programs").length > 0) {

        $(".Program").mouseenter(function (e) {
            $(this).find(".Description").fadeIn(200);
            $(this).addClass("active");
        })
        $(".Program").mouseleave(function (e) {
            $(this).find(".Description").hide();
            $(this).removeClass("active");
        })
        $(".Program").click(function (e) {
            $(".Program").removeClass("active");
            $(this).addClass("active");
            e.stopPropagation();
        })
        $(document).click(function () {
            $(".Program").removeClass("active");
        });

    }

});