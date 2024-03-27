document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM loaded, running script...");

    var p = document.querySelector("p");
    console.log("Selected paragraph element:", p);

    if (p) {
        var date = new Date();
        console.log("Current date:", date);
        p.textContent = date.toString();
    } else {
        console.error("No paragraph element found!");
    }
});