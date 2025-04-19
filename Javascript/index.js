// Grab elements from the DOM
const priceInput = document.getElementById('price');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculate-btn');
const totalCostDisplay = document.getElementById('total-cost');

// Event Listener for button click
calculateBtn.addEventListener('click', function() {
    // Get values from input fields
    const pricePerLiter = parseFloat(priceInput.value);
    const litersPurchased = parseFloat(litersInput.value);

    // Calculate total cost
    const totalCost = pricePerLiter * litersPurchased;

    // Display total cost formatted to two decimal places
    totalCostDisplay.textContent = `Total Cost: AED${totalCost.toFixed(2)}`;
});
