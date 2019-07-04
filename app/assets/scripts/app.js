var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes $0 in taxes.');
  }
}

alert('ASDASSAD');

var ali = new Person('Ali Padrón', 'orange');
ali.greet();

var isabel = new Adult('Isabel Argüelles', 'green');
isabel.greet();
isabel.payTaxes();

$('h1').remove();
