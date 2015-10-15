'use strict';

var romanNumber = require('roman-numerals');

var number1 = 'VI';
var number2 = 9;

console.log( 'VI => ' + romanNumber.toArabic( number1 ) );
console.log( '9 =>' + romanNumber.toRoman( number2 ) );
