function Unit (number, building, sqft, rent) {
  // set params above using this
  this.tenat = null;
  this.number = "Unit", number;
  this.building = "Address", building;
  this.sqft = "Square Footage:", sqft;
  this.rent = "Monthly Rent: $" + rent;
}

Unit.prototype.available = function(){
  // check for tenant
  if (this.tenat === null) {
  	console.log("Unit available.");
  	return true;
  } else {
  	console.log(this.tenat + " lives here");
  	return false;
  }
}

module.exports = Unit;