var Property = require("./property");
var inherit = require("../inherit.js");
var Unit = require("../unit.js");


function TownHouse(address){
  Property.apply(this, arguments);
  this.units.push(new Unit(1, address, 1230, 1800))
};


inherit(TownHouse, Property);

module.exports = TownHouse;