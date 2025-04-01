let Calculation = localStorage.getItem('VALUES') || '';

displayCalculation(); // Display stored value when the page loads

function displayCalculation(value) {
    if (value !== undefined) {
        Calculation += value; // Append value
        localStorage.setItem('VALUES', Calculation); // Save to localStorage
    }
    document.querySelector('.js-result-value').innerHTML = Calculation;
    return Calculation;
}

function clearResult() {
    Calculation = ''; // Reset Calculation
    localStorage.setItem('VALUES', ''); // Clear localStorage
    document.querySelector('.js-result-value').innerHTML = ''; // Clear display
}
