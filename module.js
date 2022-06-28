/* 모듈 */
// 독립적인 특성을 가진 기능 단위의 부품
// 프로그램의 기능을 독립적인 부품으로 분리한 것
// 동시에 여러 다른 모듈과 함께 조합하여 재사용될 수 있음

/* common js (동기적, 서버) */
// 모듈 시스템 중 1
// const Person = require('./module_sub');

// const me = new Person('jang', 10, 'Korea');
// const you = new Person('kim', 20, 'China');

// console.log(me.getName());
// console.log(you.getName());

/*
 * const module = require('module')
 * 
 * module.exports = module
 */

/* amd (브라우저, 비동기) */
// 많이 사용은 X
// Asynchronous Module Definition
// 모듈을 선언하면서 의존하고 있는 모듈을 함께 명시. 비동기적으로 의존 모듈을 불러온다
/**
 * define['modlue'], function(module) {
 *  return function() {
 *  
 *  }
 * }
 */

/* umd */
// Universal Module Definition
// AMD와 CommonJS 두 방식 모두 지원
// 클라이언트, 서버 어디에서나 작동

/* es-module */
// 최신 브라우저가 기본적으로 모듈 기능을 지원
import {a, hello} from './module_sub.js';

console.log(a);
console.log(hello());
