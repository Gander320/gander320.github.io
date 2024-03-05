document.addEventListener('DOMContentLoaded', function() {
    // 일정 추가 버튼 이벤트 리스너
    document.getElementById('add-event-btn').addEventListener('click', function() {
        showAddEventModal();
    });

    // 일정 저장 버튼 이벤트 리스너
    document.getElementById('add-event-form').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출에 의한 페이지 새로고침 방지
        addEventToCalendar();
        closeModal();
    });
});

// 일정 추가 모달 표시 함수
function showAddEventModal() {
    var modal = document.getElementById('add-event-modal');
    modal.classList.remove('hidden'); // 모달 표시
}

// 모달 닫기 함수
function closeModal() {
    var modal = document.getElementById('add-event-modal');
    modal.classList.add('hidden'); // 모달 숨김
}

// 캘린더에 일정 추가 함수
function addEventToCalendar() {
    var eventTitle = document.getElementById('event-title').value; // 입력된 일정 제목 가져오기
    if (eventTitle) { // 제목이 비어있지 않은 경우에만 추가
        var calendarView = document.getElementById('calendar-view');
        var eventElement = document.createElement('div'); // 새 일정 요소 생성
        eventElement.textContent = eventTitle; // 일정 제목 설정
        eventElement.classList.add('event', 'p-2', 'bg-blue-500', 'text-white', 'rounded', 'mt-2'); // TailwindCSS 스타일 적용
        calendarView.appendChild(eventElement); // 캘린더 뷰에 일정 요소 추가
        document.getElementById('event-title').value = ''; // 입력 필드 초기화
    }
}
