var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands").innerHTML;

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  console.log(currentBand);
  bandElement = currentBand;

var listItem = document.createElement("li");
var node = document.createTextNode(currentBand);
listItem.appendChild(node);
var position = document.getElementById("boy-bands");
position.appendChild(listItem);




  
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];

  var listItem2 = document.createElement("li");
  var node2 = document.createTextNode(currentVeggie);
  listItem2.appendChild(node2);
  var position2 = document.getElementById("vegetables");
  position2.appendChild(listItem2);

}