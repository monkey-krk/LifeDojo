$(document).ready(function () {


    $("#LeftSidebarShrinkButton").click(function () {
        var state = $("#LeftSidebarShrinkButton").attr("data-state");
        if (state == "open") {
            //Close sidebar
            $("#LeftSideWrapper").toggle(200, function () {
                $("#RightSideWrapper").removeClass("col-sm-9").addClass("col-sm-12");
            });
            $(".TB-IconLeft").hide();
            $(".TB-IconRight").show();
            $(".VideoSize").removeClass("small").addClass("big");
            $(".Quiz").removeClass("small").addClass("big");
            $("#LeftSidebarShrinkButton").attr("data-state", "closed");
        } else {
            //Open sidebar
            $("#RightSideWrapper").removeClass("col-sm-12").addClass("col-sm-9");
            $("#LeftSideWrapper").toggle(200);
            $(".TB-IconLeft").show();
            $(".TB-IconRight").hide();
            $(".VideoSize").removeClass("big").addClass("small");
            $(".Quiz").removeClass("big").addClass("small");
            $("#LeftSidebarShrinkButton").attr("data-state", "open");
        }
    });

    $("#LeftSidebarMobileButton").click(function () {
        var state = $("#LeftSidebarMobileButton").attr("data-mobileliststate");
        if (state == "open") {
            //Shrink sidebar
            $(".LeftSidebar ol").toggle(200);
            $(".LeftSidebarSBMIconArrow").removeClass("up-1").addClass("down-1");
            $("#LeftSidebarMobileButton").attr("data-mobileliststate", "closed");
        } else {
            //Expand sidebar
            $(".LeftSidebar ol").toggle(200);
            $(".LeftSidebarSBMIconArrow").removeClass("down-1").addClass("up-1");
            $("#LeftSidebarMobileButton").attr("data-mobileliststate", "open");
        }
    });


});