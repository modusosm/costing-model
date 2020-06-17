var inputs = {
  profitLine : 0.15,
}

var totalCost = function() {
  return 123.45;
}

var profitLine = function(totalCost, profitLine) {
  return totalCost * profitLine;
}

var totalProjectCost = function(totalCost) {
  return totalCost * ( 1 + inputs.profitLine );
}

var main = function() {
  return totalProjectCost(totalCost());
}

console.log(main());
