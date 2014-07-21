var Person = require("./person.js");
var Property1 = require("../property_types/Property.js");

function Manager(name, contact) {
  Person.apply(this, arguments);
  this.properties = [];
}


Manager.prototype.addProperty = function(property) {
  if (property instanceof Property && property.manager === undefined) {
    property.manager = this;
    return this.properties.push(property);
  } else {
    console.log("Something went wrong. Please choose an empty building.");
  }
};

Manager.prototype.removeProperty = function(property) {
  for (i = 0; i < this.properties.length; i++) {
    if (this.properties[i] === property) {
      this.properties.splice(i, 1);
      property.manager = undefined;
    }
    return this.properties;
  }
};
module.exports = Manager;
