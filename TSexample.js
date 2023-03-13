"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let grade;
let grade2;
let test_total;
grade = "85";
grade2 = 85;
test_total = 100;
let calcpercent = (studentGrade, testTotal) => {
    let percentage = studentGrade / testTotal;
    return `this is your percentage : ${percentage} : yay`;
};
console.log(calcpercent(grade2, test_total));
