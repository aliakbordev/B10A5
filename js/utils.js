
document.getElementById("noakhali-btn").addEventListener("click",function(e){
  const mainBalanceField = document.getElementById("total_balance");
  let mainBalance = parseFloat(mainBalanceField.innerText);

  const balanceField = document.getElementById("balance-noakhali");
  let balance = parseFloat(balanceField.innerText);

  const heading = document.getElementById("title-noakhali").innerText;

  const amountField = document.getElementById("amount-noakhali");
  const amount = parseFloat(amountField.value);

  console.log(amount);

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
        <p class="text-base text-gray-700 pt-2">Date : ${new Date().toString()}</p>
    </div>
`;
    document.getElementById("history_section").appendChild(history);
  
})






    

    //  

    //  

   


