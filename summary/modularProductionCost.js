var laborCost = function(inputArray) {
  var sumArray = inputArray => inputArray.reduce((a,b) => a + b, 0)
  return sumArray;
}

var materialCost = function(inputArray) {
  var sumArray = inputArray => inputArray.reduce((a,b) => a + b, 0)
  return sumArray;
}

var materialProductionCost = function(laborInputtArray, materialInputtArray) {
  return laborCost(laborInputArray) + materialCost(materialInputtArray);
}

module.exports = {
  materialProductionCost: materialProductionCost,
}
