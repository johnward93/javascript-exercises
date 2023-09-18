const sumAll = function (first, second) {
    let final = 0;
    if (typeof first != "number" || typeof second != "number" || first < 0 || second < 0) {
        return "ERROR"
    }
    else if (first > second) {
        for (let i = arguments[1]; i <= arguments[0]; i++) {
            final = final + i;
        }
    }
    else {
        for (let i = arguments[0]; i <= arguments[1]; i++) {
            final = final + i;
        }
    }
    return final;

};

// Do not edit below this line
module.exports = sumAll;
