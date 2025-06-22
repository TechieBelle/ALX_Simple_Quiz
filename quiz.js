// Define the checkAnswer function
function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Check if an option was selected
  let userAnswer = "";
  if (selectedOption) {
    userAnswer = selectedOption.value;
  }

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Compare user's answer with correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
