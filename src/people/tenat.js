var Person = require("./person.js");

function Tenat(name, contact, money) {
  Person.apply(this, arguments);
  this.references = [];
  this.money = money;
};

Tenat.prototype.addReference = function(reference){
  if (reference instanceof Person) {
  	return this.references.push(reference);
  }
};

module.exports = Tenat;