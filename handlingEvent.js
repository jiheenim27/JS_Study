/* 이벤트 전파 */
// js 이벤트는 전파된다. 
// 전파되는 방식은 캡쳐(위->아래)와 버블(아래->위) 두 가지로.

/* 이벤트 버블링 (하위에서 상위로 전달되는 전파) */
button.addEventListener('click', (event) => {
    event.stopPropagation(); // 전파 중단
    window.alert('button');
});

/* 이벤트 캡쳐링 */
// addEventListener의 옵션으로 캡쳐링 지정 가능
container.addEventListener('click', (event) => {
    console.warn('DIV 이벤트 발생');
    event.target.style.background = blue;
},
true); // 캡쳐링 사용 유무. true이면 상위요소부터 하위요소로 이벤트 실행됨. false일 경우 반대. (default는 false)

/* 이벤트 위임 */
// (잘못된 예)
const items = document.querySelectorAll('li');
items.forEach((item) => item.addEventListener('click', console.log(item)));
// li의 수가 많아지면 수많은 이벤트 리스너들이 생성됨 -> 메모리 낭비

// (올바른 예) ul에 이벤트를 등록
const items2 = document.querySelector('ul');
items2.addEventListener('click', (event) => {
    if (event.target.nodeName === 'LI') { // 속성 이용
        event.target.style.background = 'blue';
    } else {
        alert('No LI Click');
    }
});

// 코드가 너무 길어질 때는 early return
items2.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'LI') { // 속성 이용
        return;
    } else {
        event.target.style.background = 'blue';
    }
});

// class 이용 가능
items2.addEventListener('click', (event) => {
    // const item = event.target.classList[0]; (아래와 같은 코드)
    const [item] = event.target.classList;
    if (item !== 'LI') { // 속성 이용
        return;
    } else {
        event.target.style.background = 'blue';
    }
});


/* debounce */
// 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것
// 주로 ajax 검색에 자주 쓰임
var timer;
document.querySelector('#input').addEventListener('input', function(e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    console.log('여기에 ajax 요청', e.target.value);
  }, 200);
});

/* throttle */
// 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
// 스크롤을 올리거나 내릴 때 보통 사용