var obj1 = {
    name: 'obj1',
    func: function () {
        var self = this;
        return function () {
            console.log(self.name);
        };
    }
};

var callback = obj1.func();
setTimeout(callback, 1000);

var obj2  = {
    name: 'obj2',
    func: obj1.func
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);

var obj3 = {name: 'obj3'};
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);