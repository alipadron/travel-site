var $ = require('jquery');
var Person = require('./modules/Person');

var p1 = new Person('Ali Padrón', 'green');
p1.greet();

$('h1').remove();
