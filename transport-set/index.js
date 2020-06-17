var inputs = {
  estimatesAndDataCollection: {
    estimatedNumMods: 704,
    projectModularSF: 250652,
    transportMiles: 75,
    returnTripMiles: 75,
  },
}

var estimatesAndDataCollection = {
  estimatedNumMods: 704,
  projectModularSF: 250652,
  transportMiles: 75,
  returnTripMiles: 75,
}

var transportCosts = {
  farrenInternational: 0,
  jSupor: 0,
  islandFabricator: 0,
  bdsBestGuess: 4000,
}

var craneCosts = {
  mobileCrane: {
    mobilizationCost: 11000, //one time
    craneAndOperator: 15398, //per day
  },
  towerCrane: {
    initialErectionCost: 175000, //lump sum
    disassemblyCost: 175000, //lump sum
    craneRental: 125000, //per month
    operator: 2000, //per day
    craneJumps: 50000, //per jump (7 floors)
  },
}

var modSetCrewCosts = {
  'Iron Worker': { '# of Person':5, 'Hourly/Open Shop': 75, 'Hourly/Union': 125},
  'Carpenter': { '# of Person':3, 'Hourly/Open Shop': 55, 'Hourly/Union': 125},
  'Roofer': { '# of Person':2, 'Hourly/Open Shop': 55, 'Hourly/Union': 125},
  'Contingency': { '# of Person':1, 'Hourly/Open Shop': 75, 'Hourly/Union': 125},
}

var projectNotes = {
  numModsSetPerDay: 8,
  contingency: 5, //percent
  weatherDays: 0,
}

var totalDays = function(numModsSetPerDay, estimatedNumMods, contingency, weatherDays) {
  var numSetDays = numModsSetPerDay / estimatedNumMods;
  var addDays = numSetDays * (contingency / 100);
  return numSetDays + addDays + weatherDays;
}

var transportCost = function(transportCost, estimatedNumMods) {
  return transportCosts * estimatedNumMods;
}

var mobileCrane = function() {
  var mobilization = mobilizationCost;
  var craneAndOperator = craneAndOperator * totalDays();

  return mobilization + craneAndOperator;
}

var towerCrane = function(totalDays) {
    var numWorkingWeeksOnSite = Math.Roundup((totalDays/5), 0);
    var numCraneJumps = 4;
    var erectionAndDisassembly =
}
