
"use strict";

//VALIDATING FORM
function validate()
{
	
	var result = true;

	var isA = document.getElementById("A").checked;
	var isB = document.getElementById("B").checked;
	var isC = document.getElementById("C").checked;
	var isD = document.getElementById("D").checked;
	var Question4 = document.getElementById("Q4").value;
	var Question5 = document.getElementById("Q5").value;

	var firstname = document.getElementById("Given_name").value;
	var lastname = document.getElementById("Family_Name").value;
	var studentID = document.getElementById("Student_ID").value;

	if(firstname != "")
	{

		result = true;
	}

	if(lastname != "")
	{

		result = true;
	}

	if(studentID != "")
	{

		result = true;
	}

	if(isA)
	{
		result = true;
	}
	else if(isB)
	{
		result = true;
	}
	else if(isC)
	{
		result = true;
	}
	else if(isD)
	{
		result = true;
	}

	if(!result)
	{
		showError("q3-error", "You must select an answer!");
		result = false;
	}
	

	if(Question4 == "")
	{
		showError("q4-error", "You must select an answer!");
		result = false;
	}

	if( Question5 == "")
	{
		showError("q5-error", "This cannot be blank!");
		result = false;
	}


	return result;

}

//Error Message
function showError(errorElement, err_msg)
{
	document.querySelector("." + errorElement).classList.add("display-error");
	document.querySelector("." + errorElement).innerHTML = err_msg;
}

//Clear Error Messages
function clearError()
{
	var errors = document.querySelectorAll(".error");
	for(let error of errors)
	{
		error.classList.remove("display-error");
	}
}

//Calculating marks
// function checkMarks()
// {
// 	var score = 0;

// 	var q1 = document.QuizForm.q1.value;
// 	var q2 = document.QuizForm.q2.value;
// 	var q3 = document.QuizForm.q3.value;
// 	var q4 = document.QuizForm.q4.value;
// 	var q5 = document.QuizForm.q5.value;

// 	if(q1 == "Warding Cunning".toLowerCase()){score++}
// 	if(q2 == "1995"){score++}
// 	if(q3 == "asynchronous collaborations".toLowerCase()){score++}
// 	if(q4 == "wikipedia".toLowerCase()){score++}
// 	if(q5 == "RoadMaps".toLowerCase()){score++}
	
// 	return score;

// }

function storeData(firstname,lastname,studentID)
{

	if(typeof(Storage) != undefined)
	{
	window.localStorage.setItem("firstname", firstname);
	//window.localStorage.setItem('Family_Name',lastname);
	//window.localStorage.setItem('Student_ID', StudentID);
	}
}

function init()
{

	var QuizForm = document.getElementById("quizForm");
	QuizForm.addEventListener("Submit", function(event){
		clearError();
		if(validate() == false)
		{
			
			event.preventDefault();
		}
		else
		{
			QuizForm.onsubmit = storeData;
			return true;
		}
	}, true);

	QuizForm.onsubmit = validate;


}

window.onload = init;



