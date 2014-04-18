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

    $(".TA-Btn-AddAlly").click(function () {
        var NewActiveAllyNo = parseInt($(".TA-Questions").attr("data-activeallyno")) + 1;
        $(".TA-Questions").find("tbody")
            .append('<tr id="TA-QR-' + NewActiveAllyNo + '">' + 
                     '<td><textarea id="TA-Q-1-' + NewActiveAllyNo + '"></textarea></td>' +
                     '<td><textarea id="TA-Q-2-' + NewActiveAllyNo + '"></textarea></td>' +
                     '<td><textarea id="TA-Q-3-' + NewActiveAllyNo + '"></textarea></td>' +
                     '<td><textarea id="TA-Q-4-' + NewActiveAllyNo + '"></textarea></td>' +
                     '<td><textarea id="TA-Q-5-' + NewActiveAllyNo + '"></textarea></td>' +
                     '</tr>');
        $(".TA-Questions").attr("data-activeallyno", NewActiveAllyNo);
    });
    
    $(".QuizStandardQuestion .Question").flowtype({
        minimum: 100,
        maximum: 700,
        minFont: 12,
        maxFont: 18,
        fontRatio: 12
    });

    $(".QuizStandardQuestion .Answers").flowtype({
        minimum: 100,
        maximum: 700,
        minFont: 10,
        maxFont: 13,
        fontRatio: 13
    });
    

});