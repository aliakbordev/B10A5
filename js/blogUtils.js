const questions = document.querySelectorAll(".question");
let activeAnswer = null;
questions.forEach((question) => {
  question.addEventListener("click", () => {
    toggleQuestion(question);
  });
});

// function for blog questions answers toggle
function toggleQuestion(question) {
  const answer = question.nextElementSibling;
  const icon = question.querySelector("i");

  if (answer === activeAnswer) {
    answer.classList.add("hidden");
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    activeAnswer = null;
  } else {
    // Hide the previous answer and change icon to down arrow
    if (activeAnswer) {
      activeAnswer.classList.add("hidden");
      activeAnswer.previousElementSibling
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    // Show the clicked answer and update the arrow
    answer.classList.remove("hidden");
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");

    // Set the current answer as active
    activeAnswer = answer;
  }
}
