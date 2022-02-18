// 배열
/* 
    js에서 배열은 객체이다.
    index: value (딕셔너리)
*/

const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]

arr.push(5);
console.log(arr); // [1, 2, 3, 5]

arr[9] = 10;
console.log(arr); // [1, 2, 3, 5, , , , , , 10]

arr2.prop = [6, 7];
console.log(arr2); // [1, 2, 3, prop: [6, 7]]

// length: 배열에서 가장 높은 인덱스를 추적
console.log(arr.length); // 10

// 배열 순회
const arr3 = [1, 2, 3];
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]); // 1, 2, 3
}

// 배열 다루기
const num = [1, 2, 3]

num.push(4) // 배열 끝에 요소 추가
console.log(num); // [1, 2, 3, 4]

num.unshift(0); // 배열 앞에 요소 추가
console.log(num); // [0, 1, 2, 3, 4]

num.indexOf(1); // 배열에서 요소의 인덱스 찾기
console.log(num.indexOf(1)); // 1
console.log(num.indexOf(9)); // -1

num.lastIndexOf(1); // 배열의 끝부터 요소의 인덱스 찾기 

num.includes(1); // 배열에서 요소 포함 여부 확인

num.shift(1); // 배열의 앞 요소 지우기 (값으로)
num.pop(3); // 배열의 끝 요소 지우기 (값으로)

num.splice(2, 1); // 배열에서 특정 인덱스 요소 지우기 ex.2번째 인덱스부터 1개 지우기

// 유사 배열 객체 (Array Like Object)
/* 
    const nodeList = documnet.querySelectAll('li');
    nodeList.push('li'); => error!

    const convertNodeList = Array.from(nodeList);
    convertNodeList.push('oh!'); => ok!
*/


