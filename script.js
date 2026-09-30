// ===== WELCOME MESSAGE =====

console.log("Welcome to Teurebo's website!");


// ===== BUTTON CLICK MESSAGE =====

const links = document.querySelectorAll(".links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("You clicked: " + link.textContent.trim());

    });

});