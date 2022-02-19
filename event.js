// 이벤트 
const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function() {
    alert('안녕하세요');
});

// keyboard events: keydown, keypress, keyup
// Mouse events: mousedown, mouseup, click

// event 객체
resetButton.addEventListener('click', function(event) {
    console.log(event.target); // target은 event가 발생한 대상
});

resetButton.removeEventListener('click', function(event) {
    console.log(event.target);
});