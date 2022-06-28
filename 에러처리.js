/* 예외처리 */

/* try-catch */
// try {
//     console.log(a);

// } catch (e) {
//     console.log(e);
// } finally {
//     console.log('done');
// }

/* 에러-던지기 */
function login(id, pw) {
    if (id === 'zero' && pw === 0000) {
        return true;
    }
    if (id !== 'zero' && pw === 0000) {
        throw new Error('아이디 불일치');

    }
    if (id === 'zero' && pw !== 0000) {
        throw new LoginError('비밀번호 불일치');
    }
}

/* 스택-추적 */
try {

} catch (e) {
    console.error(e.stack); // 에러를 스택형태로 확인
}

/* 커스텀-에러 */
class LoginError extends Error {
    constructor (message) {
        super(message);

        this.name = 'Login Error';
    }
}

try {
    login('zero', 1111);
} catch (err) {
    console.error('에러 발생');
    if (err instanceof LoginError) {
        console.log(err);
        console.log('로그인 에러가 발생했습니다');
    } else {
        console.log('에러가 발생했습니다');
    }
    // window.alert(error); // 사용자에게 노출
} finally {
    console.log('로그인 시도 시간: ' + new Date());
}