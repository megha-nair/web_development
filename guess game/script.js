document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guessForm');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userGuess = Number(document.getElementById('guess').value);
        attempts++;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;

        if (userGuess === targetNumber) {
            feedback.textContent = 'Congratulations! You guessed the number!';
            feedback.style.color = 'green';
            
            // Reset game state and UI
            setTimeout(() => {
                targetNumber = Math.floor(Math.random() * 100) + 1;
                attempts = 0;
                attemptsDisplay.textContent = `Attempts: ${attempts}`;
                feedback.textContent = '';
                feedback.style.color = '#333';
                form.reset();
            }, 3000); // Wait for 2 seconds before resetting to let user see the success message

        } else if (userGuess < targetNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = '#d9534f';
        } else {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = '#d9534f';
        }
    });
});
