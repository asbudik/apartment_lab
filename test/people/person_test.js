var expect = require("chai").expect,
    Person = require("../../src/people/person.js");
    Manager = require("../../src/people/manager.js");
    Property = require("../../src/property_types/Property.js");


describe("Person", function(){
  describe("#name", function() {
    it('should set name', function() {
    	var bob = new Person("bob", "num");
    	expect(bob.name).to.eql("bob");
    })

  })
});

describe("Manager", function() {
	describe("#addProperty", function() {
		it('should add to array this.properties if object', function() {
      var prop = new Property("berk");
      var manager = new Manager("boab", "asdf");
      manager.addProperty(prop);
      expect(manager.properties).to.eql([prop]);
    })
	})
	describe("#removeProperty", function() {
		it('should remove chosen property from properties', function() {
			var removeP = new Property("home");
			var tim = new Manager("tim", "con");
			tim.addProperty(removeP);
			tim.removeProperty(removeP);
			expect(tim.properties).to.eql([])
		})
	})
})

describe("Property", function() {
	describe("#setManager", function() {
    it('should set a certain manager to manage property');
	})
})