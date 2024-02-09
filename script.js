document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'], // DayGrid 플러그인 추가
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: handleDateClick
    });

    calendar.render();

    // 날짜 클릭 이벤트 핸들러
    function handleDateClick(info) {
        const startDateInput = document.getElementById('startDate');
        const endDateInput = document.getElementById('endDate');

        startDateInput.value = info.dateStr; // 시작일 입력 필드에 선택한 날짜 설정
        endDateInput.value = info.dateStr; // 종료일 입력 필드에 선택한 날짜 설정
    }

    // 일정 추가 폼 제출 이벤트 리스너
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

        // 사용자가 입력한 날짜 범위에 대한 일정을 달력에 추가하는 로직을 작성하세요.
        // 이 부분은 FullCalendar 라이브러리를 사용하여 해당 날짜 범위에 이벤트를 추가하는 방식으로 구현할 수 있습니다.
        calendar.addEvent({
            title: eventName,
            start: startDate,
            end: endDate
        });

        // 폼 초기화
        document.getElementById('eventName').value = '';
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
    });
});
