/*
// Bind this function to main page if you have just 
1- create a function 
2- cal module.exports(nam of function)
3- go to main page and use the page name with require
4- create a varible inside any part we want to use

*/
// If we have just one method
// module.exports = getDate;

// If we have more than one method
/*
// Way 1 to declear the method 
module.exports.getDate = getDate;

function getDate() {
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-us", options);
    return day;
}
*/
// Way 2 to declear the method 
exports.getDate = function getDate() {
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-us", options);
    return day;
}


// we call other method like below
/*
// Way 1 to declear the method
module.exports.getDay = getDay;
function getDay() {
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long"
    }
    var day = today.toLocaleDateString("en-us", options);
    return day;
}
*/

// Way 2 to declear the method
exports.getDay = function getDay() {
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long"
    }
    var day = today.toLocaleDateString("en-us", options);
    return day;
}