const repeatString = function(string, num) {
    let stringHolder = ""
    for (i = 0; i < num; i++) {
        stringHolder = stringHolder.concat(string);
    };
    return stringHolder;
};

// Do not edit below this line
module.exports = repeatString;
