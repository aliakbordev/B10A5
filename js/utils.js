document
  .getElementById("noakhali_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalanceField = document.getElementById("total_balance");
    let mainBalance = parseFloat(mainBalanceField.innerText);

    const parentElement = document.getElementById("noakhali_btn").parentElement;

    const balanceField = parentElement.querySelector("#balance");
    let balance = parseFloat(balanceField.innerText);

    const title = parentElement.querySelector("#title").innerText;
    console.log(title)

    const amountField = parentElement.querySelector("#amount");
    const amount = parseFloat(amountField.value);
  
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    alert("done");
    mainBalanceField.innerText = mainBalance - amount;
    balanceField.innerText = balance + amount;
    amountField.value = "";

const item = document.createElement("div"); // Create a div element

// Add classes and content to the div using innerHTML
item.innerHTML = `
    <div class="p-8 border rounded-lg mt-8">
        <h4 class="text-lg font-bold">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
        <p class="text-base text-gray-700 pt-2">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
    </div>
`;

// Append the created element to the history section
document.getElementById("history_section").appendChild(item);

// Log the created item
console.log(item);

  });







