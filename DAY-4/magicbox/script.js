const levels = [20, 15, 10, 5, 3];
const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
console.log('Random Numbers:', randomNumbers);

let currentLevel = 0;
let attemptsLeft = levels[currentLevel];
const levelDisplay = document.getElementById('levelDisplay');
const messageEl = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');

const updateLevel = () => {
    document.querySelectorAll('.box').forEach((box, index) => {
        if (index === currentLevel) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
    levelDisplay.textContent = `Level ${currentLevel + 1}`;
};

const openBoxTemporarily = () => {
    const currentBox = document.getElementById(`box${currentLevel + 1}`);
    currentBox.classList.remove('closed');
    currentBox.classList.add('opened');

    setTimeout(() => {
        currentBox.classList.remove('opened');
        currentBox.classList.add('closed');
        currentLevel++;
        if (currentLevel === levels.length) {
            messageEl.textContent = 'You have successfully opened all the boxes. You win!';
            guessInput.disabled = true;
            submitButton.disabled = true;
        } else {
            attemptsLeft = levels[currentLevel];
            updateLevel();
            messageEl.textContent = `Move to Level ${currentLevel + 1}. You have ${attemptsLeft} chances.`;
        }
    }, 3000);
};

updateLevel();

submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        messageEl.textContent = 'Please enter a valid number.';
        return;
    }

    if (userGuess === randomNumbers[currentLevel]) {
        messageEl.textContent = `Congratulations! You guessed the number for Level ${currentLevel + 1}. Opening the box...`;
        openBoxTemporarily();
    } else {
        attemptsLeft--;
        if (attemptsLeft === 0) {
            messageEl.textContent = `You failed to open the box at Level ${currentLevel + 1}. Game over! The correct number was ${randomNumbers[currentLevel]}.`;
            guessInput.disabled = true;
            submitButton.disabled = true;
        } else {
            const hint = userGuess < randomNumbers[currentLevel] ? 'too low' : 'too high';
            messageEl.textContent = `Incorrect! Your guess is ${hint}. You have ${attemptsLeft} chances left for Level ${currentLevel + 1}.`;
        }
    }

    guessInput.value = '';
});
