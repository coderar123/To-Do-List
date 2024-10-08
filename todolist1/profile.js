document.getElementById('logoutButton').addEventListener('click', function() {
    alert('Logging out...');
    // Implement actual logout functionality here
    window.location.href = 'login.html';  // Redirect to the login page
});

// FullCalendar initialization
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Event 1',
                start: '2024-06-01'
            },
            {
                title: 'Event 2',
                start: '2024-06-07',
                end: '2024-06-10'
            }
            // Add more events as needed
        ]
    });
    calendar.render();
});

// Chart.js initialization
var ctx = document.getElementById('performanceGraph').getContext('2d');
var performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Performance',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
