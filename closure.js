/* 클로저 */
// 함수와 함수가 선언된 어휘적 환경의 조합
function outer(x) {
    let outerVal = x;

    return function inner(y) {
        let innerVal = y;

        return {
            x: outerVal,
            y: innerVal
        };
    };
}

const res = outer('X')('Y');
console.log(res);

const x = outer('x');
const xy = x('y');
const xz = x('z'); // 함수가 두 번 실행되어야 완전히 종료됨..
console.log(xy);
console.log(xz);

function getOrder(e) {
    let greeting = e;
    return function sayOrderedItem(e) {
        let orderedItem = e;
        return greeting + '!' + ' 주문하신 품목은 ' + orderedItem + '입니다.';
    };
}

const morningOrder = getOrder('좋은 아침입니다');
const morningLatteOrder = morningOrder('라떼');
const morningTeaOrder = morningOrder('우롱티');
console.log(morningLatteOrder);
console.log(morningTeaOrder);


function mulCalc(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

const mul5 = mulCalc(5);
const mulRes = mul5(4);
console.log(mulRes);

/* 은닉화 */
function CounterApp(initValue) {
    let countValue = initValue ?? 0; // nullish 병합 연산자
    // a ?? b -> a가 null과 undefined가 아닐 경우 a. 그 외는 b.
    
    return {
        value: function () {
            return countValue;
        },
        increment: function () {
            countValue++;
        },
        decrement: function () {
            countValue--;
        }
    };
}

const counter1 = CounterApp(1);
const counter2 = CounterApp(2);
console.log(counter1.value());
console.log(counter2.value());

counter1.increment();
counter1.increment();
console.log(counter1.value());

/* 활용 사례 */ 
buttonElement.addEventListener(
    'click',
    debounce(handleClick, 500)
    // debounce는 함수를 리턴
);

function debounce(func, timeout = 300) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => { func.apply(this, args); });
    }
}