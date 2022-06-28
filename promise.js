/* 비동기와 동기 */
// 자바스크립트는 싱글 스레드 언어.
// 따라서 한 번에 한 작업만, 하나의 main thread에서 처리될 수 있음. 다른 작업은 앞선 작업이 끝나야 수행됨.

console.log('1');

setTimeout(() => {
    console.log('2');
}, 1000);

console.log('3');

/* callback */
// Element.addEventListener('click', (e) => {
//     console.log(e);
// });

// function greeting(name) {
//     alert('Hello '+ name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name');
//     callback(name);
// }

// processUserInput(greeting);

/* promise & resolve & reject */ 
// promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냄 
// 비동기 연산이 종료된 이후 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있다.
 const promiseResolve = Promise.resolve('성공');
 const promiseReject = Promise.reject('실패');

 promiseResolve
    .then((resolve) => {
        console.log(resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log(resolve);
        return promiseReject;
    })
    .catch((reject) => {
        console.log(reject);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log(resolve);
        return promiseResolve;
    })

    
/* new promise */

const one = Promise.resolve('1');
const two = new Promise((resolve) => {
    setTimeout(() => {
        resolve('2');
    }, 2000);
})
const three = Promise.resolve('3');

one
    .then((res) => {
        console.log(res);
        return two;
    })
    .then((res) => {
        console.log(res);
        return three;
    })
    .then((res) => {
        console.log(res);
    })
    .finally(() => {
        console.log('End');
    })

const starbucks = function (coffeeName) {
    return new Promise((resolve, reject) => {
        if (coffeeName === '아메리카노') {
            resolve('아메리카노 한 잔입니다.');
        } else {
            reject('주문 실패입니다.');
        }
    });
};

starbucks('아메리카노')
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej))
    .finally(()=>console.log('감사합니다.'));

/* async & await */
// async function 선언은 하나의 비동기 함수를 정의한다.
// async 함수에는 await 식이 포함될 수 있다. 이 식은 async 함수의 실행을 일시 중지하고
// 전달 된 promise의 해결을 기다린 다음 async 함수의 실행을 다시 시작하고 완료한 후 
// 값을 반환한다. await 키워드는 async 함수에서만 유효하다.
// async/await 함수의 목적은 여러 promise의 동작을 동기스럽게 사용할 수 있게 하고, 
// 어떠한 동작을 여러 promise의 그룹에서 간단하게 동작하게 하는 것이다. 

async function americano() {
    try {
        const result = await starbucks('아메리');
        return result;
    } catch (err) {
        console.log(err);
    } finally {
        console.log('감사합니다.')
    }
}

console.log(americano());