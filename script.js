document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar');
    const scheduleForm = document.getElementById('scheduleForm');
    const events = []; // 추가된 일정을 저장하는 배열

    // 달력 초기화 함수
    function initCalendar() {
        calendarContainer.innerHTML = ''; // 달력 컨테이너 초기화
        const calendar = document.createElement('table');
        calendar.classList.add('calendar');

        // 달력 바디 생성
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const numDays = lastDayOfMonth.getDate();
        const startingDay = firstDayOfMonth.getDay();

        // 요일 배열
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

        // 테이블 헤더 생성
        const headerRow = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const th = document.createElement('th');
            th.textContent = weekdays[i];
            headerRow.appendChild(th);
        }
        const thead = document.createElement('thead');
        thead.appendChild(headerRow);
        calendar.appendChild(thead);

        const tbody = document.createElement('tbody');
        let date = 1;
        for (let i = 0; i < 6; i++) { // 최대 6주까지 표시
            const weekRow = document.createElement('tr');
            weekRow.classList.add('week');
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                cell.classList.add('day');

                if (i === 0 && j < startingDay) {
                    // 이전 달 날짜
                    cell.textContent = '';
                } else if (date > numDays) {
                    break; // 다음 달 날짜
                } else {
                    cell.textContent = date;

                    const currentDate = new Date(year, month, date);
                    const dateKey = currentDate.toISOString().split('T')[0];
                    cell.dataset.date = dateKey;

                    // 추가된 일정 표시
                    const eventDiv = document.createElement('div');
                    eventDiv.classList.add('events');
                    events.filter(event => event.date === dateKey).forEach(event => {
                        const eventNameDiv = document.createElement('div');
                        eventNameDiv.textContent = event.name;
                        eventDiv.appendChild(eventNameDiv);
                    });
                    cell.appendChild(eventDiv);

                    date++;
                }

                weekRow.appendChild(cell);
            }
            tbody.appendChild(weekRow);
        }
        calendar.appendChild(tbody);

        calendarContainer.appendChild(calendar);
    }

    // 일정 추가 이벤트 핸들러
    scheduleForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const eventName = document.getElementById('eventName').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        if (eventName.trim() === '' || startDate.trim() === '' || endDate.trim() === '') {
            alert('일정 이름과 시작일, 종료일을 모두 입력하세요.');
            return;
        }

        // 일정을 배열에 추가
        const newEvent = {
            name: eventName,
            date: startDate // 시작일 기준으로만 일정 추가
        };
        events.push(newEvent);

        // 달력 다시 초기화
        initCalendar();

        // 폼 초기화
        document.getElementById('eventName').value = '';
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
    });

    // 초기 달력 초기화
    initCalendar();
});
