



// show section by Id
function showSectionById(id){
    // show section
    document.getElementById("history_section").classList.add("hidden");
    document.getElementById("donate_section").classList.add("hidden");
    // hide section
    document.getElementById(id).classList.remove("hidden");
}