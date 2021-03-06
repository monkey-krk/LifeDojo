﻿$(document).ready(function () {

    if ($("#JournalText").length > 0){
        $("#JournalText").redactor({
            toolbarExternal: '#EditorToolBar'
        });
    }

    if ($(".MyPlan-Calendar").length > 0) {

        $('.TTab[data-tab="4"]').click(function () {
            $('.MyPlan-Calendar').fullCalendar({
                header: {
                    left: '',
                    center: 'prev,title,next',
                    right: ''
                },
                firstDay: 1,
                editable: false,
                events: CalendarEvents,
                eventRender: function (event, element, view) {
                    var today = $.fullCalendar.formatDate(new Date(), 'yyyy-MM-dd');
                    var dateString = $.fullCalendar.formatDate(event.start, 'yyyy-MM-dd');
                    if (dateString == today) { element.addClass("Today"); }
                    element.append("<div class='Description'>" + event.description + "</div>");
                    element.prepend("<i class='Icon " + event.icon + " " + event.iconcolor + "'></i>")
                    view.element.find('.fc-day[data-date="' + dateString + '"]').addClass("HasEvent");
                }
            });
        })

    }
    
    if ($(".checkboxlist").length > 0) {
        $(".checkboxlist li").click(function (e) {
            $(this).toggleClass("active");
        });

    }

    if ($(".PopUpAddAlly").length > 0) {
        $(".AlliesAddBtn").click(function (e) {
            $(".PopUpAddAlly").show();
            e.preventDefault();
        });
        $(".PopUpAddAllyBox .Close").click(function (e) {
            $(".PopUpAddAlly").hide();
        })
        $(".AlliesList .Ally").click(function () {
            $(this).toggleClass("active");
        })
        $(".SearchAlly").keyup(function () {
            //do some logic ... get Ally list data from API and render AlliesList with template engine (eg. mustache)
        })
        $(".PopUpAddAllyButton").click(function (e) {
            //do some select -> insert to db logic ...
            $(".PopUpAddAlly").hide();
            e.preventDefault();
        })
    }

    if ($(".PopUpConfirmMeeting").length > 0) {
        $(".TContent.MyCoach ul li").click(function (e) {
            $(".PopUpConfirmMeeting").show();
            e.preventDefault();
        });
        $(".PopUpConfirmMeetingBox .Close").click(function (e) {
            $(".PopUpConfirmMeeting").hide();
        })
        $(".PopUpConfirmMeetingButton").click(function (e) {
            //do some select -> insert to db logic ...
            $(".PopUpConfirmMeeting").hide();
            e.preventDefault();
        })
    }

});