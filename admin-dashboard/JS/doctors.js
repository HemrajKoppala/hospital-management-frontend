/* ==========================
   Doctor Modal
========================== */

const doctorModal = document.getElementById("doctorModal");

const addDoctorBtn = document.getElementById("addDoctorBtn");

const closeModal = document.getElementById("closeModal");

const cancelDoctorBtn = document.getElementById("cancelDoctorBtn");

const saveDoctorBtn = document.getElementById("saveDoctorBtn");
const doctorTableBody = document.getElementById("doctorTableBody");

saveDoctorBtn.addEventListener("click", async function () {

    const name = document.getElementById("doctorName").value.trim();

const email = document.getElementById("doctorEmail").value.trim();

const password = document.getElementById("doctorPassword").value.trim();

const phone = document.getElementById("doctorPhone").value.trim();

const qualification = document.getElementById("doctorQualification").value.trim();

const department = document.getElementById("doctorDepartment").value.trim();

const specialization = document.getElementById("doctorSpecialization").value.trim();

const experience = parseInt(document.getElementById("doctorExperience").value);

const consultation_fee = document.getElementById("doctorFee").value;

if (
    !name ||
    !email ||
    !password ||
    !phone ||
    !qualification ||
    !department ||
    !specialization ||
    !experience ||
    !consultation_fee
) {

    alert("Please fill all fields.");

    return;

}

try {

    const response = await fetch("http://127.0.0.1:8000/api/doctors/", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            name: name,
            email: email,
            password: password,
            phone: phone,
            qualification: qualification,
            department: department,
            specialization: specialization,
            experience: experience,
            consultation_fee: consultation_fee,
            available: true

        })

    });

    const data = await response.json();

    if (response.ok) {

        alert("Doctor Added Successfully!");

        loadDoctors();

        console.log(data);

    }

    else {

        alert(JSON.stringify(data));

    }

}

catch (error) {

    console.error(error);

    alert("Cannot connect to server.");

}



doctorModal.style.display = "none";

document.getElementById("doctorName").value = "";
document.getElementById("doctorEmail").value = "";
document.getElementById("doctorPassword").value = "";
document.getElementById("doctorPhone").value = "";
document.getElementById("doctorQualification").value = "";
document.getElementById("doctorDepartment").value = "";
document.getElementById("doctorSpecialization").value = "";
document.getElementById("doctorExperience").value = "";
document.getElementById("doctorFee").value = "";

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

async function loadDoctors() {

    try {

        const response = await fetch("http://127.0.0.1:8000/api/doctors/");

        const doctors = await response.json();
        doctorTableBody.innerHTML = "";

        doctors.forEach((doctor, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${doctor.name}</td>
        <td>${doctor.specialization}</td>
        <td>${doctor.experience}</td>
        <td>${doctor.available ? "Active" : "Inactive"}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn" data-id="${doctor.id}">
    Delete
</button>
        </td>
    `;

    doctorTableBody.appendChild(row);
    const deleteBtn = row.querySelector(".delete-btn");

deleteBtn.addEventListener("click", async function () {

    const doctorId = this.dataset.id;

    const confirmDelete = confirm(
        "Are you sure you want to delete this doctor?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(
            `http://127.0.0.1:8000/api/doctors/${doctorId}/`,
            {
                method: "DELETE"
            }
        );

        if (response.ok) {

            alert("Doctor deleted successfully.");

            loadDoctors();

        }

        else {

            alert("Failed to delete doctor.");

        }

    }

    catch (error) {

        console.error(error);

        alert("Server Error");

    }

});

});

        

    }

    catch (error) {

        console.error(error);

        alert("Unable to load doctors.");

    }

}
loadDoctors();