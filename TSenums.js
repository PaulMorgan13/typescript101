"use strict";
var Month;
(function (Month) {
    Month[Month["jan"] = 0] = "jan";
    Month[Month["feb"] = 1] = "feb";
    Month[Month["mar"] = 2] = "mar";
    Month[Month["apr"] = 3] = "apr";
    Month[Month["may"] = 4] = "may";
    Month[Month["jun"] = 5] = "jun";
    Month[Month["jul"] = 6] = "jul";
    Month[Month["aug"] = 7] = "aug";
    Month[Month["sep"] = 8] = "sep";
    Month[Month["oct"] = 9] = "oct";
    Month[Month["nov"] = 10] = "nov";
    Month[Month["dec"] = 11] = "dec";
})(Month || (Month = {}));
function isItSummer(month) {
    let isSummer;
    switch (month) {
        case Month.jun:
        case Month.jul:
        case Month.aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.jun));
