/* ==========================
   Doctor Modal
========================== */

const doctorModal = document.getElementById("doctorModal");

const addDoctorBtn = document.getElementById("addDoctorBtn");

const closeModal = document.getElementById("closeModal");

const cancelDoctorBtn = document.getElementById("cancelDoctorBtn");

const saveDoctorBtn = document.getElementById("saveDoctorBtn");
const doctorTableBody = document.getElementById("doctorTableBody");

saveDoctorBtn.addEventListener("click", function () {

    const name = document.getElementById("doctorName").value;

const specialization =
document.getElementById("doctorSpecialization").value;

const experience =
document.getElementById("doctorExperience").value;

const phone =
document.getElementById("doctorPhone").value;

const email =
document.getElementById("doctorEmail").value;

const row = document.createElement("tr");

row.innerHTML = `
    <td>${doctorTableBody.rows.length + 1}</td>
    <td>${name}</td>
    <td>${specialization}</td>
    <td>${experience}</td>
    <td>Active</td>
    <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </td>
`;

doctorTableBody.appendChild(row);

doctorModal.style.display = "none";

document.getElementById("doctorName").value = "";
document.getElementById("doctorSpecialization").value = "";
document.getElementById("doctorExperience").value = "";
document.getElementById("doctorPhone").value = "";
document.getElementById("doctorEmail").value = "";

});

addDoctorBtn.addEventListener("click", function(){

    doctorModal.style.display = "flex";

});

cancelDoctorBtn.addEventListener("click", function(){

    doctorModal.style.display = "none";

});

closeModal.addEventListener("click", function(){

    doctorModal.style.display = "none";

});

window.addEventListener("click", function(e){

    if(e.target === doctorModal){

        doctorModal.style.display = "none";

    }

});