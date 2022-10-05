// sign in validation

$(document).ready(function () {
    $('#form2').submit(function (e) {

        e.preventDefault();

        var email = $('#email2').val();

        var password = $('#pw2').val();


        $(".error").remove();

        // Email Validation

        if (email.length < 1) {

            $('#email2').after('<span class="error">This field is required</span>');
            $('#para_must').css("display", "block");

        }

        else {

            var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            var validEmail = regEx.test(email);

            if (!validEmail) {

                $('#email2').after('<span class="error">Enter a valid email</span>');

            }

        }
        // Password Validation

        if (password.length < 1) {

            $('#pw2').after('<span class="error">This field is required</span>');

        }

        else {

            var regEx = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

            var validpswd = regEx.test(password);

            if (!validpswd) {

                $('#pw2').after('<span class="error">Enter a valid password</span>');

            }

        }



    });
});
