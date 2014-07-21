function Unit (number, building, sqft, rent) {
  // set params above using this
  this.tenat = null;
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
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