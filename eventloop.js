/* 이벤트 루프 */
// 비동기 방식으로 동시성을 지원하는 방법
// JS 엔진은 한 번에 한 개의 코드만 실행할 수 있다.
// 하지만 사용되는 환경은 동시에 많은 작업이 처리된다.
// 프로세스: 프로그램을 메모리에 할당
// 스레드: 프로세스 내의 실행 단위
// call stack: 함수 처리를 저장하는 영역
// WEB API: 웹을 만들 때 사용할 수 있는 모든 인터페이스
// task queue: WEB API에서 비동기 작업들이 실행된 후 호출되는 콜백 함수들이 대기
// http://latentflip.com/

// setTimeOut같은 경우 js엔진이 WEB API에 위임을 함. WEB API에서 비동기 작업들이 실행된 후 호출되는 콜백 함수들이 task queue에 대기
// task queue에 있는 것은 call stack이 비어있다면 그 call stack으로 이동

/* 실행 컨텍스트 */
// -> JS가 실행되는 방식을 담고 있는 핵심 원리
// JS 엔진이 코드를 읽고 실행에 필요한 정보를 모아놓는 것
// 실행 컨텍스트의 종류: global(전역, GEC), Function(함수, FEC), Eval(eval 메서드)
// Global - this, object, 선언
// Function - 상위, this, 매개변수, arguments
// Eval 
// 실행 컨텍스트의 단계: Creation Phase(생성 단계), Execution Phase(실행 단계)
// Creation Phase: JS 엔진이 함수를 호출했지만 실행이 시작되지 않은 단계
// Execution Phase: 전역 변수의 값 할당이 발생하며 코드를 실행하는 단계 

/**
 * 
 * 실행 컨텍스트
 * 
 * # 생성 단계
 * 
 * 1. 전역 객체 생성
 * 2. 변수 생성
 * 3. 변수는 undefined로 초기화
 * 4. 함수는 메모리에 위치
 * 
 * 
 * # 실행 단계
 * 
 * 1. 함수 호출 시 함수 실행 컨텍스트 생성
 * 2. arguments 접근 가능
 * 3. GEC에서 생성된 환경에 접근 가능
 * 4. 만약 함수가 다른 함수 호출 시 새로운 함수의 실행 컨텍스트가 생성되며 반복
 */

var name = 'some';

function second() {
    console.log('두번째');
}

function first() {
    second();
    console.log(this.name);
    console.log(name);
}

// ===

first();