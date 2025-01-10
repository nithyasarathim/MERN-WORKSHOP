const levels = [20, 15, 10, 5, 3];
const randomNums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
console.log('Random Numbers:', randomNums);

let currLevel = 0;
let attemptsLeft = levels[currLevel];
const levelDisplay = document.getElementById('levelDisplay');
const msgEl = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitGuess');

const updateLvl = () => {
    document.querySelectorAll('.box').forEach((box, index) => {
        if (index === currLevel) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
    levelDisplay.textContent = `Level ${currLevel + 1}`;
};

const openBoxTemp = () => {
    const currBox = document.getElementById(`box${currLevel + 1}`);
    currBox.classList.remove('closed');
    currBox.classList.add('opened');

    setTimeout(() => {
        currBox.classList.remove('opened');
        currBox.classList.add('closed');
        currLevel++;
        if (currLevel === levels.length) {
            msgEl.textContent = 'You have successfully opened all the boxes. You win!';
            guessInput.disabled = true;
            submitBtn.disabled = true;
        } else {
            attemptsLeft = levels[currLevel];
            updateLvl();
            msgEl.textContent = `Move to Level ${currLevel + 1}. You have ${attemptsLeft} chances.`;
        }
    }, 3000);
};

updateLvl();

submitBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        msgEl.textContent = 'Please enter a valid number.';
        return;
    }

    if (userGuess === randomNums[currLevel]) {
        msgEl.textContent = `Congratulations! You guessed the number for Level ${currLevel + 1}. Opening the box...`;
        openBoxTemp();
    } else {
        attemptsLeft--;
        if (attemptsLeft === 0) {
            msgEl.textContent = `You failed to open the box at Level ${currLevel + 1}. Game over! The correct number was ${randomNums[currLevel]}.`;
            guessInput.disabled = true;
            submitBtn.disabled = true;
        } else {
            const hint = userGuess < randomNums[currLevel] ? 'too low' : 'too high';
            msgEl.textContent = `Incorrect! Your guess is ${hint}. You have ${attemptsLeft} chances left for Level ${currLevel + 1}.`;
        }
    }

    guessInput.value = '';
});
