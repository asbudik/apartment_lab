var Property = require("./property.js");
var inherit = require("../inherit.js");
var Unit = require("../unit.js");

function Duplex(address) {
	Property.apply(this, arguments)
	for (i = 1; i < 3; i += 1) {
    this.units.push(new Unit(i, address, 800, 1300));
  }
}

inherit(Duplex, Property);

module.exports = Duplex;