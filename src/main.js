var prompt = require('sync-prompt').prompt;

var Person = require('./people/person.js'),
  Manager = require('./people/manager.js'),
  Tenat = require('./people/tenat.js');

var Property = require('./property_types/property'),
  Duplex = require('./property_types/duplex.js'),
  ApartmentBuilding = require('./property_types/apartment_building.js'), 
  TownHouse = require('./property_types/town_house.js');

var Unit = require('./unit.js');

var inherit = require('./inherit.js');

// start our apartment module to export later
var App = {};

// Add our types of people to our 
// module
App.Person = Person;
App.Manager = Manager;
App.Tenat = Tenat;

// Add our types of properties
// to our module
App.Property = Property;
App.Duplex = Duplex;
App.TownHouse = TownHouse;
App.ApartmentBuilding = ApartmentBuilding;

// Export our unit
App.Unit = Unit;

module.exports = App;