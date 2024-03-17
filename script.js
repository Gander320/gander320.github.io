const enemyHealth = document.getElementById('enemyHealth');
let enemyHP = 100;
const attackTurnButton = document.getElementById('attackTurnButton');

// JavaScript 코드 수정 버전
attackTurnButton.addEventListener('click', () => {
    if(enemyHP <= 0) return; // 이미 적이 패배한 상태라면 추가 공격을 막습니다.

    for (let i = 1; i <= 4; i++) {
        (function(index) {
            setTimeout(() => {
                if(enemyHP <= 0) return; // 적의 체력이 0 이하면 더 이상 공격하지 않습니다.
                const damage = Math.floor(Math.random() * 20) + 1;
                enemyHP -= damage;
                enemyHP = Math.max(0, enemyHP); // 체력이 음수가 되지 않도록 보정합니다.
                console.log(`Character ${index} attacks! Enemy takes ${damage} damage.`);

                enemyHealth.textContent = enemyHP;

                if (enemyHP <= 0) {
                    alert("Enemy defeated!");
                    attackTurnButton.disabled = true;
                }
            }, index * 500);
        })(i);
    }
});
