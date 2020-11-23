function add (a, b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (array) {
	var i;
	var sum=0;
	for (i=0; i<array.length; i++){
		sum += array[i];
	}

	return sum;
}

function multiply (array) {
	var i;
	var sum=1;
	for (i=0; i<array.length; i++){
		sum *= array[i];
	}

	return sum;
}

function power(a,b) {
	var i;
	var sum=1;

	for (i=0; i<b; i++){
		sum *= a;
	}

	return sum;
}

function factorial(a) {

	if (a===0){
		return 1;
	}

	return a * factorial(a-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}