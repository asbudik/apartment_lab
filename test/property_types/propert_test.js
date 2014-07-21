var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  Tenat = require("../../src/people/tenat.js"),
  Unit = require("../../src/unit.js");

console.log("Write some test for Property...");

describe("Property", function(){
  describe("#addTenat", function() {
  	it('should add tenant if has enough references', function() {
      var jill = new Tenat("jill", "num")
      var uni = new Unit("123");
      jill.references.push("jim");
      jill.references.push("john");
      expect(uni.length).to.eql(1);
  	})
  })
});