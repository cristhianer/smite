$(document).ready(function () {
	
	$('[data-toggle="tooltip"]').tooltip();

	/*loading delay*/
	$('#loginButton').click(function(){

		$('#loading').css('display', 'block').delay(5000).hide(0);
		$('#loginButton').css('background', 'gray');
		$('#loginButton').attr('disabled', 'true');
		setTimeout(validateData, 5000)
	});

	function checkScreenSize() {
		
		if($(window).width() <= 480) {
			$('#desktopWindow').hide();
			$('#mobileWindow').show();
		} else {
			$('#mobileWindow').hide();
			$('#desktopWindow').show();
			$('#belona-background').show();
		}
	}

	checkScreenSize();

	function validateData() {
	    var email = $('#email').val();
	    var emailReg = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	    var emailOK = false;
	    
	    if( !emailReg.test( email ) ) {
	        //alert('Please enter valid email');
	        $('#login-standard').hide();
	        $('#login-error').show();
	    } else {
        	//alert('Thank you for your valid email');
	        $('#login-standard').hide();      
	        $('#login-error').hide();	          	
        	$('#login-confirmed').show();
        	emailOK = true;
        }

	    var password = $('#password').val();
	    var passwordReg = /((?=.*\d)(?=.*[a-z])(?=.*[!@#$%&*)()]).{6,20})/;
	    var passwordOK = false;
	    
	    if( !passwordReg.test(password) ) {
	        //alert('Please enter valid password');
	        $('#password-standard').hide();
	        $('#password-error').show();
	    } else {
        	//alert('Thank you for your valid password');
            $('#password-standard').hide();        	
 	        $('#password-error').hide();           
        	$('#password-confirmed').show();
        	passwordOK = true;
        }

        $('#loginButton').css('background', '').prop("disabled", false);

        if(emailOK && passwordOK) {
        	$('.downloadHeader').show();
        	$('.login').hide();
        }
    }   
	
	  

});