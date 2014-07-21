var Person = require("./person.js");
var Property = require("../property_types/Property.js");

function Manager(name, contact) {
  Person.apply(this, arguments);
  this.properties = [];
}


Manager.prototype.addProperty = function(property) {
  console.log("property.constructor", property.constructor)
  if (property instanceof Property) {
    return this.properties.push(property);
  } else {
    console.log("That's not a real building.");
  }
};

Manager.prototype.removeProperty = function(property) {
  for (i = 0; i < this.properties.length; i++) {
    if (this.properties[i] === property) {
      this.properties.splice(i, 1);
      property.manager = undefined;
    } else {
      console.log("No such property exists");
    }
    return this.properties;
  }
};
module.exports = Manager;
