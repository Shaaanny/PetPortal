

// For Toggle Dark Mode
const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
        modeSwitch.setAttribute("aria-label", "Switch to Light Mode"); // Accessibility improvement
    } else {
        modeText.innerText = "Dark Mode";
        modeSwitch.setAttribute("aria-label", "Switch to Dark Mode"); // Accessibility improvement
    }
});

 // Sample Chart.js implementation
 const adoptionsCtx = document.getElementById('adoptionsChart').getContext('2d');
 const adoptionsChart = new Chart(adoptionsCtx, {
     type: 'line',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
         datasets: [{
             label: 'Monthly Adoptions',
             data: [12, 19, 15, 27, 23],
             borderColor: 'rgb(75, 192, 192)',
             tension: 0.1
         }]
     }
 });
 
 
 const petTypesCtx = document.getElementById('petTypesChart').getContext('2d');
 const petTypesChart = new Chart(petTypesCtx, {
     type: 'doughnut',
     data: {
         labels: ['Dogs', 'Cats', 'Others'],
         datasets: [{
             data: [65, 25, 10],
             backgroundColor: [
                 'rgb(54, 162, 235)',
                 'rgb(255, 99, 132)',
                 'rgb(255, 205, 86)'
             ]
         }]
     }
 });



 