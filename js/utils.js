document
  .getElementById("noakhali_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalanceField = document.getElementById("total_balance");
    let mainBalance = parseFloat(mainBalanceField.innerText);

    const parentElement = document.getElementById("noakhali_btn").parentElement;

    const balanceField = parentElement.querySelector("#balance");
    let balance = parseFloat(balanceField.innerText);

    const heading = parentElement.querySelector("#title").innerText;

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



const history = document.createElement("div");

history.innerHTML = `
    <div class="p-8 border rounded-lg mt-8">
        <h4 class="text-lg font-bold">${amount} Taka is ${heading}</h4>
        <p class="text-base text-gray-700 pt-2">Date : ${
          new Date().toString()
        }</p>
    </div>
`;


document.getElementById("history_section").appendChild(history);


  });







