var Person = require("./person.js");

function Tenat(name, contact) {
  Person.apply(this, arguments);
  this.references = [];
};

Tenat.prototype.addReference = function(reference){
  if (reference instanceof Person) {
  	return this.references.push(reference);
  }
};

module.exports = Tenat;