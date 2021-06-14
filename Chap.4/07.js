var obj = {
    vals: [1, 2, 3],
    logValues: function(v, i) {
        console.log(this, v, i);
    }
};

obj.logValues(1, 2); // this가 객체로 할당됨. 앞에 .이 있고 호출되었기 때문에
[4, 5, 6].forEach(obj.logValues); // this가 전역임. 메서드 형태여도 호출이 안 되었기 때문에 함수 형태로 들어간다.