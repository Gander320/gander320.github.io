document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('event-form').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출로 인한 페이지 새로고침 방지
        addEventToCalendar();
    });
});

function addEventToCalendar() {
    var eventTitle = document.getElementById('event-title').value.trim();
    var eventDate = document.getElementById('event-date').value.trim();
    if (eventTitle && eventDate) {
        var calendarView = document.getElementById('calendar-view');
        var eventElement = document.createElement('div');
        eventElement.textContent = `${eventDate}: ${eventTitle}`;
        eventElement.classList.add('p-2', 'bg-blue-500', 'text-white', 'rounded', 'mt-2');
        calendarView.appendChild(eventElement);
        document.getElementById('event-title').value = ''; // 입력 필드 초기화
        document.getElementById('event-date').value = '';
    } else {
        alert('이벤트 제목과 날짜를 모두 입력해주세요.');
    }
}
