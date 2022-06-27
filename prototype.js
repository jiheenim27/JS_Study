/* prototype */
// 자바스크립트는 프로토타입 기반의 언어다. 
const str = 'string';

console.dir(str.prototype);
console.dir(str.__proto__);

const num = 9;
console.dir(num.prototype);
console.dir(str.__proto__);

/* constructor (생성자) */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const jang = new Person('jang', 10);
const shin = new Person('shin', 20);

const res = jang.constructor.name; // Person
console.log(res);

const obj = {};
const arr = [];
const func = function () {};
const string = '';

console.log(obj.constructor.name);
console.log(arr.constructor.name);
console.log(func.constructor.name);
console.log(string.constructor.name);

console.log(obj instanceof Object);
console.log(jang instanceof Person);
console.log(jang instanceof Object);

/* __proto__ (던더 프로토) */
// 프로토타입에 접근할 수 있게 해줌 (getter, setter와 비슷한 느낌)
// 자신의 부모 역할을 하는 상위 프로토타입을 가리킴
Object.getPrototypeOf(obj); // __proto__ 보다 권장하는 방법 (표준)

/* 프로토타입 체인 */
// 특정 속성을 찾을 때 상위 프로토타입을 타고 쭉 올라가 스캔하는데 이를 프로로타입 체이닝이라고 한다. 
const animal = {
    sayName() {
        return 'ANIMAL';
    },
};

console.log(animal.sayName());

const dog = Object.create(animal);
console.log(dog.sayName());

/* 프로토타입 확장 (extends, 상속) */
// 프로토타입으로 굳이 확장 안해도.. class를 쓰는 게 더 나음

// super Class
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.getInfo = function() {
    return this.name + '가(이)' +this.sound + '소리를 낸다.';
}

// Sub Class
function Friends(name, sound) {
    Animal.call(this, name, sound);
}

Friends.prototype = Object.create(
    Animal.prototype,
)
Friends.prototype.constructor = Friends;

const cat = new Friends('고양이', '얘용');
console.log(cat.getInfo());

