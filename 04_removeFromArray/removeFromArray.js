const removeFromArray = function(arr, ...items) {
    //Remove only the first instance of the item
    for (item of items) {
        if (arr.includes(item))
            arr.splice(arr.indexOf(item), 1);
    }
    return arr;
}

console.log(removeFromArray([1,2,3,4], 1, 'q', undefined, 3, '')); 

// Do not edit below this line
module.exports = removeFromArray;
