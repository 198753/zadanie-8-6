// scripts.js

var a = 7,
	b = 10,
	value = (a * a) + (2 * a * b) - (b * b);

console.log('wynik = ' + value);

if (value > 0) {
	console.log('wynik jest dodatni');
} else if (value < 0) {
	console.log('wynik jest ujemny');
} else {
	alert('wynik jest równy zero');
}

