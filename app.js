
const result = document.getElementById("result");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const multi = document.getElementById("multi");
const divi = document.getElementById("division");
const modu = document.getElementById("mod");


function addition(e){

	 e.preventDefault();
	const num1 = Number(document.getElementById("number1").value);
	const num2 = Number(document.getElementById("number2").value);

	if(num1 === ""){
		alert("Enter a Number");
	}else if(num1 < 0){
		alert("Enter positive Number");
	}else{
		result.style.visibility = "visible";
	}

	document.getElementById("result").innerHTML = num1 + num2;
};

add.addEventListener("click", addition); 


function subtraction(e){

	 e.preventDefault();
	const num1 = Number(document.getElementById("number1").value);
	const num2 = Number(document.getElementById("number2").value);

	if(num1 === ""){
		alert("Enter a Number");
	}else if(num1 < 0){
		alert("Enter positive Number");
	}else{
		result.style.visibility = "visible";
	}

	document.getElementById("result").innerHTML = num1 - num2;
};

sub.addEventListener("click", subtraction); 


function multiplication(e){

	 e.preventDefault();
	const num1 = Number(document.getElementById("number1").value);
	const num2 = Number(document.getElementById("number2").value);

	if(num1 === ""){
		alert("Enter a Number");
	}else if(num1 < 0){
		alert("Enter positive Number");
	}else{
		result.style.visibility = "visible";
	}

	document.getElementById("result").innerHTML = num1 * num2;
};

multi.addEventListener("click", multiplication); 


function division(e){

	 e.preventDefault();
	const num1 = Number(document.getElementById("number1").value);
	const num2 = Number(document.getElementById("number2").value);

	if(num1 === ""){
		alert("Enter a Number");
	}else if(num1 < 0){
		alert("Enter positive Number");
	}else{
		result.style.visibility = "visible";
	}

	document.getElementById("result").innerHTML = num1 / num2;
};

divi.addEventListener("click", division); 


function modulus(e){

	 e.preventDefault();
	const num1 = Number(document.getElementById("number1").value);
	const num2 = Number(document.getElementById("number2").value);

	if(num1 === ""){
		alert("Enter a Number");
	}else if(num1 < 0){
		alert("Enter positive Number");
	}else{
		result.style.visibility = "visible";
	}

	document.getElementById("result").innerHTML = num1 % num2;
};

modu.addEventListener("click", modulus); 








/*sub.addEventListener('click', function(num1,num2){
	return num1-num2;
});
multi.addEventListener('click', function(num1,num2){
	return num1*num2;
});
divi.addEventListener('click', function(num1,num2){
	return num1/num2;
});*/



