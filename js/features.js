// Donation and History button features
document.getElementById("donate_btn").addEventListener("click", function(){
  showSectionById("donate_section", "donate_btn");
});
document.getElementById("history_btn").addEventListener("click", function () {
  showSectionById("history_section", "history_btn");
});

// Donate feature
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    // const section = this.closest(".border"); // Get the section
    const section = this.parentElement;
    handleDonation(section);
  });
});
