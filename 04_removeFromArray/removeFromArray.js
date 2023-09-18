const removeFromArray = function (arr, itemToBeRemoved) {
    newArray = arr;
    for (let i = 1; i < arguments.length; i++) {
        if (newArray.includes(arguments[i])) {
            itemIndex = newArray.indexOf(arguments[i]);
            newArray.splice(itemIndex, 1);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
