// static attribute
function Person(name) {
	this.name = name;
	Person.all.push(name);
}

Person.all = [];

Person.prototype.greet = function() {
	return "Hello, my name is", this.name;
}

// static method

function Person(name) {
  this.name = name;
  Person.all.push(name);
}

Person.all = [];
Person.count = function() {
  return Person.all.length;
}

Person.prototype.greet = function() {
  return "Hello, my name is", this.name;
}

// inherit

function Person(name) {
  this.name = name;
  // has own property
}

Person.prototype.greet = function() {
  return "Hello my name is", this.name;
}

function Student(name, course) {
  this.name = name;
  this.course = course;
}

// we want Student to inherit Person prototype properties
Student.prototype = new Person
Student.prototype.constructor = Student;


//dusk




var inherit = function(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

function Quad(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Quad.prototype.perimeter = function() {
  return (this.side1 + this.side2 + this.side3 + this.side4);
}

function Rectangle(width, height) {
  this.side1 = width;
  this.side3 = width;
  this.side4 = height;
  this.side2 = height;
}

// Rectangle.prototype.perimeter = function() {
//   return 2 * (this.side3 + this.side1);
// }
inherit(Rectangle, Quad);

function Square(side) {
  this.side1 = side;
  this.side2 = side;
  this.side3 = side;
  this.side4 = side;
}

inherit(Square, Rectangle);


// car test


var expect = require('chai').expect;
var Car = require('../src/car.js');
var CarOwner = require('../src/car_owner.js');

describe('Car', function() {
  var bob;
  describe('initialization', function() {
    it('has an owner', function() {
      bob = new CarOwner('Bob Loblaw', 100);
      var car = new Car(bob);
      expect(car.owner).to.equal(bob);
    })
  })
})


// carOwner test



var expect = require('chai').expect;
var CarOwner = require('../src/car_owner.js');
var ParkingGarage = require('../src/parking_garage.js');

describe('CarOwner', function() {
  var bob;
  describe('initialization', function() {
    beforeEach(function() {
      bob = new CarOwner('Bob Loblaw', 100);
    })
    it('sets the name correctly', function() {
      expect(bob.name).to.equal("Bob Loblaw");
    })
    it('sets money correctly', function (){
      expect(bob.money).to.equal(100);
    })
  })
  describe('payment', function() {
    it('subtracts from the carOwner\'s money', function() {
      bob.pay(2);
      expect(bob.money).to.equal(98);
    })
  })
  describe()
})

// module

module.exports