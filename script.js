document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('event-form').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출로 인한 페이지 새로고침 방지
        addEventToCalendar();
    });
});

function addEventToCalendar() {
    var eventTitle = document.getElementById('event-title').value.trim();
    if (eventTitle) {
        var calendarView = document.getElementById('calendar-view');
        var eventElement = document.createElement('div');
        eventElement.textContent = eventTitle; // 일정 제목을 텍스트 콘텐츠로 추가
        eventElement.classList.add('p-2', 'bg-blue-500', 'text-white', 'rounded', 'mt-2');
        calendarView.appendChild(eventElement); // 캘린더 뷰에 일정 요소 추가
        document.getElementById('event-title').value = ''; // 입력 필드 초기화
    } else {
        alert('일정 제목을 입력해주세요.'); // 제목이 비어있을 경우 경고
    }
}
