
function popupModal (){
    document.getElementById("success-modal").classList.remove("hidden");
    const modal = document.getElementById("success-modal");
    const closeModalButton = document.getElementById("close-modal");

    // Close modal when close button is clicked
    closeModalButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    // Close modal when clicking outside of modal content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
}

// Function to handle donation
function handleDonation(section) {
  const mainBalanceField = document.getElementById("total_balance");
  let mainBalance = parseFloat(mainBalanceField.innerText);

  const balanceField = section.querySelector("span");
  const amountField = section.querySelector('input[type="number"]');

  const heading = section.querySelector("h1").innerText;

  let balance = parseFloat(balanceField.innerText);
  let amount = parseFloat(amountField.value);

  if (!isNaN(amount) && amount > 0) {
    mainBalanceField.innerText = mainBalance - amount;
    balanceField.innerText = balance + amount;
    amountField.value = "";

    popupModal();

    const history = document.createElement("div");

    history.innerHTML = `
    <div class="p-8 border rounded-lg mt-8">
        <h4 class="text-lg font-bold">${amount} Taka is ${heading}</h4>
        <p class="text-base text-gray-700 pt-2">Date : ${new Date().toString()}</p>
    </div>
`;
    document.getElementById("history_section").appendChild(history);
  } else {
    alert("Please enter a valid amount.");
    return;
  }
}

// Add event listeners to each donate button
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    const section = this.closest(".border"); // Get the section
    // const section = this.parentElement;
    handleDonation(section);
  });
});
