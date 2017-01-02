/*var colors = [
	'white bg-blue',
	'white bg-red',
	'white bg-orange',
	'white bg-purple',
	'white bg-aqua',
	'white bg-lime',
	'white bg-olive',
	'white bg-fuchsia',
	'white bg-maroon',
	'bg-yellow',
	'white bg-green',
	'white bg-gray',
	'border'
];*/

var colors = [
	'blue',
	'black',
	'navy',
	'olive',
	'red',
	'fuchsia',
	'purple',
	'maroon',
	''
];

function chooseOne(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}
