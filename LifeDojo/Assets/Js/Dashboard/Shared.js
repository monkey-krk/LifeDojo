/// <reference path="../External/jQuery/jquery-2.1.0.min.js" />

function OpenTab(tab) {
    $(".TTab.active").removeClass("active");
    $(".TTab[data-tab='" + tab + "']").addClass("active");
    $(".TContent.active").removeClass("active");
    $(".TContent[data-tab='" + tab + "']").addClass("active");
}

$(document).ready(function () {
    
    if ($(".Tabs").length > 0) {
        $(".TTab").click(function (e) {
            OpenTab($(this).attr("data-tab"));
            return false;
        });
    }






});