// string
var str = 'string';
for (var i = 0; i < str.length; i++) {
    console.log(str[i]); // s, t, r, i, n, g
}
console.log(str[1]); // t
console.log(str.indexOf('t')); // 1

// 문자열과 배열
console.log(str.split('')); // ['s', 't', 'r', 'i', 'n', 'g']
var str2 = ['r','s','e'];
console.log(str2.join('')); //rse
console.log([...str]); // ['s', 't', 'r', 'i', 'n', 'g']

// 템플릿 리터럴
function genHello(name) {
    return `안녕하세요 ${name} 님 반갑습니다`;
}
console.log(genHello('jihee')); // 안녕하세요 jihee 님 반갑습니다

// 호이스팅
console.log(foo);
var foo = 123;
console.log(foo);
{
    var foo = 456;
}
console.log(foo);
/* 
    자바스크립트의 특징: 모든 선언문은 호이스팅된다. 
    호이스팅 -> 모든 선언문이 해당 scope의 선두로 옮겨진 것처럼 동작한다. 
    따라서 모든 선언문이 선언되기 이전에 참조 가능하다.
*/

// 연산자 
console.log(5 * 4); // 20
console.log('My name is ' + 'Jihee'); // my name is Jihee
console.log(3 > 5); // false
console.log((5 > 3) && (2 < 4)); // true
console.log(typeof 'Hi'); // string

console.log(5 == '5'); // true
console.log(5 === '5'); // false

console.log(NaN === NaN) // false
console.log(isNaN(NaN)) // true

var x = 3;
console.log(x % 2 ? '홀수' : '짝수'); // 홀수

// 단축 평가 : 논리 연산의 결과를 결정한 피연산자의 평가 결과를 그대로 반환한다.
console.log('Cat' && 'Dog'); // Dog
console.log('Cat' || 'Dog'); // Cat

// typeof
console.log(typeof('1')); // string


