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
		
 }
 
  
 $(document).ready(function () {
   $("#btnSubmit").click(function(){
        $(".1").hide();
    });
	 $("#btnSubmit2").click(function(){
        $(".2").hide();
    });
	 $("#btnSubmit3").click(function(){
        $(".3").hide();
    });
	 $("#btnSubmit4").click(function(){
        $(".4").hide();
    });
	 $("#btnSubmit5").click(function(){
        $(".5").hide();
    });
	 $("#btnSubmit6").click(function(){
        $(".6").hide();
    });
	 });
	 
 function myFunction() {
  location.reload();
}

  
