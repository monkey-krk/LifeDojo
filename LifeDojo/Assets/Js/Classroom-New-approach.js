/// <reference path="../External/jQuery/jquery-2.1.0.min.js" />
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

    

});