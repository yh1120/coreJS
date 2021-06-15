// return에 의한 클로저의 메모리 해제

var outer = (function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner;
})();
console.log(outer());
console.log(outer());
outer = null;

// setInterval에 의한 클로저의 메모리 해제
(function() {
  var a = 0;
  var intervalId = null;
  var inner = function() {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null;
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();

// eventListner에 의한 클로저의 메모리 해제

(function() {
  var count = 0;
  var button = document.createElement("button");
  button.innerText = "click";

  var clickHandler = function() {
    console.log(++count, "times clicked");
    if (count >= 10) {
      button.removeEventListener("click", clickHandler);
      clickHandler = null;
    }
  };
  button.addEventListener("click", clickHandler);
  document.body.appendChild(button);
})();
