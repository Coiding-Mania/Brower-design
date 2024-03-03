document.addEventListener('DOMContentLoaded', function() {
  // Function to get current time
  function getTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  // Update clock every second
  function updateClock() {
    const clock = document.getElementById('clock');
    clock.textContent = getTime();
  }

  // Update clock immediately on page load
  updateClock();

  // Update clock every second
  setInterval(updateClock, 1000);
});




