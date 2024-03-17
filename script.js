const enemyHealth = document.getElementById('enemyHealth');
let enemyHP = 100;
const attackTurnButton = document.getElementById('attackTurnButton');

attackTurnButton.addEventListener('click', () => {
    for (let i = 1; i <= 4; i++) {
        // 각 캐릭터의 공격을 시뮬레이션합니다.
        (function(index) {
            setTimeout(() => {
                const damage = Math.floor(Math.random() * 20) + 1; // 1부터 20 사이의 데미지
                enemyHP -= damage;
                enemyHP = enemyHP > 0 ? enemyHP : 0; // 체력이 0 이하로 내려가지 않게 합니다.
                console.log("Character " + index + " attacks! Enemy takes " + damage + " damage.");
                
                enemyHealth.textContent = enemyHP;
                
                if (enemyHP <= 0) {
                    alert("Enemy defeated!");
                    attackTurnButton.disabled = true; // 적이 패배하면 공격 버튼 비활성화
                    break; // 적이 패배했으므로 루프 중단
                }
            }, index * 500); // 각 캐릭터의 공격 사이에 딜레이를 줍니다 (500ms).
        })(i);
    }
});
