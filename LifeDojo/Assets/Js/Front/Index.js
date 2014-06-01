/// <reference path="../../External/jQuery/jquery-2.1.0.min.js" />


$(document).ready(function () {


    if ($(".IconsBox").length > 0) {
        if ($(".IconsContent").length > 0) {
            var Slider = 0;

            function ShowIconBox(BoxID) {
                $(".IconBox").removeClass("active");
                $(".IconBox[data-boxid='" + BoxID + "']").addClass("active");
                $(".IconContent").removeClass("active");
                $(".IconContent[data-boxid='" + BoxID + "']").addClass("active");
            }

            $(".IconBox").click(function (e) {
                var BoxID = $(this).attr("data-boxid");
                ShowIconBox(BoxID);
                clearInterval(Slider);
            })

            var IconIDs = ['2', '3', '4', '1'];
            var cnt = IconIDs.length;
            ShowIconBox(1);
            Slider = setInterval(function () {
                var BoxID = IconIDs[(IconIDs.length++) % cnt]
                ShowIconBox(BoxID);
            }, 10000);

        }
    }



    


});