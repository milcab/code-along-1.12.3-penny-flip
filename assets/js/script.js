// TODO: Declare any global variables we need
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    const flipButton = document.querySelector('#flip');
    const clearButton = document.querySelector('#clear');

    // let tailsCount = 0;
    //let headsCount = 0;
    //let total = 0;
    let diceNumbers = [
        0, // 1
        0, // 2
        0, // 3
        0, // 4
        0, // 5
        0 // 6
    ];

    let total = 0;

    const getImageURL = function (index) {
        return `/assets/images/dice/dice${index + 1}.png`
    }

    const getRandomImage = function () {
        const randomIndex = Math.round(Math.random() * 5);
        diceNumbers[randomIndex]++;
        total++;
        return getImageURL(randomIndex);
    }

    flipButton.addEventListener('click', function () {
        const image = document.querySelector('#penny-image');
        image.src = getRandomImage();

        for (let i = 0; i < diceNumbers.length; i++) {
            const diceNumberCountElement = document.querySelector('#dice-number-count-' + i);
            const diceNumberPercentageElement = document.querySelector('#dice-number-percentage-' + i);

            const count = diceNumbers[i];
            const percentage = Math.round((count / total) * 100);
            diceNumberCountElement.innerHTML = count;
            diceNumberPercentageElement.innerHTML = `${percentage}%`;
        }
    });

    clearButton.addEventListener('click', function () {
        // Clear Button Click Handler
        diceNumbers = [
            0,
            0,
            0,
            0,
            0,
            0
        ];

        total = 0;

        for (let i = 0; i < diceNumbers.length; i++) {
            const diceNumberCountElement = document.querySelector('#dice-number-count-' + i);
            const diceNumberPercentageElement = document.querySelector('#dice-number-percentage-' + i);
            diceNumberCountElement.innerHTML = 0;
            diceNumberPercentageElement.innerHTML = `0%`;
        }
    });
})