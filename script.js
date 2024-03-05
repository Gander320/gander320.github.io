// script.js

document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const scheduleForm = document.getElementById('scheduleForm');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const yearMonthDisplay = document.getElementById('yearMonthDisplay'); // 새로 추가

    const events = []; // 추가된 일정을 저장하는 배열
    let currentYear, currentMonth;

    // 초기 달력 렌더링
    function renderCalendar(year, month) {
        currentYear = year;
        currentMonth = month;

        // 이전 달의 마지막 날짜
        const prevMonthLastDate = new Date(year, month, 0).getDate();
        // 현재 달의 마지막 날짜
        const currentMonthLastDate = new Date(year, month + 1, 0).getDate();
        // 현재 달의 첫 번째 요일
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        let date = 1;
        let day;

        calendarBody.innerHTML = ''; // 기존 콘텐츠 삭제

        // 이전 달 날짜 채우기
        for (day = firstDayOfMonth; day > 0; day--) {
            const cell = document.createElement('td');
            cell.textContent = prevMonthLastDate - day + 1;
            calendarBody.appendChild(cell);
        }

        // 현재 달 날짜 채우기
        for (date = 1; date <= currentMonthLastDate; date++) {
            const cell = document.createElement('td');
            cell.textContent = date;
            calendarBody.appendChild(cell);
        }

        // 다음 달 날짜 채우기
        const remainingCells = 42 - (day + currentMonthLastDate); // 6주 * 7일
        for (let i = 0; i < remainingCells; i++) {
            const cell = document.createElement('td');
            cell.textContent = i + 1;
            calendarBody.appendChild(cell);
        }

        // 현재 년도와 달 표시 업데이트
        yearMonthDisplay.textContent = `${currentYear}년 ${currentMonth + 1}월`; // 새로 추가
    }

    // 이전 달로 이동 버튼 이벤트 처리
    prevMonthBtn.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    // 다음 달로 이동 버튼 이벤트 처리
    nextMonthBtn.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    // 초기 달력 렌더링
    const today = new Date();
    renderCalendar(today.getFullYear(), today.getMonth());
});
