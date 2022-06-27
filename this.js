/* 암시적 바인딩 */
// node js에는 this -> global
// 브라우저에서 전역 공간의 this는 window
// this는 브라우저와 node에서 각각 다름

// 1. 전역 공간
// 2. 함수
// 3. 메서드

function func() {
    console.log(this); // 전역 공간에서 바라보는 this와 같음 
}

// $('h1').addEventListener('click', function() {
//     console.log(this); // 이런 경우에서의 this는 target
// })

func();

const obj = {
    name: 'obj',
    method: function() {
        return this.name; // 호출되는 대상인 객체를 나타냄
    }
}

console.log(obj.method());


/* 명시적 바인딩 */
// call

// JS에서 var 키워드는 윈도우 객체에 바로 박히기 때문에(전역 객체에 속해버리기 때문에) 안전 X
const person1 = {
    name: 'brie',
    sayName: function() {
        return this.name + '입니다';
    },
}

const person2 = {
    name: 'ryan',
    sayName: function() {
        return this.name + '입니다';
    },
}

function sayFullname(firstName) {
    return firstName + this.sayName();
}

// 첫 번째 인자: 명시적으로 조작하고 싶은 this의 대상
// 두 번째 인자: 원본의 함수가 받는 인자
const res1 = sayFullname.call(person1, 'shin');
const res2 = sayFullname.call(person2, 'shin');
console.log(res1);
console.log(res2);

// apply : 배열을 인자로 받을 수 있음 (원본 함수가 배열을 arg로 취하는 경우)
function saySomething(firstName) {
    return arguments[1] + this.sayName();
}

const res3 = saySomething.apply(person1, ['가', '나']);
console.log(res3);

// bind
const sayFullnamePerson1 = sayFullname.bind(person1);
const sayFullnamePerson2 = sayFullname.bind(person2);

console.log(sayFullnamePerson1('신'));
console.log(sayFullnamePerson2('신'));