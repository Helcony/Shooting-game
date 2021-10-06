/* starts a new game */
function newGame() {
    randomEnemyAttacks()
    document.querySelector('#button').style.display = 'none'
}

function playAgain() {
    window.location.reload()
}


/* shooting enemies and victory */
function iShoot(enemy) {
    enemy.classList.add('dead');
    if(!livingEnemies().length) {
        setTimeout(() => {
            document.querySelector('#victory').style.display = 'inline'
        }, 1000);
    }   
}

/* enemy showing and hiding */
function enemyBehaviour(enemy) {
    enemy.classList.add('show');

    setTimeout(() => {
        enemyShoots(enemy)
    }, 1000);

    setTimeout(() => {
        enemy.classList.remove('show')
    }, 3000);
}

/* enemy shoots you */
function enemyShoots(enemy) {
    if(!enemy.classList.contains('dead')) {
        enemy.classList.add('shoot');
        updateHealthPoints(healthPoints - 20)

        setTimeout(() => {
            enemy.classList.remove('shoot')
        }, 200);
    }
}

/* shows random enemies */
function livingEnemies() {
    return document.querySelectorAll('.enemy:not(.dead)')
}

function randomEnemyAttacks() {
    var randomEnemyNo = Math.random() * livingEnemies().length
    randomEnemyNo = Math.floor(randomEnemyNo)
    var enemy = livingEnemies()[randomEnemyNo]

    var randomDelay = Math.random() * 2000 + 1000

    setTimeout(() => {
        enemyBehaviour(enemy)
        randomEnemyAttacks()
    }, randomDelay);
}

/* health and dying */
var healthPoints = 100;

function updateHealthPoints (points) {
    healthPoints = points;
    var healthBar = document.querySelector('#healthBar')

    healthBar.style.width = points + "%"
    if(healthPoints == 0) {
        setTimeout(() => {
            alert('game over')
            window.location.reload()
        }, 1000);
    }
}