$(document).ready(function () {
	
	/*loading delay*/
	$('#loginButton').click(function(){

		$('#loading').show(0).delay(5000).hide(0);
		setTimeout(validateData, 5000)
	});



	function validateData(){
	    var email=$('#email').val();
	    console.log(email);
	    var emailReg = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	    
	    if( !emailReg.test( email ) ) {
	        alert('Please enter valid email');
	        $('#login-standard').hide();
	        $('#login-error').show();
	    } else {
        	alert('Thank you for your valid email');
	        $('#login-standard').hide();      
	        $('#login-error').hide();	          	
        	$('#login-confirmed').show();
        }

	    var password=$('#password').val();
	    console.log(password);
	    var passwordReg = /((?=.*\d)(?=.*[a-z])(?=.*[@#$%]).{6,20})/;
	    
	    if( !passwordReg.test(password) ) {
	        alert('Please enter valid password');
	        $('#password-standard').hide();
	        $('#password-error').show();
	    } else {
        	alert('Thank you for your valid password');
            $('#password-standard').hide();        	
 	        $('#password-error').hide();           
        	$('#password-confirmed').show();
        }
    }   
	
	  

});