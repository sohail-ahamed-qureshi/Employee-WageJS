//constants
const PART_TIME = 4;
const FULL_TIME = 8;
const WAGE_PER_HR = 20;
const WORKED_FULL = 1;
const WORKED_HALF = 2;
const MAX_WORKING_HOURS = 100;
//variables
let empWage,
  workingHours = 0,
  totalWorkingHours = 0;
let workingDays = 20;
let empDailyWageArray = new Array();

while (workingDays != 0) {
  let empCheck = Math.floor(Math.random() * 3);
  workingHours = GetHours(empCheck);
  totalWorkingHours += workingHours;
  empDailyWageArray.push(GetDailyWage(workingHours));
  if (workingHours >= MAX_WORKING_HOURS) {
    workingHours = MAX_WORKING_HOURS;
    break;
  }
  workingDays--;
}
//7A-calculating Daily wage
empWage = GetDailyWage(totalWorkingHours);
console.log("Employee Wage: " + empWage);

//7B-display day with wage using map
let daywithwageArray = empDailyWageArray.map(display);
console.log("Employee wage for Month with days:")
console.log(daywithwageArray);

//7C-Show days with full time wage of 160 using filter funtion
let fullTimeWageArray = daywithwageArray.filter(fullTimeFuntion);
console.log("Employee wage when Full time earned:")
console.log(fullTimeWageArray);

//7D- Show first occurance of full time wage.
console.log("First full time wage: "+daywithwageArray.find(firstFullTime));

//7E- check emp wage full time is truely holding full time
console.log("Check all elements have full time: "+daywithwageArray.every(isAllFullTime));

//7F- check emp wage is there any part time 
console.log("Check elements are part time: "+daywithwageArray.some(isPartTime));

//7G- check Number of days employee worked 
console.log("Check number of days employee worked: "+empDailyWageArray.reduce(totalWorkedDays, 0));

// functions
function totalWorkedDays(numOfDays, empWage){
  if(empWage > 0) return numOfDays+1;
  return numOfDays;
}

function isPartTime(empWage){
  return empWage.includes("80");
}

function isAllFullTime(empWage){
  return empWage.includes("160");
}

function firstFullTime(empWage){
  return empWage.includes("160");
}

function fullTimeFuntion(empWage) {
  return empWage.includes("160");
}

function display(empWage, counter) {
  return "Day: " + counter + " Wage: " + empWage;
}

function GetDailyWage(workingHours) {
  return workingHours * WAGE_PER_HR;
}

//function to get emphours
function GetHours(empCheck) {
  switch (empCheck) {
    case WORKED_FULL:
      //employee is present and full time
      return FULL_TIME;
    case WORKED_HALF:
      //employee is present and part-time
      return PART_TIME;
    default:
      //employee is absent
      return 0;
  }
}
