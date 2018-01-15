$(document).ready(function() {
	 var $email = $('#email'), $nameInput = $('#nameInput'), $password = $('#password'), $radioGirl = $('#radio_girl'), $checkBox = $('#checkBox'), $radioBoy = $('#radio_boy'), $daySelect = $('#day'), $monthSelect = $('#month'), $yearSelect = $('#year'), $doneBtn = $('#done-btn'), $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, $smileAccounts = JSON.parse(localStorage.getItem('users')), inputs = document.getElementsByClassName('formulario__input'), $user, $emailAccount, $passwordAccount, $day, $month, $year, $loginRedirect = $('#login-redirect'), $gender;
	 for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
    	if (this.value.length >= 1) {
        this.nextElementSibling.classList.add('fijar');
      } else {
        this.nextElementSibling.classList.remove('fijar');
      }
    });
  }
	 function goToLogin() {
		 window.location.replace('../views/login.html');
	 };
	 function validateName() {
		 $user = $nameInput.val();
		 return ($nameInput.val().length >= 3);
	 };
	 function validateEmail() {
		 $emailAccount = $email.val();
		 return ($CODE_TO_VALIDATE_EMAIL.test($email.val()));
	 };
	 function validatePassword() {
		 $passwordAccount = $password.val();
		 return ($password.val().length >= 8);
	 };
	 function validateGender() {
		 if ($radioBoy.prop('checked')) {
			 $gender = 'boy';
		 } else if ($radioGirl.prop('checked')) {
			 $gender = 'girl';
		 } else {
			 $gender = '';
		 }
		 return ($radioBoy.prop('checked')) || ($radioGirl.prop('checked'));
	 }
	 function agreeWithTerms() {
		 return ($checkBox.prop('checked'));
	 };
	 function birthday() {
		 $day = $daySelect.val();
		 return ($daySelect.val().length > 0);
	 }
	 function birthMonth() {
		 $month = $monthSelect.val();
		 return ($monthSelect.val().length > 0);
	 }
	 function birthYear() {
		 $year = $yearSelect.val();
		 return ($yearSelect.val().length > 0);
	 }
	 function agreeWithTerms() {
		 return ($checkBox.prop('checked'));
	 }
	 function finalValidation() {
		 return validateEmail() && validateName() && validatePassword() && agreeWithTerms() && validateGender() && birthday() && birthMonth() && birthYear();
	 }
	 function enableDisable(event) {
		 if (finalValidation()) {
			 var config = {
				 apiKey: 'AIzaSyBFn2oMYmLCbIg6G0p6dLrgQpF7-9pjV8M',
				 authDomain: 'smile-social-network.firebaseapp.com',
				 databaseURL: 'https://smile-social-network.firebaseio.com',
				 projectId: 'smile-social-network',
				 storageBucket: 'smile-social-network.appspot.com',
				 messagingSenderId: '648080052241',
			 };
			 firebase.initializeApp(config);
			 // Get elements
			 $smileAccounts.unshift({
				 name: $user,
				 email: $emailAccount,
				 password: $passwordAccount,
				 day: $day,
				 month: $month,
				 year: $year,
				 gender: $gender,
			 });
			 localStorage.setItem('users', JSON.stringify($smileAccounts));
			 // Get email and pass
			 const fire_email = document.getElementById('email').value;
			 const fire_pass = document.getElementById('password').value;
			 const auth = firebase.auth();
			 // Sign in
			 const promise = auth.createUserWithEmailAndPassword(fire_email, fire_pass);
			 // Add a realtime listener
			 firebase.auth().onAuthStateChanged(firebaseUser => {
				 if (firebaseUser) {
					 console.log(firebaseUser);
					 window.location.replace('../views/principalView.html');
				 } else {
					 console.log('not logged in');
				 }
			 });
		 }
	 }
	 $email.on('input', validateEmail);
	 $nameInput.on('input', validateName);
	 $checkBox.on('click', agreeWithTerms);
	 $doneBtn.click(enableDisable);
	 $daySelect.change(birthday);
	 $monthSelect.change(birthMonth);
	 $yearSelect.change(birthYear);
	 $loginRedirect.click(goToLogin);
});
