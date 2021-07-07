
//constants
const PART_TIME = 4;
const FULL_TIME = 8;
const WAGE_PER_HR = 20;
const WORKED_FULL = 1;
const WORKED_HALF = 2;
// check for attendence
let empCheck = Math.floor(Math.random() * 3 );
//variables
let empWage, workingHours;
switch(empCheck){
    case WORKED_FULL:
        //employee is present and full time
        workingHours = FULL_TIME;
        console.log("Employee is present for full-time");
        break;
    case WORKED_HALF:
        //employee is present and part-time
        workingHours = PART_TIME;
        console.log("Employee is Present for part-time");
        break;
    default:
        //employee is absent
        console.log("Employee is Absent");
        workingHours = 0;
        break;
}
empWage = workingHours * WAGE_PER_HR;
console.log("Employee Wage: " + empWage);

