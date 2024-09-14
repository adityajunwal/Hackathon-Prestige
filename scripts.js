// Update the budget value display when the slider changes
function updateBudgetValue() {
    const budgetValue = document.getElementById("budget").value;
    document.getElementById("budgetValue").textContent = `₹${parseInt(budgetValue).toLocaleString()}`;
}

document.getElementById("travelForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const destination = document.getElementById("destination").value;
    const budget = document.getElementById("budget").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const interests = document.getElementById("interests").value;

    // Store data in localStorage
    localStorage.setItem("destination", destination);
    localStorage.setItem("budget", budget);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    localStorage.setItem("interests", interests);

    // Redirect to itinerary page
    window.location.href = "itinerary.html";
});

// Itinerary Page Script
if (window.location.pathname.includes('itinerary.html')) {
    
}

function saveToLocalStorage() {
    let destination = document.getElementById("destination").value;
    localStorage.setItem("savedDestination", destination);
    let budget = document.getElementById("budget").value;
    localStorage.setItem("savedBudget", budget);
    let startDate = document.getElementById("startDate").value;
    localStorage.setItem("savedStartDate", startDate);
    let endDate = document.getElementById("endDate").value;
    localStorage.setItem("savedEndDate", endDate);
}