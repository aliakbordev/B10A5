// Donation and History button features
document.getElementById("donate_btn").addEventListener("click", function(){
  showSectionById("donate_section", "donate_btn");
});

document.getElementById("history_btn").addEventListener("click", function () {
  showSectionById("history_section", "history_btn");
});




// Donate and History features
// document.getElementById("noakhali-btn").addEventListener("click", function (event) {
//     event.preventDefault();
//     donateFunction("noakhali-btn","title-noakhali", "balance-noakhali")
//   });

// document
//   .getElementById("feni-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     donateFunction("#feni_btn","title-feni", "balance-feni");
//   });

// document
//   .getElementById("quota-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     donateFunction("quota_btn","title-quota", "balance-quota");
//   });