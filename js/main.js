function askQuestions() {

var firstName = prompt( 'What is your first name?');
var lastName = prompt( 'What is your last name?');
console.log(firstName+' '+lastName);

var age = prompt('How old are you?'); 
console.log(age);

age = parseInt(age);

if (age >= 18) {
	console.log('User is as adult.');
} else if (age >=13) {
	console.log('User is a teenager.');
}else {
	console.log('User is a child.');
}
if (firstName.toLowerCase() == 'general'&& lastName.toLowerCase() != 'assembly') {
	console.log('Greetings, General!');
	}

}



// When the page has loaded
$(function() { 
	// When the user clicks the img, run askQuestions
	$('img').on('click', askQuestions);

	// When the user clicks an h3
	$('h3'). on( 'click', function()  {

		// Toggle the next element
		$(this).next().slideToggle();

	}); 



}); 