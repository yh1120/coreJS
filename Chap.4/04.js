var newArr = [10, 20, 30].map(function (index, currentValue) {
    console.log(currentValue, index);
    return currentValue + 5;
});
console.log(newArr);