'use strict';

var numberUtil = require('roman-numerals');

var number1 = 'VI';
var number2 = 9;

console.log( 'VI => ' + numberUtil.toArabic( number1 ) );
console.log( '9 =>' + numberUtil.toRoman( number2 ) );
