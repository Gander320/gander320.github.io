document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
    document.getElementById('add-event-button').addEventListener('click', addEvent);
});

function generateCalendar() {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const calendarView = document.getElementById('calendar-view');

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        dayElement.setAttribute('data-day', day);
        dayElement.addEventListener('click', function() {
            document.getElementById('event-title').focus();
        });
        calendarView.appendChild(dayElement);
    }
}

function addEvent() {
    const eventTitle = document.getElementById('event-title').value.trim();
    if (!eventTitle) {
        alert('이벤트 제목을 입력해주세요.');
        return;
    }

    const selectedDay = prompt("날짜를 입력하세요 (1부터 시작하는 날짜):", "");
    if (selectedDay) {
        const calendarView = document.getElementById('calendar-view');
        const dayElement = calendarView.querySelector(`[data-day="${selectedDay}"]`);
        if (dayElement) {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.textContent = eventTitle;
            dayElement.appendChild(eventElement);
            document.getElementById('event-title').value = ''; // 입력 필드 초기화
        } else {
            alert('유효한 날짜를 입력해주세요.');
        }
    }
}
