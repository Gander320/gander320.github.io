document.addEventListener('DOMContentLoaded', function() {
    const scheduleForm = document.getElementById('scheduleForm');
    const scheduleList = document.getElementById('schedule');

    scheduleForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;

        if (eventName.trim() === '' || eventDate.trim() === '') {
            alert('일정 이름과 일정 날짜를 입력하세요.');
            return;
        }

        const eventItem = document.createElement('div');
        eventItem.classList.add('event');
        eventItem.innerHTML = `
            <strong>${eventName}</strong> - ${eventDate}
        `;
        scheduleList.appendChild(eventItem);

        // 폼 초기화
        eventName.value = '';
        eventDate.value = '';
    });
});
