$(document).ready(function () {

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
    

});