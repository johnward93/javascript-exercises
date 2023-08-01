const removeFromArray = function(arr, itemToBeRemoved) {
    itemIndex = arr.indexOf(itemToBeRemoved);
    arr.splice(itemIndex, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
