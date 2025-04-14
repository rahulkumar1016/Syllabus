// Go to Vocational Course
function nextPage() {
    window.location.href = 'Vocational.html';
  }
// Go to Regular Course
  function regularcourses() {
    window.location.href = 'Regular.html';
  }
// Query Box
  function sendMessage() {
    const msg = document.getElementById('message').value;
    if (msg.trim() !== "") {
      alert("Thank you! Your message has been sent.");
      document.getElementById('message').value = "";
    }
    return false;
  }
// Dark Mode Function
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }


