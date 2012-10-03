var google = require('node-google-api')('AIzaSyBpjG7qJqaGdueQgEXBiyLjCOEZcYsfq-A');

google.build(function(api) {

    api.calendar.events.list(
        {
            calendarId: 'gary@amisenshort.net'
            // calendarId: 'en.usa#holiday@group.v.calendar.google.com'
        },
        function(events) {
            console.log(arguments);
            // for(var e in events.items) {
            //     console.log(events[e].summary);
            // }
        }
    );
});
