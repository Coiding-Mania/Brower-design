var dateDisplay = document.getElementById('dateDisplay');
var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.textContent = today.toLocaleDateString('en-US', options);