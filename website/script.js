// Booking button action
const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", () => {
  alert("🚗 Thank you for booking with Bapi Car Travel!");
  bookBtn.textContent = "Booking Confirmed ✅";
  bookBtn.style.backgroundColor = "green";
  bookBtn.style.color = "white";
});


// Simple greeting based on time
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good Morning!";
} else if (hour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

console.log(greeting + " Welcome to RoadTrip Car Travel");

// Example trip planner (basic)
function planTrip(distance) {
  if (distance < 100) {
    return "Short trip – Perfect for a day drive!";
  } else if (distance < 500) {
    return "Medium trip – Plan a rest stop!";
  } else {
    return "Long trip – Overnight stay recommended!";
  }
}

// Example usage
console.log(planTrip(350));

