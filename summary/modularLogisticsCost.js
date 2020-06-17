var transportLogistics = function(inputArray) {
  var sumArray = inputArray => inputArray.reduce((a,b) => a + b, 0)
  return sumArray;
}

var onSiteModStackOperation = function(inputArray) {
  var sumArray = inputArray => inputArray.reduce((a,b) => a + b, 0)
  return sumArray;
}

var materialLogisticsCost = function(transportLogicInputArray, osmsoInputArray) {
  return transportLogistics(transportLogicInputArray) + onSiteModStackOperation(osmsoInputArray);
}

module.exports = {
  materialLogisticsCost: materialLogisticsCost,
}
