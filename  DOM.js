// DOM
// html이라는 문서를 js로 모델링 한 게 DOM모델이고, 인터페이스를 하나하나 잘게 쪼개면 그 단위가 node 단위이고, 이 node는 트리구조로 되어있다. 

const li = document.querySelector('li');

// DOM 선택
document.getElementById() 

// 주어진 클래스를 가진 모든 자식 엘리먼트를 반환
document.getElementsByClassName()

document.getElementsByTagName()


document.querySelector() // 제공한 css 선택자를 만족하는 첫 번째 element 객체 반환
document.querySelectorAll() // 선택자를 만족하는 모든 요소의 목록 반환

const nav = document.querySelector('#nav-access');
nav.querySelectorAll('li');

const searchButton = document.querySelector('.gN089b');
searchButton.classList.add('something');
searchButton.classList.remove('gN089b');
searchButton.classList.contains('something');
searchButton.textContent;
searchButton.textContent = 'what';

const partnerBox = document.querySelector('.partner_box');
const el = document.querySelector('.link_partner')
partnerBox.removeChild(el);

const el2 = document.createElement('div');
el2.textContent = 'NEW';
partnerBox.appendChild(el2);

partnerBox.innerHTML = '<h3>hi!</h3>'
