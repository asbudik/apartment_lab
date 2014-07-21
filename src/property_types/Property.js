// var Manager = require("../people/manager.js");
var Unit = require("../unit.js");
var Tenat = require("../people/tenat.js")

function Property(address) {
  this.address = address;
  this.units = [];
  this.manager;
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  console.log("person.constructor: ", person.constructor);
  if (person instanceof Manager && this.manager === undefined) {
    person.addProperty(this);
  } else {
    console.log("Something's wrong, choose another manager.")
  }
};

Property.prototype.getManager = function(){
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenat) {
  // add tenat but check to make sure there
  // is a manager first and a tenat has 2 references
  if ( tenat.references.length > 1 && unit === null) {
    return unit.push(tenat);
  }
};

Property.prototype.removeTenat = function(unit, tenat) {
  // remove tenat
  if (unit.tenat === tenat) {
    unit.tenat = null;
  } else {
    console.log("Something went wrong.");
  }
};

Property.prototype.availableUnits = function(){
  var availableUnitCount = 0;
  for (var i = 0; i < this.units.length; i += 1) {
    if (unit.available === true) {
      availableUnitCount += 1;
    }
  }
  return console.log("This unit has " + availableUnitCount + 
  "units available.")
}

Property.prototype.rentedUnits = function(){
  var rentedUnitCount = 0;
  for (var i = 0; i < this.units.length; i += 1) {
    if (unit.available === false) {
      rentedUnitCount += 1;
    }
  }
  return console.log("This unit has " + rentedUnitCount + 
  "units rented out.")
}


module.exports = Property;