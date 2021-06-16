// 05가 잘 이해가 안됨

Array.prototype.map = function (callback, thisArg) {
  var mappedArr = [];
  for (var i = 0; i < this; i++) {
    var mappedValue = callback.call(thisArg || global, this[i], i, this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};
