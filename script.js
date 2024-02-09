document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const scheduleForm = document.getElementById('scheduleForm');

    scheduleForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const eventName = document.getElementById('eventName').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        if (eventName.trim() === '' || startDate.trim() === '' || endDate.trim() === '') {
            alert('일정 이름과 시작일, 종료일을 모두 입력하세요.');
            return;
        }

        // 일정을 달력에 추가하는 함수 호출
        addEventToCalendar(eventName, startDate, endDate);

        // 폼 초기화
        document.getElementById('eventName').value = '';
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
    });

    function addEventToCalendar(eventName, startDate, endDate) {
        // 시작일부터 종료일까지 반복하며 해당 날짜에 일정을 표시
        let currentDate = new Date(startDate);
        const end = new Date(endDate);

        while (currentDate <= end) {
            const dateKey = currentDate.toISOString().split('T')[0]; // 날짜를 'yyyy-mm-dd' 형식의 문자열로 변환
            const cell = document.querySelector(`#calendar [data-date="${dateKey}"]`);

            if (cell) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.textContent = eventName;
                cell.appendChild(eventDiv);
            }

            currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 이동
        }
    }
});
