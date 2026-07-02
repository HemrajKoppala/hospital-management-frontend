const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){
    logoutBtn.addEventListener("click", function(e){

        e.preventDefault();

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if(confirmLogout){

            window.location.href = "../index.html";

        }
    });
}



const dashboardBtn = document.getElementById("dashboardBtn");
const doctorsBtn = document.getElementById("doctorsBtn");

const patientsBtn = document.getElementById("patientsBtn");



const pages = {
    dashboard: document.getElementById("dashboard-page"),
    doctors: document.getElementById("doctors-page"),
    patients: document.getElementById("patients-page"),
    appointments: document.getElementById("appointments-page"),
    reports: document.getElementById("reports-page"),
    settings: document.getElementById("settings-page")
};

function showPage(pageName){

    for(let page in pages){
        pages[page].style.display = "none";
    }

    pages[pageName].style.display = "block";
}


dashboardBtn.addEventListener("click", function(e){
    e.preventDefault();
    showPage("dashboard");
    setActive(this);
});

doctorsBtn.addEventListener("click", function(e){
    e.preventDefault();
    showPage("doctors");
    setActive(this);
});

patientsBtn.addEventListener("click", function(e){
    e.preventDefault();
    showPage("patients");
    setActive(this);
});


const appointmentsBtn =
    document.getElementById("appointmentsBtn");

appointmentsBtn.addEventListener("click", function(e){

    e.preventDefault();

    showPage("appointments");
    setActive(this);

});

function setActive(button){

    document.querySelectorAll(".nav-item")
        .forEach(item =>
            item.classList.remove("active"));

    button.classList.add("active");
}



const reportsBtn =
    document.getElementById("reportsBtn");

    reportsBtn.addEventListener("click", function(e){

    e.preventDefault();

    showPage("reports");

    setActive(this);

});



const settingsBtn =
    document.getElementById("settingsBtn");

    settingsBtn.addEventListener("click", function(e){

    e.preventDefault();

    showPage("settings");

    setActive(this);

});



/* ==========================
   Sidebar Toggle
========================== */

const menuToggle = document.querySelector(".menu-toggle");

const sidebar = document.querySelector(".sidebar");



menuToggle.addEventListener("click", function(){

    sidebar.classList.toggle("close");

    

});