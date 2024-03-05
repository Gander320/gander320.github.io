// script.js

document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar-container');
    const scheduleForm = document.getElementById('scheduleForm');
    const events = []; // 추가된 일정을 저장하는 배열

    // 달력 초기화 함수
    function initCalendar() {
        const calendar = document.createElement('table');
        calendar.id = 'calendar';

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
                    events.filter(event => event.startDate <= dateKey && event.endDate >= dateKey).forEach(event => {
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

        // 기존 달력을 제거하고 새로운 달력을 추가
        const oldCalendar = document.getElementById('calendar');
        if (oldCalendar) {
            oldCalendar.remove();
        }
        calendarContainer.appendChild(calendar);
    }

    // 일정 추가 이벤트 핸들러
