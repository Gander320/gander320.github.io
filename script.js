document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const scheduleForm = document.getElementById('scheduleForm');
    const eventNameInput = document.getElementById('eventName');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const yearMonthDisplay = document.getElementById('yearMonthDisplay');

    let currentYear, currentMonth;
    const events = [];

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function addEventElement(event) {
        const startDayCell = document.querySelector(`[data-date="${event.start}"]`);
        const endDayCell = document.querySelector(`[data-date="${event.end}"]`);
        if (startDayCell) {
            const eventDiv = document.createElement('div');
            eventDiv.textContent = event.name;
            eventDiv.style.borderBottom = `2px solid ${event.color}`;
            startDayCell.appendChild(eventDiv);
        }
        if (startDayCell && endDayCell) {
            let currentCell = startDayCell;
            while (currentCell) {
                currentCell.style.borderBottom = `2px solid ${event.color}`;
                if (currentCell === endDayCell) break;
                currentCell = currentCell.nextElementSibling;
            }
        }
    }

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
                let cellDate;
                if (week === 0 && day < firstDayOfMonth) {
                    cellDate = prevMonthLastDate - firstDayOfMonth + day + 1;
                    cell.className = 'prev-month';
                } else if (date > currentMonthLastDate) {
                    cellDate = nextMonthDate++;
                    cell.className = 'next-month';
                } else {
                    cellDate = date++;
                    cell.className = 'current-month';
                    if (year === new Date().getFullYear() && month === new Date().getMonth() && cellDate === new Date().getDate()) {
                        cell.classList.add('today'); // 오늘 날짜에 'today' 클래스 추가
                    }
                }
                cell.textContent = cellDate;
                cell.setAttribute('data-date', `${year}-${month + 1}-${cellDate}`);
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }

        yearMonthDisplay.textContent = `${currentYear}년 ${currentMonth + 1}월`;

        // 캘린더에 이벤트를 렌더링합니다.
        events.forEach(event => {
            if (event.year === year && event.month === month) {
                addEventElement(event);
            }
        });
    }

    scheduleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const eventName = eventNameInput.value.trim();
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;
        const color = getRandomColor();

        if (eventName && startDate && endDate) {
            const event = {
                name: eventName,
                start: startDate,
                end: endDate,
                color: color,
                year: new Date(startDate).getFullYear(),
                month: new Date(startDate).getMonth()
            };
            events.push(event);

            // 캘린더를 다시 렌더링하여 이벤트를 표시합니다.
            renderCalendar(currentYear, currentMonth);
        }
    });

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
