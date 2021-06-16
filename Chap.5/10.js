// 객체

// var car = {
//   fuel: Math.ceil(Math.random() * 10 + 10),
//   power: Math.ceil(Math.random() * 3 + 2),
//   moved: 0,
//   run: function() {
//     var km = Math.ceil(Math.random() * 6);
//     var wasteFuel = km / this.power;
//     if (this.fuel < wasteFuel) {
//       console.log("이동불가");
//       return;
//     }
//     this.fuel -= wasteFuel;
//     this.moved += km;
//     console.log(km + "km 이동 (총 " + this.moved + "km)");
//   }
// };

// 함수

var creatCar = function() {
  var fuel = Math.ceil(Math.random() * 10 + 10);
  var power = Math.ceil(Math.random() * 3 + 2);
  var moved = 0;
  var publicMembers = {
    get moved() {
      return moved;
    },
    run: function() {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log("이동불가");
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + "km 이동 (총 " + moved + "km). 남은 연료 : " + fuel);
    }
  };
  Object.freeze(publicMembers);
  return publicMembers;
};

var car = creatCar();

car.run();
console.log(car.moved);
console.log(car.fuel);
console.log(car.power);

car.fuel = 1000;
console.log(car.fuel);
car.run();

car.power = 100;
console.log(car.power);
car.run();

car.moved = 1000;
console.log(car.moved);
car.run();
