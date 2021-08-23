// TODO: Declare any global variables we need
document.addEventListener('DOMContentLoaded', function () {
  // This is just a sanity check to make sure your JavaScript script is getting loaded
  // You can remove it once you see it in your browser console in the developer tools
  console.log('Hi')

  // TODO: Add event listener and handler for flip and clear buttons
  const flipButton = document.querySelector('#flip');
  const clearButton = document.querySelector('#clear');

  let tailsCount = 0;
  let headsCount = 0;
  let total = 0;
  let headsPercentage = 0;
  let tailsPercentage = 0;

  flipButton.addEventListener('click', function () {
    // Flip Button Click Handler
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM
    if (Math.random() >= 0.5) {
      const image = document.querySelector('#penny-image');
      image.src = '/assets/images/penny-heads.jpg';

      const message = document.querySelector('#message');
      message.innerHTML = 'Heads';

      headsCount = headsCount + 1;
    } else {
      const image = document.querySelector('#penny-image');
      image.src = '/assets/images/penny-tails.jpg'

      const message = document.querySelector('#message');
      message.innerHTML = 'Tails';
      tailsCount = tailsCount + 1;
    }

    // Update the scorboard
    // TODO: Calculate the total number of rolls/flips
    // Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell

    total = tailsCount + headsCount;
    headsPercentage = Math.round((headsCount / total) * 100);
    tailsPercentage = Math.round((tailsCount / total) * 100);

    const headsElement = document.querySelector("#heads")
    headsElement.innerHTML = headsCount;

    const headsPercentageElement = document.querySelector("#heads-percent")
    headsPercentageElement.innerHTML = `${headsPercentage}%`;

    const tailsElement = document.querySelector("#tails")
    tailsElement.innerHTML = tailsCount;

    const tailsPercentageElement = document.querySelector("#tails-percent")
    tailsPercentageElement.innerHTML = `${tailsPercentage}%`;
  });

  clearButton.addEventListener('click', function () {
    // Clear Button Click Handler
    tailsCount = 0;
    headsCount = 0;
    total = 0;
    headsPercentage = 0;
    tailsPercentage = 0;
    // TODO: Reset global variables to 0

    // TODO: Update the scoreboard (same logic as in flip button click 
    const headsElement = document.querySelector("#heads")
    headsElement.innerHTML = 0;

    const headsPercentageElement = document.querySelector("#heads-percent")
    headsPercentageElement.innerHTML = '0%'

    const tailsElement = document.querySelector("#tails")
    tailsElement.innerHTML = 0;

    const tailsPercentageElement = document.querySelector("#tails-percent")
    tailsPercentageElement.innerHTML = '0%'

    const image = document.querySelector('#penny-image');
    image.src = '/assets/images/penny-heads.jpg';

    const message = document.querySelector('#message');
    message.innerHTML = 'Heads';
  });
})