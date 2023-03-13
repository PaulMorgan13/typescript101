"use strict";
let student_info = (info) => {
    let enrolled = info.is_enrolled ? "" : "not";
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled`;
};
console.log(student_info({
    student_id: 13,
    first_name: "paul",
    last_name: "morgan",
    middle_name: "robert",
    is_enrolled: false
}));
