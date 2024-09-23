// show section by Id
function showSectionById(sectionId, buttonId) {
  // show section
  document.getElementById("history_section").classList.add("hidden");
  document.getElementById("donate_section").classList.add("hidden");
  // hide section
  document.getElementById(sectionId).classList.remove("hidden");

  // button color change when button is active
  document.getElementById("donate_btn").classList.remove("bg-[#B4F461]");
  document.getElementById("donate_btn").classList.add("bg-[#F9F761]");
  document.getElementById("history_btn").classList.remove("bg-[#B4F461]");
  document.getElementById("history_btn").classList.add("bg-[#F9F761]");

  document.getElementById(buttonId).classList.add("bg-[#B4F461]");
  document.getElementById(buttonId).classList.remove("bg-[#F9F761]");
}


// blog buttons
  document.getElementById("blog").addEventListener("click", function () {
   window.location.href = "../blog.html";
  });

  