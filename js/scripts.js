


(function() {

  var data = [
    {
      name: 'Model Y Long Range',
      price: 54990,
      range: 326,
      acceleration: 4.8,
      selector: 'y1'
    },

    {
      name: 'Model Y Performance',
      price: 61990,
      range: 303,
      acceleration: 3.5,
      selector: 'y2'
    }
  ];

// Package constructor function
function Package(data) {
    this.name = data.name;
    this.price = data.price;
    this.range = data.range;
    this.acceleration = data.acceleration;
    this.selector = data.selector;
    
    this.getFormattedPrice = function () {
      return this.price.toLocaleString();
    };
  }


// Wrapper function for getElementId
  var getEl = function (id) {
    return document.getElementById(id);
  }

// Writes the package object's data to the page
  var writePackageInfo = function(package) {
    // Get reference to DOM elements
    var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      priEl = getEl(selector + '-price'),
      accEl = getEl(selector + '-acceleration'),
      ranEl = getEl(selector + '-range');

      // Write package data to DOM elements
      nameEl.textContent = package.name;
      priEl.textContent = package.getFormattedPrice();
      ranEl.textContent = package.range;
      accEl.textContent = package.acceleration;
  }

//Return today's date, formatted
  function getTodaysDate() {
    var today = new Date();
    return today.toDateString();
  }
  // Wrapper function for getElementId
  var getEl = function (id) {
  return document.getElementById(id);
  }
  dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();

//write package data one-by-one
  var longRange = new Package(data[0]);
  writePackageInfo(longRange);

  var performance = new Package(data[1]);
  writePackageInfo(performance);


}());



