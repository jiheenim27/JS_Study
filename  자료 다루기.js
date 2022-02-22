// 자료 다루기 
const data = {
    squadName: 'Super hero squad',
    homeTown: 'Metro City',
    formed: 2016,
    secretBase: 'Super tower',
    active: true,
    members: [
        {
            name: 'Molecule Man',
            age: 29,
            secretIdentity: 'Dan Jukes',
            powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast']
        },
        {
            name: 'Madame Uppercut',
            age: 19,
            secretIdentity: 'Jane Wilson',
            powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast']
        },
        {
            name: 'Eternal Flame',
            age: 100,
            secretIdentity: 'coco',
            powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast']
        }
    ]
}

console.log(Object.keys(data)); // key를 배열 형태로 반환

console.log(Object.values(data)); // 객체가 가지는 속성의 값들로 이루어진 배열 리턴

console.log(Object.entries(data)); // 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 리턴

for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
}

/*
 *  unshift => 배열의 앞에 요소 추가
 *  push => 배열의 끝에 요소 추가
 *  shift => 배열의 앞에 요소 제거
 *  pop => 배열의 끝에 요소 제거
 *  splice => 배열의 인덱스를 기반으로 요소 추가 및 삭제 
*/

const arr = ['one', 'two', 'three'];

arr.push(1)
arr.push(2)
arr.unshift(0)
arr.shift()
arr.pop()
arr.splice(1, 2)
arr
arr.splice(1, 0, 'Feb') // inserts at index 1
arr.splice(2, 1, 'May') // replaces 1 element at index 4

/* 
 * concat() => 인자로 주어진 배열이나 값들을 기존 배열에 합쳐 새 배열을 리턴
*/

arr
const arr2 = ['so', 'me', 'thing'];
const arr3 = arr.concat(arr2);

/*
 * 배열구조분해 : ex) [ ...array, 'Ts', 'Java']
 */

const arr4 = [...arr, ...arr2]; // 위 concat 코드와 같은 동작

/*
 * 배열 - 고차함수로 조작
 * map
 * filter
 * reduce
 */

const langs = ['JS', 'HTML', 'CSS'];
const newLangs = langs.map(function(lang) {
    return lang.toLowerCase() + ' 언어'
});
// map은 인자로 함수를 받음. 그 함수의 return 값은 배열 안 각 항목에 들어가게 됨.
newLangs

// filter -> 특정 조건에 맞는 배열 생성 
// filter은 인자로 조건이 들어간 함수를 받음.

const filterArr = ['JS', 'HTML', 'CSS', 0, 1, 2, 3];

const numbers = filterArr.filter(function(el) {
    if (typeof el === 'number') {
        return el
    }
});

const isNumber = function (el) {
    if (typeof el === 'number') {
        return true
    }
};
numbers;

const numbers2 = filterArr.filter(isNumber);
numbers2;

const strings = filterArr.filter((el) => (typeof el === 'string')); 
strings;

const isString = (el) => typeof el === 'string';

const strings2 = filterArr.filter(isString);
strings2;


// reduce => 누적된 값을 만들때 용이. 함수를 인자로 받음. 
// reduce(함수, 초기값)

function sumTotal(...numbers) {
    return numbers.reduce(function(total, current) {
        return total + current // 리턴된 값이 total로 들어감. total에는 초기값, current는 현재값 
    }, 0)
}

function arrSumTotal(...nums) {
    return nums.reduce((total, current) => total + current, 0);
}

console.log(sumTotal(1, 2, 3, 4, 5, 6, 7));
console.log(arrSumTotal(1, 2, 3, 4, 5, 6, 7));

/*
 * sort
 */

const nums = [4, 2, 5, 1, 3];

const orderNums = nums.sort(function(a, b) {
    return a - b;
})

orderNums;

const odn = nums.sort((a, b) => a - b);
odn

// 문자열 비교
// 문자열 비교시 위처럼 하면 unicode 순으로 되기 때문에 의도한 결과가 나오지 않을 수 있음
const words = ['다', '가', '나'];
const orderWords = words.sort((a, b) => a.localeCompare(b));

orderWords;

const 내림차순 = (a, b) => b.localeCompare(a);
const orderWords2 = words.sort(내림차순);

orderWords2;

/*
 * 배열 - 값 검색 
 */

const members = ['지히', '지희', 'jihee'];

const result = members.find(function(member) {
    return member === '지히';
})

const result2 = members.findIndex(function(member) {
    return member === '지히';
})

const result3 = members.includes('지히');

result;
result2;
result3;
