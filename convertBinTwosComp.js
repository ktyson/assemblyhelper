
var input = {
"N":[-4]};



for (var i = 0; i < input.N.length; i++) {
	var output = convertTwosComp (input.N[i]);
	console.log(output);
}

function convertTwosComp  (num) {
	var num1 = convertBase(num, 10, 2);
	var num2 = ~num1 + 1;
	//var num3 = convertBase(num2, 10, 2);

	return num2;
};


function convertBase  (num, F, T) {
	var num1 = parseInt(num, parseInt(F));
	var num2 = num1.toString(parseInt(T));

	return num2;
};
