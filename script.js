// script.js

document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const scheduleForm = document.getElementById('scheduleForm');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const yearMonthDisplay = document.getElementById('yearMonthDisplay');

    const events = [];
    let currentYear, currentMonth;

    function renderCalendar(year, month) {
        currentYear = year;
        currentMonth = month;

        const prevMonthLastDate = new Date(year, month, 0).getDate();
        const currentMonthLastDate = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        let date = 1;
        let day;

        calendarBody.innerHTML = '';

        // 주 단위로 표시
        for (let week = 0; week < 6; week++) {
            const row = document.createElement('tr');
            let isEndOfCurrentMonth = false; // 해당 주에 해당 달의 말일이 포함되는지 여부

            for (day = 0; day < 7; day++) {
                const cell = document.createElement('td');
                if (week === 0 && day < firstDayOfMonth) {
                    cell.textContent = prevMonthLastDate - firstDayOfMonth + day + 1;
                } else if (date > currentMonthLastDate) {
                    isEndOfCurrentMonth = true;
                    break;
                } else {
                    cell.textContent = date++;
                }
                row.appendChild(cell);
            }

            if (isEndOfCurrentMonth) {
                // 해당 주에 해당 달의 말일이 포함되면 거기서 표 생성을 중지
                break;
            } else {
                calendarBody.appendChild(row);
            }
        }

        yearMonthDisplay.textContent = `${currentYear}년 ${currentMonth + 1}월`;
    }

    prevMonthBtn.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    nextMonthBtn.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    const today = new Date();
    renderCalendar(today.getFullYear(), today.getMonth());
});
