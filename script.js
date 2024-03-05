document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
});

function generateCalendar() {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const calendarView = document.getElementById('calendar-view');

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        dayElement.addEventListener('click', function() {
            const eventTitle = prompt("이벤트 제목을 입력하세요:", "");
            if (eventTitle) {
                addEventToCalendar(day, eventTitle);
            }
        });
        calendarView.appendChild(dayElement);
    }
}

function addEventToCalendar(day, eventTitle) {
    const calendarView = document.getElementById('calendar-view');
    const eventElement = document.createElement('div');
    eventElement.textContent = `${day}일: ${eventTitle}`;
    eventElement.classList.add('p-2', 'bg-blue-500', 'text-white', 'rounded', 'mt-2');
    calendarView.appendChild(eventElement);
}
