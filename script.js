document.addEventListener('DOMContentLoaded', function() {
    // 초기 캘린더 뷰 설정 (이 부분은 구현에 따라 달라질 수 있음)
    // initializeCalendar(); 

    // 일정 추가 버튼 이벤트 리스너
    document.getElementById('add-event-btn').addEventListener('click', function() {
        showAddEventModal();
    });
});

// 일정 추가 모달 표시 함수
function showAddEventModal() {
    var modal = document.getElementById('add-event-modal');
    modal.classList.remove('hidden'); // TailwindCSS의 'hidden' 클래스를 제거하여 모달을 표시
}

// 모달 닫기 함수
function closeModal() {
    var modal = document.getElementById('add-event-modal');
    modal.classList.add('hidden'); // TailwindCSS의 'hidden' 클래스를 추가하여 모달을 숨김
}
