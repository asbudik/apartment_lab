var Property = require("./property.js");
var inherit = require("../inherit.js");
var Unit = require("../unit.js");



function ApartmentBuilding(address, units) {
  Property.apply(this, arguments)
  for (i = 1; i <= units; i += 1) {
    this.units.push(new Unit(i, address, 600, 1100));
  }
}

inherit(ApartmentBuilding, Property);

module.exports = ApartmentBuilding;