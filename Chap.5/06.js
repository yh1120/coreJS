var fruits = ["apple", "banana", "peach"];
var $ul = document.createElement("ul");

// 콜백 함수를 내부함수로 선언해서 외부 변수를 직접 참조

// fruits.forEach(function(fruit) {
//   var $li = document.createElement("li");
//   $li.innerText = fruit;
//   $li.addEventListener("click", function() {
//     alert("your choice is " + fruit);
//   });
//   $ul.appendChild($li);
// });

// bind로 이벤트 객체가 아닌 fruit 넘겨줌. 클로저 발생하지 않음

// var alertFruit = function(fruit) {
//   alert("your choice is " + fruit);
// };

// fruits.forEach(function(fruit) {
//   var $li = document.createElement("li");
//   $li.innerText = fruit;
//   $li.addEventListener("click", alertFruit.bind(null, fruit));
//   $ul.appendChild($li);
// });

// 고차함수 사용

var alertFruitBuilder = function(fruit) {
  return function() {
    alert("your choice is " + fruit);
  };
};

fruits.forEach(function(fruit) {
  var $li = document.createElement("li");
  $li.innerText = fruit;
  $li.addEventListener("click", alertFruitBuilder(fruit));
  $ul.appendChild($li);
});

document.body.appendChild($ul);
