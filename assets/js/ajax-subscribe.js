(function($) {
    'use strict';

    $('#subscription-form').submit(function(e) {

        //prevent the form from submitting via the browser redirect
        e.preventDefault();

        //grab attributes and values out of the form
        var data = { email: $('#subscribe-input').val() };
        var endpoint = $(this).attr('action');

        //make the ajax request
        $.ajax({
            method: 'POST',
            dataType: "json",
            url: endpoint,
            data: data
        }).done(function(data) {
            if (data.id) {
                //successful adds will have an id attribute on the object
                alert('Successfully subscribed!');
            } else if (data.title == 'Member Exists') {
                //MC wil send back an error object with "Member Exists" as the title
                alert('Thanks, but you have alredy subscribed.');
            } else {
                //something went wrong with the API call
                alert('Seems something went wrong. Please Try again.');
            }
        }).fail(function() {
            //the AJAX function returned a non-200, probably a server problem
            alert('Seems something went wrong. Please Try again.');
        });
    });
    
})(jQuery);
