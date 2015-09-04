$(document).ready(function(){

var result = null;

for (var i = 1; i <= 100; i++) { 
	if ((i % 3 === 0) && (i % 5 === 0)) {
		result ='<p>FizzBuzz</p>';
	}
	else if (i % 3 === 0) {
		result ='<p>Fizz</p>';
	}
	else if (i % 5 === 0) {
		result ='<p>Buzz</p>'
	}
	else { result ='<p>' + i.toString() + '</p>'; 
	}
	$('body').append(result);
	}
});