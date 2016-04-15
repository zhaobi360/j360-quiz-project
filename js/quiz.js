var score = 0; 
 function fSubmit() {
	 var correctanswer = document.getElementById("a1")
	 if (correctanswer.checked == true) {
		 score++;
		 alert("Correct! Your score is now " + score)
	 }
	 else {
		 alert("Incorrect! The correct answer is A! Your score is now " + score)
	 }	
	 $('#btnSubmit').attr('disabled','disabled'); 	
 }
  
 function fSubmit2() {
	 var correctanswer = document.getElementById("a7")
	 if (correctanswer.checked == true) {
		 score++;
		 alert("Correct! Your score is now " + score)
	 }
	 else {
		 alert("Incorrect! The correct answer is C! Your score is now " + score)
	 }
	$('#btnSubmit2').attr('disabled','disabled'); 	
 }
 
 function fSubmit3() {
	 var correctanswer = document.getElementById("a9")
     if (correctanswer.checked == true) {
		 score++;
		 alert("Correct! Your score is now " + score)
	 }
	 else {
		 alert("Incorrect! The correct answer is A! Your score is now " + score)
	 }
	 $('#btnSubmit3').attr('disabled','disabled'); 
 }
  
 function fSubmit4() {
	 var correctanswer = document.getElementById("a16")
     if (correctanswer.checked == true) {
		 score++;
		 alert("Correct! Your score is now " + score)
	 }
	 else {
		 alert("Incorrect! The correct answer is D! Your score is now " + score)
	 }
	 $('#btnSubmit4').attr('disabled','disabled'); 
 }
 

 function fSubmit5() {
	 var correctanswer = document.getElementById("a18")
     if (correctanswer.checked == true) {
		 score++;
		 alert("Correct! Your score is now " + score)
	 }
	 else {
		 alert("Incorrect! The correct answer is B! Your score is now " + score)
	 }
	 $('#btnSubmit5').attr('disabled','disabled'); 
		
 }
 
 function fSubmit6() {
	 var correctanswer = document.getElementById("a22")
     if (correctanswer.checked == true) {
		 score++;
		 alert("Correct! Cheers! Your total score is " + score)
	 }
	 else {
		 alert("Incorrect! Oops! it should be B! Your total score is " + score)
	 }
	$('#btnSubmit6').attr('disabled','disabled'); 	
	
}

 function myFunction() {
  location.reload();
}

$(document).ready(function () {
$('#btnSubmit6').click(function(){  
   $('.answer2').show('slow');
});
});