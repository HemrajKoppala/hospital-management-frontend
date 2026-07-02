/* ==========================
   Footer Navigation
========================== */

const footerDashboard = document.getElementById("footerDashboard");
const footerDoctors = document.getElementById("footerDoctors");
const footerPatients = document.getElementById("footerPatients");
const footerAppointments = document.getElementById("footerAppointments");
const footerReports = document.getElementById("footerReports");
const footerSettings = document.getElementById("footerSettings");

if (footerDashboard) {
    footerDashboard.addEventListener("click", function (e) {
        e.preventDefault();
        dashboardBtn.click();
    });
}

if (footerDoctors) {
    footerDoctors.addEventListener("click", function (e) {
        e.preventDefault();
        doctorsBtn.click();
    });
}

if (footerPatients) {
    footerPatients.addEventListener("click", function (e) {
        e.preventDefault();
        patientsBtn.click();
    });
}

if (footerAppointments) {
    footerAppointments.addEventListener("click", function (e) {
        e.preventDefault();
        appointmentsBtn.click();
    });
}

if (footerReports) {
    footerReports.addEventListener("click", function (e) {
        e.preventDefault();
        reportsBtn.click();
    });
}

if (footerSettings) {
    footerSettings.addEventListener("click", function (e) {
        e.preventDefault();
        settingsBtn.click();
    });
}