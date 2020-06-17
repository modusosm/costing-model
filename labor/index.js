var inputs = {
  numMods: 704,
  modsPerDay: 5,
  rampUp: 8,
  numTradesWorkers: 70,
  hrsPerWk: 40,
  hourlyRate: 40,

  hrsPerDay: 8,
}

var mddlInputs = {
  designSupportStaffI: {
    numPeople: 1,
    hourlyRate: 175,
  },
  designSupportStaffII: {
    numPeople: 2,
    hourlyRate: 100,
  },
  platformSupportStaffI: {
    numPeople: 1,
    hourlyRate: 200,
  },
  platformSupportStaffII: {
    numPeople: 4,
    hourlyRate: 125,
  },
  sysDesignSupportStaffI: {
    numPeople: 1,
    hourlyRate: 175,
  },
  sysDesignSupportStaffII: {
    numPeople: 2,
    hourlyRate: 125,
  },
}

var mossinputs = {
  onSiteSupervisor: {
    numPeople: 1,
    hourlyRate: 250,
  },
  projectManager: {
    numPeople: 1,
    hourlyRate: 125,
  },
  designSupportStaffI: {
    numPeople: 1,
    hourlyRate: 125,
  },
}

var factoryLabor = function(numMods, modsPerDay, rampUp, numTradesWorkers, hrsPerWk, hourlyRate) {
  var modsPerWk = modsPerDay * 5;
  var assemblyWksTier1 = Math.ceil(numMods/modsPerWk, 0);
  var wksToProject = rampUp + assemblyWksTier1;

  var weeklyRate = hourlyRate * hrsPerWk;
  var laborPerWk = weeklyRate * numTradesWorkers;

  var projectCost = (wksToProject + 2) * laborPerWk;
  return projectCost;
}

var staffingCost = function(numPeople, scheduleWks, hrsPerDay,  hourlyRate) {
  var totalManHours = numPeople * scheduleWks * hrsPerDay;
  var totalCost = totalManHours * hourlyRate;
  return totalCost;
}

var modusDesignDigitalLabor = function() {

  var designSupportI = staffingCost(mddlInputs.designSupportStaffI.numPeople, 32, inputs.hrsPerDay, mddlInputs.designSupportStaffI.hourlyRate);
  var designSupportII = staffingCost(mddlInputs.designSupportStaffII.numPeople, 32, inputs.hrsPerDay, mddlInputs.designSupportStaffII.hourlyRate);

  var platformSupportI = staffingCost(mddlInputs.platformSupportStaffI.numPeople, 58, inputs.hrsPerDay, mddlInputs.platformSupportStaffI.hourlyRate);
  var platformSupportII = staffingCost(mddlInputs.platformSupportStaffII.numPeople, 58, inputs.hrsPerDay, mddlInputs.platformSupportStaffII.hourlyRate);
  var sysDesignSupportI = staffingCost(mddlInputs.sysDesignSupportStaffI.numPeople, 58, inputs.hrsPerDay, mddlInputs.designSupportStaffI.hourlyRate);
  var sysDesignSupportII = staffingCost(mddlInputs.sysDesignSupportStaffII.numPeople, 43, inputs.hrsPerDay, mddlInputs.sysDesignSupportStaffII.hourlyRate);

  var modusLabor = designSupportI + designSupportII + platformSupportI + platformSupportII + sysDesignSupportI + sysDesignSupportII;
  return modusLabor;
}

var modusOnSiteStaffing = function() {
  var onSiteSupervisor = staffingCost(mossinputs.onSiteSupervisor.numPeople, 35, inputs.hrsPerDay, mossinputs.onSiteSupervisor.hourlyRate);
  var projectManager = staffingCost(mossinputs.projectManager.numPeople, 35, inputs.hrsPerDay, mossinputs.projectManager.hourlyRate);
  var designSupportI = staffingCost(mossinputs.designSupportStaffI.numPeople, 35, inputs.hrsPerDay, mossinputs.designSupportStaffI.hourlyRate);

  var onSiteStaffing = onSiteSupervisor + projectManager + designSupportI;
  return onSiteStaffing;
}

var inspections = function(numMods, modsPerDay) {
  var modsPerWk = modsPerDay * 5;
  var assemblyWksTier1 = Math.ceil(numMods/modsPerWk, 0);
  var auditInspectionFactor = 1.5;

  var coiPerMod = 40 * inputs.numMods;
  var auditInspections = 800 * (Math.ceil(assemblyWksTier1, 1) + 2) * auditInspectionFactor;
  var consultingService = 250 * 60;

  var pfs = coiPerMod + auditInspections + consultingService;
  console.log('PFS', pfs)

  var arupInspectionFactor = 2;
  var arupInspections = 2500 * (Math.ceil(assemblyWksTier1, 1) + 2) * arupInspectionFactor;

  var arup = arupInspections;
  console.log('ARUP', arup)

  var inspections = pfs + arup;
  return inspections;
}

var flTest = factoryLabor(inputs.numMods, inputs.modsPerDay, inputs.rampUp, inputs.numTradesWorkers, inputs.hrsPerWk, inputs.hourlyRate);
var mddlTest = modusDesignDigitalLabor();
var mossTest = modusOnSiteStaffing();
var inspectionsTest = inspections(inputs.numMods, inputs.modsPerDay);

console.log('factoryLabor', flTest);
console.log('modusDesignDigitalLabor', mddlTest);
console.log('modusOnSiteStaffing', mossTest);
console.log('inspectionsTest', inspectionsTest);
