
/*
var input = "25 + 37 - 18 = ?";


//turn regular text into decimal character codes

ascii(input);

function ascii (input) { 
	for(var i = 0; i < input.length; i++) {
		console.log(input.charCodeAt(i)); 
	}
}
*/

//var input = [0x47, 0x72, 0x65, 0x65, 0x74, 0x69, 0x6E, 0x67, 0x73, 0x21];
var input = [0x32, 0x30, 0x31, 0x36, 0x20, 0x69, 0x73, 0x20,
0x61, 0x20, 0x6c, 0x65, 0x61, 0x70, 0x20, 0x79, 0x65, 0x61, 0x72];

getText(input);

function getText (input) { 
	var text = "";

	input.forEach(function(charCode) {
		decCharCode = parseInt(charCode, 10);
		text += String.fromCharCode(decCharCode);
	});

	console.log(text); 
}





