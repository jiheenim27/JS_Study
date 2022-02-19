// 객체

// 싱글 리터럴 객체 
const obj = {
    property: 'value',
    method: function() {},
}

// 생성자 
function NewObject(name) {
    this.name = name;
}

const newObj = new NewObject('name');
const newObj2 = Object.create(Object.prototype,
    {
        name: {
            value: 'jang',
            writable: true, // 덮어쓸 수 있는지 
            enumerable: true, // 열거할 수 있는지 
            configurable: true // 객체 서술자를 수정할 수 있는지 
        }
    });

newObj2.name = 'Kim';

for (const key in newObj2) {
    console.log(key);
}

const obj3 = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: 'value4'
};

const prop = 'prop';

console.log(obj3[prop + 1]);

/* 
* 프로퍼티 열거 
*/
for (const k in obj3) {
    console.log(obj3[k]);
}

// 객체도 자신의 프로토타입에 없는게 있다면 계속 위로 체이닝하게 된다. 
obj3.hasOwnProperty() // 상위에 가진 것들을 체이닝해서 꺼내오지 않도록.
// 상속되거나 확장되어서 사용된 객체의 속성을 꺼내오지 않게 함. 

for (const key in obj3) {
    if (obj3.hasOwnProperty(key)) {
        console.log(obj3[key]);
    }
}

/*
* 프로퍼티 조작
*/

const person = {
    firstName: 'Jihee',
    location: 'KR'
}
 person.lastName = 'Shin'; // 추가

 person.lastName = 'None'; // 수정

 delete person.location; // 삭제

 person


/*
* 프로터피 접근자 (getter, setter)
: 객체를 안전하게 사용하기 위해!
*/

const person2 = {
    _firstName: 'Jihee',
    location: 'KR',

    get firstName() {
        return this._firstName.toUpperCase();
    },

    set firstName(newFirstName) {
        if (typeof newFirstName !== 'string') {
            this._firstName = 'undefined name';
            return;
        }
        this._firstName = newFirstName;
    },

    get fullName() {
        return `${this._firstName}  ${this.lastName}  입니다.`;
    }
}

person2.lastName = 'Shin';
person2.firstName = 123;
person2.firstName = 'Jihee';
console.log(person2.firstName);
console.log(person2.fullName);

/*
* 생성자
*/

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () {
        return this.name + '입니다';
    }
        
}

const me = new Person('jihee', 22, 'Seoul');
const you = new Person('sh', 27, 'Seoul');

console.log(me.getName());
console.log(you.getName());

// ES2015+ 에는 class 나옴






