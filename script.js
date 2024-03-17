const enemyHealth = document.getElementById('enemyHealth');
let enemyHP = 100;
const attackTurnButton = document.getElementById('attackTurnButton');

function attackSequence() {
    for (let i = 1; i <= 4; i++) {
        setTimeout(() => {
            if (enemyHP <= 0) {
                attackTurnButton.disabled = true; // 적의 체력이 0 이하면 버튼 비활성화
                return;
            }
            
            const damage = Math.floor(Math.random() * 20) + 1; // 1부터 20 사이의 데미지
            enemyHP -= damage;
            enemyHP = Math.max(0, enemyHP); // 체력이 음수가 되지 않도록 보정합니다.
            console.log(`Character ${i} attacks! Enemy takes ${damage} damage.`);

            enemyHealth.textContent = enemyHP;
            
            if (enemyHP <= 0) {
                alert("Enemy defeated!");
                attackTurnButton.disabled = true; // 적이 패배하면 공격 버튼 비활성화
            }
        }, i * 500); // 각 캐릭터의 공격 사이에 500ms의 딜레이
    }
}

attackTurnButton.addEventListener('click', attackSequence);
