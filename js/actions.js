
document.getElementById("donate_btn").addEventListener("click", function(){
    const historySection = document.getElementById("history_section");
    const donationSection = document.getElementById("donate_section");
    historySection.classList.add("hidden");
    donationSection.classList.remove("hidden");
});

document.getElementById("history_btn").addEventListener("click", function () {
  const historySection = document.getElementById("history_section");
  const donationSection = document.getElementById("donate_section");
  historySection.classList.remove("hidden")
  donationSection.classList.add("hidden");
});