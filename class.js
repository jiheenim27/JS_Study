/* 클래스 */
// 객체를 생성하기 위한 템플릿
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

/* 인스턴스 */
const p1 = new Person('jihee', 20);
console.log(p1.name);
console.log(p1.age);

/* 클래스와 인스턴스 */
// 만일 class를 function으로 구혀한다면,
// person class에 this.getName 이런 식으로 만들어서 각각 인스턴스마다 따로 메소드가 만들어지지 않도록 하자
// prototype으로 설정해주면 됨 -> 불필요한 메모리 낭비 X
// Person.prototype.getName = function() {
//     return this.name + ' 입니다';
// }

// class로 만들 경우에는 그녕 알던 대로 써주면 됨
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 
    
    getName() {
        return this.name + ' 입니다';
    };
}

const jang = new PersonClass('jang', 22);
console.log(jang.getName());

/* 클래스 확장 */
class Animal {
    constructor (name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getInfo() {
        return (
            this.name + '가(이) ' +
            this.sound + '소리를 낸다.'
        );
    };
}

class Friends extends Animal {
    constructor (name, sound) { 
        super(name, sound); // 부모의 생성자 함수를 호출
        // 부모의 메소드들도 다 가져옴
    }
}

const cat = new Friends('고양이', '야옹');
console.log(cat.getInfo());