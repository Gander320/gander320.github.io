document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const yearMonthDisplay = document.getElementById('yearMonthDisplay');

    let currentYear, currentMonth;

    function renderCalendar(year, month) {
        currentYear = year;
        currentMonth = month;

        const prevMonthLastDate = new Date(year, month, 0).getDate();
        const currentMonthLastDate = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        let date = 1;
        let nextMonthDate = 1;

        calendarBody.innerHTML = '';

        // 주 단위로 표시
        for (let week = 0; week < 6; week++) {
            const row = document.createElement('tr');

            for (let day = 0; day < 7; day++) {
                const cell = document.createElement('td');
                if (week === 0 && day < firstDayOfMonth) {
                    // 이전 달의 날짜를 채움
                    cell.textContent = prevMonthLastDate - firstDayOfMonth + day + 1;
                    cell.classList.add('prev-month');
                } else if (date > currentMonthLastDate) {
                    // 다음 달의 날짜를 채움
                    cell.textContent = nextMonthDate++;
                    cell.classList.add('next-month');
                } else {
                    // 현재 달의 날짜를 채움
                    cell.textContent = date++;
                    cell.classList.add('current-month');
                    if (date - 1 === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
                        cell.classList.add('today'); // 오늘 날짜에 'today' 클래스 추가
                    }
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
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
