$(document).ready(function() {
    //DOM is fully loaded

    // Capitalize the first letter of Name
    $('#name').on('change', function (e) {
        var $this = $(this),
            val = $this.val();
        regex = /\b[a-z]/g;

        val = val.charAt(0).toUpperCase() + val.substr(1);
    });

    // Capitalize the first letter of Friend's Name
    $('#friend-name').on('change', function (e) {
        var $this = $(this),
            val = $this.val();
        regex = /\b[a-z]/g;

        val = val.charAt(0).toUpperCase() + val.substr(1);
    });

    //When form is submitted, grab data
    $('form').submit(function (event) {
                event.preventDefault();
                 // Make the invite button load
                 $('button').removeClass('btn-danger');
                 $('button').toggleClass('btn-primary');
                $('button').html('Loading <span class="spinner"></span><i class="fa fa-spinner fa-spin"></i></span>');


                // put form data into variables
                var name = $.trim(document.getElementById('name').value);
                var friendName = $.trim(document.getElementById('friendName').value);
                var phone = $.trim(document.getElementById('phone').value);

                var postData = 'name=' + name + '&friendName=' + friendName + '&phone=' + phone + '$MessageYouWantYourFriendToReceive=' + MessageYouWantYourFriendToReceive;

                // Send the Data to the Processor for processing
                $.ajax({
                    type: 'POST',
                    url: 'processor.php',
                    data: postData,
                    success: function(result) {
                        if(result == 'success') {
                            swal("Successfully sent your friend the message ", "Your friend has received you heartfelt message", "success");
                            setTimeout(function(){
                                window.location = 'https://awlo.org'
                            }, 3000);
                        }
                    }
                });

    });

});