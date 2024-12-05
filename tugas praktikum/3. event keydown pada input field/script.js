const inputField = document.getElementById('inputField');
const displaytext = document.getElementById('displaytext');

inputField.addEventListener('input', function(event) {
    displaytext.textContent = event.target.value;
    });