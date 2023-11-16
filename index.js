// Check if HTML is connected to JS
console.log("JavaScript is connected.");

// Arrays for names and occupations
const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];

// Initial array of freelancers
let freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

// Function to render freelancers
function renderFreelancers() {
  const container = document.querySelector("#freelancersContainer");
  container.innerHTML = ""; // Clear current content
  freelancers.forEach((freelancer) => {
    container.innerHTML += `<div>Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}</div>`;
  });
}

// Function to generate a random freelancer
function generateRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice = Math.floor(Math.random() * 100) + 20; // Random price between $20 and $120
  return { name, occupation, startingPrice };
}

// Function to calculate average starting price
function calculateAveragePrice() {
  const total = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0);
  const average = total / freelancers.length;
  document.querySelector(
    "#averagePrice"
  ).textContent = `Average Starting Price: $${average.toFixed(2)}`;
}

// Initial render
renderFreelancers();
calculateAveragePrice();

// Interval to add a new freelancer every few seconds
setInterval(() => {
  freelancers.push(generateRandomFreelancer());
  renderFreelancers();
  calculateAveragePrice();
}, 2000); // Every 2000 milliseconds (2 seconds)
