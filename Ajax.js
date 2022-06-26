/* http 통신 */
// http: html을 주고 받는 프로토콜.
// 브라우저는 문서를 달라 하고, 서버는 문서를 줌. 
// google.com으로 문서를 달라고 요청 -> 요청에 대한 결과로 google에 대한 문서를 줌. 
// 브라우더 렌더링, 네트워크..

/* Ajax */
// Asynchronous Javascript and XML. 그런데 주로 XML이 아닌 JSON.
// ajax는 문서를 주고받지 않고 바로 원하는 것을 얻을 수 있음. (페이지 전환 대신 데이터 교환 ex.무한스크롤)

/* XMLHttpRequest */ 
// 오래된 편..
// -> 전체 페이지의 새로고침 없이도 URL로부터 데이터를 받아올 수 있음. 

/* Fetch */
// XMLHttpRequest의 상당 부분을 보완
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

// 1. URL fetch 요청
// 2. Fetch 응답 객체를 받아옴
// 3. 응답 객체 JSON => 순수 JS 객체로 변환

/* JSON */
// Javascript Ibject Notation
// 속성-값 쌍으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷

JSON.stringify() // JS Object => JSON / 서버로 데이터를 보낼 때
JSON.parse() // JSON => JS Object / 서버에서 데이터를 가져올 때 

const json = JSON.stringify({x: 5, y: 3});
console.log(typeof json); // string
const jsonParseObj = JSON.parse(json);
console.log(typeof jsonParseObj); // object

/*
 * JavaScript (FE)
 *  |
 * JSON
 *  |
 * Java, Python, Ruby, Go (BE)
 */