document.addEventListener("DOMContentLoaded", function () {
    
    // --- ChartJS Config for Appointments Overview Line Graph ---
    const ctx = document.getElementById('appointmentsChart').getContext('2d');
    
    // Gradient fill setup for the area under the curve
    const chartGradient = ctx.createLinearGradient(0, 0, 0, 300);
    chartGradient.addColorStop(0, 'rgba(0, 168, 150, 0.3)');  /* Teal alpha tint */
    chartGradient.addColorStop(1, 'rgba(0, 168, 150, 0.0)');

    const appointmentsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Appointments',
                data: [20, 32, 55, 40, 62, 45, 90], // Matches standard plot arcs in image
                borderColor: '#00a896', // Medical Teal Color matching visual
                borderWidth: 3,
                pointBackgroundColor: '#00a896',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.4, // Smooth curved geometry
                fill: true,
                backgroundColor: chartGradient
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Matches target image UI
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: '#627d98',
                        font: { size: 11 }
                    },
                    grid: {
                        color: '#e2e8f0',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#627d98',
                        font: { size: 11 }
                    },
                    grid: {
                        display: false // Clears vertical grids for clean visual
                    }
                }
            }
        }
    });

    // --- Interactive Logic (Optional Add-ons) ---
    // Handle switching between navigation tabs
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Quick action simple response alerts
    const actionCards = document.querySelectorAll('.action-btn-card');
    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            const actionText = this.querySelector('span').innerText;
           // alert(`Triggered Workflow: "${actionText}" functionality.`);
        });
    });
});


/* ==========================
   Global Search
========================== */

const globalSearch =
document.getElementById("globalSearch");

globalSearch.addEventListener("keyup", function(){

    const value =
    this.value.toLowerCase();

    // Doctors Page
    if(pages.doctors.style.display === "block"){

        const rows =
        document.querySelectorAll("#doctorTableBody tr");

        rows.forEach(row=>{

            const text =
            row.innerText.toLowerCase();

            row.style.display =
            text.includes(value)
            ? ""
            : "none";

        });

    }

});

/* ==========================
   View All Appointments
========================== */

const viewAllAppointmentsBtn =
document.getElementById("viewAllAppointmentsBtn");

if(viewAllAppointmentsBtn){

    viewAllAppointmentsBtn.addEventListener("click", function(){

        appointmentsBtn.click();

    });

}

/* ==========================
   Quick Actions
========================== */
const quickAddDoctor = document.getElementById("quickAddDoctor");

if (quickAddDoctor) {

    quickAddDoctor.addEventListener("click", function () {

        // Open Doctors page
        showPage("doctors");
        setActive(doctorsBtn);

        // Open Add Doctor popup
        document.getElementById("doctorModal").style.display = "flex";

    });

}

document.getElementById("quickAppointments")
.addEventListener("click", function(){

    appointmentsBtn.click();

});

document.getElementById("quickReports")
.addEventListener("click", function(){

    reportsBtn.click();

});

document.getElementById("quickSettings")
.addEventListener("click", function(){

    settingsBtn.click();

});