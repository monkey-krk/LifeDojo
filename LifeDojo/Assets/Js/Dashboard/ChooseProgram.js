$(document).ready(function () {

    //Ajusting Program Boxes height
    $(".ProgramsList > li:odd").each(function () {
        var evenH = $(this).prev().height()
        var oddH = $(this).height()
        var height = (evenH > oddH ? evenH : oddH);
        $(this).find(".ProgramWrapper").css('min-height', height + 1 + 'px');
        $(this).prev().find(".ProgramWrapper").css('min-height', height + 'px');
    });

});
