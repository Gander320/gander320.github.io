document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-event-btn').addEventListener('click', function() {
        showAddEventModal();
    });
});

function showAddEventModal() {
    document.getElementById('add-event-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('add-event-modal').classList.add('hidden');
    document.getElementById('event-title').value = ''; // 모달 닫을 때 입력 필드 초기화
}

function addEventToCalendar() {
    var eventTitle = document.getElementById('event-title').value.trim();
    if (eventTitle) {
        var calendarView = document.getElementById('calendar-view');
        var eventElement = document.createElement('div');
        eventElement.textContent = eventTitle;
        eventElement.classList.add('p-2', 'bg-blue-500', 'text-white', 'rounded', 'mt-2');
        calendarView.appendChild(eventElement);
        closeModal(); // 일정 추가 후 모달 닫기
    } else {
        alert('일정 제목을 입력해주세요.');
    }
}
