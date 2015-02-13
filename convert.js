

/*
var input = {
"F":2,"T":16,
"N":[10000000001,
  10101100111111,
  1000000100100,
  110010011010]};

var input = {
"F":16,"T":2,
"N":[0x6BD3,
  0xE03F,
  0x5CE,
  0x5555]};

var input = {
"F":10,"T":16,
"N":[59020,
  5555,
  4971,
  9999]};

var input = {
"F":2,"T":10,
"N":[0,
  10,
  101,
  111,
  11,
  1000]};


var input = {
"F":16, "T":10,
"N":[0x48, 0x61, 0x39, 0x25]};
*/

var input = {
"F":10, "T":2,
"N":[3874, 1000000]};

for (var i = 0; i < input.N.length; i++) {
	var output = convertBase (input.N[i]);
	console.log(output);
}

function convertBase  (num) {
	var num1 = parseInt(num, parseInt(input.F));
	var num2 = num1.toString(parseInt(input.T));

	return num2;
};













