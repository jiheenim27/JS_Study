// 함수 
// 함수 선언문
function func() { 

}

const obj = {
    // 메서드
    prop: function() {

    }
}

// 생성자 함수 
function MyObj() {
    
}

// 화살표 함수 (ES2015+, ES6)
const arrowFunc = () => {
    return '문자열'
    /* js의 함수와 동작방식 등이 많이 다르다 */
}

// 기명 함수 표현식
const func1 = function func() {
    return 'func';
}

// 익명 함수 표현식
const func2 = function() {
    return 'func';
}

// 매개변수와 인자 다루기 
function func3(objP) {
    const p1 = objP.p1;
    const p2 = objP.p2;
    const p3 = objP.p3;
    const p4 = objP.p4;
    console.log(p2, p4);

    return p2;
} // 객체도 인자로 넣을 수 있음 !

const obj2 = {
    p2: 'P2',
    p4: 'P4'
}

const result = func3(obj2);

console.log(result);

// arguments
function arg() {
    return arguments;
}
console.log(arg(1,2,3,4));

const func4 = function() {
    const convertArr = Array.from(arguments);
    return convertArr.reduce((prev, curr) => prev + curr)
}
console.log(func4(1,2,3,4,5));

// rest parameter
const func5 = (first, second, ...nums) => {
    console.log(first);
    console.log(second);
    console.log(Array.isArray(nums));
    return nums.reduce((prev, curr) => prev + curr);
}
console.log(func5(1,2,3,4,5));

