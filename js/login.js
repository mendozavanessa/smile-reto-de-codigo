$(document).ready(function() {
	   var $userInput = $('#user_log'), $passwordInput = $('#password_log'), $enter = $('#iniciarSesion'), $smileAccounts = JSON.parse(localStorage.getItem('users')), $indexNumber;
		 console.log($smileAccounts);
		 function userNameValidation(event) {
			 for (var i = 0; i < $smileAccounts.length; i++) {
				 if ($userInput.val() === $smileAccounts[i].name) {
					 $indexNumber = i;
					 return i;
				 }
			 }
		 }
		 function passwordValidation() {
			 for (var i = 0; i < $smileAccounts.length; i++) {
				 if ($passwordInput.val() === $smileAccounts[i].password) {
				 return i;
			 }
		 }
	 }
	 function finalValidation() {
		 return userNameValidation() === passwordValidation();
	 }
	 function enableButton(event) {
		 if (finalValidation()) {
			 event.preventDefault();
			 localStorage.indexNumber = $indexNumber;
			 window.location.replace('../views/redSocialSmile.html');
		 }
	 }
	 $enter.click(enableButton);
	 $userInput.on('input', userNameValidation);
	 $passwordInput.on('input', passwordValidation);
});
