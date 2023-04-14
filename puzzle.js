const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = document.querySelector('input[name="answer"]').value;
  if (answer.toLowerCase() === 'envelope') {
    alert('Congratulations! You solved the puzzle!');
  } else {
    alert('Sorry, that is not the correct answer. Please try again.');
  }
});
