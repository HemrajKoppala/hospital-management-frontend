// ==========================================================================
// CORE APP STATE MEMORY INTERFACES & PREDEFINED DATASETS
// ==========================================================================
function getRelativeDate(daysOffset) {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

const DOCTORS = [
    { name: "Dr. Aruna", email: "aruna@mediconnect.com", password: "aruna123", department: "Cardiology", experience: "15 Years", fee: 800, phone: "+91 9876543210" },
    { name: "Dr. Saniya", email: "saniya@mediconnect.com", password: "saniya123", department: "Neurology", experience: "12 Years", fee: 900, phone: "+91 9876543211" },
    { name: "Dr. Bharath", email: "bharath@mediconnect.com", password: "bharath123", department: "Orthopedics", experience: "18 Years", fee: 1000, phone: "+91 9876543212" },
    { name: "Dr. Jayachandhra", email: "jayachandhra@mediconnect.com", password: "jaya123", department: "Ophthalmology", experience: "14 Years", fee: 700, phone: "+91 9876543213" },
    { name: "Dr. Sruthi", email: "sruthi@mediconnect.com", password: "sruthi123", department: "Pediatrics", experience: "10 Years", fee: 600, phone: "+91 9876543214" },
    { name: "Dr. Sreedhar", email: "sreedhar@mediconnect.com", password: "sreedhar123", department: "Dentistry", experience: "16 Years", fee: 850, phone: "+91 9876543215" }
];

let CURRENT_DOCTOR = DOCTORS[0]; // Set default loaded doctor

let APPOINTMENTS_DATA = [
    // Cardiology (Dr. Aruna)
    { id: "APT-201", patientName: "Jane Doe", age: 29, gender: "Female", date: getRelativeDate(0), time: "09:00 AM", department: "Cardiology", status: "Pending", priority: "Urgent", complaint: "Acute chest palpitations accompanied by localized shortness of breath." },
    { id: "APT-202", patientName: "John Smith", age: 45, gender: "Male", date: getRelativeDate(0), time: "10:30 AM", department: "Cardiology", status: "Confirmed", priority: "Follow-up", complaint: "Routine follow-up regarding post-op healing tracking metrics." },
    { id: "APT-205", patientName: "Sarah Wilson", age: 28, gender: "Female", date: getRelativeDate(0), time: "02:30 PM", department: "Cardiology", status: "Confirmed", priority: "Routine", complaint: "General cardiac health screening profile." },
    { id: "APT-208", patientName: "James Taylor", age: 39, gender: "Male", date: getRelativeDate(1), time: "09:00 AM", department: "Cardiology", status: "Pending", priority: "Follow-up", complaint: "Blood pressure monitor recalibration check." },

    // Neurology (Dr. Saniya)
    { id: "APT-204", patientName: "Michael Brown", age: 52, gender: "Male", date: getRelativeDate(0), time: "01:00 PM", department: "Neurology", status: "Completed", priority: "Follow-up", complaint: "Migraine medication review and adjustment session." },
    { id: "APT-209", patientName: "Patricia Anderson", age: 55, gender: "Female", date: getRelativeDate(1), time: "10:00 AM", department: "Neurology", status: "Confirmed", priority: "Urgent", complaint: "Sudden onset localized numbness in the left arm." },
    { id: "APT-301", patientName: "Alice Miller", age: 62, gender: "Female", date: getRelativeDate(0), time: "09:30 AM", department: "Neurology", status: "Pending", priority: "Urgent", complaint: "Frequent memory lapses and confusion spells." },

    // Orthopedics (Dr. Bharath)
    { id: "APT-206", patientName: "Robert Johnson", age: 61, gender: "Male", date: getRelativeDate(0), time: "04:00 PM", department: "Orthopedics", status: "Pending", priority: "Urgent", complaint: "Severe acute knee joint inflammation and restricted mobility." },
    { id: "APT-210", patientName: "David Thomas", age: 41, gender: "Male", date: getRelativeDate(1), time: "11:30 AM", department: "Orthopedics", status: "Pending", priority: "Routine", complaint: "Chronic lower back pain assessment." },
    { id: "APT-302", patientName: "Kevin Vance", age: 35, gender: "Male", date: getRelativeDate(0), time: "11:00 AM", department: "Orthopedics", status: "Confirmed", priority: "Follow-up", complaint: "Post-fracture plaster removal and physical therapy planning." },

    // Ophthalmology (Dr. Jayachandhra)
    { id: "APT-303", patientName: "Grace Hopper", age: 70, gender: "Female", date: getRelativeDate(0), time: "10:00 AM", department: "Ophthalmology", status: "Confirmed", priority: "Routine", complaint: "Progressive blurry vision and cataract screening." },
    { id: "APT-304", patientName: "Alan Turing", age: 42, gender: "Male", date: getRelativeDate(0), time: "01:30 PM", department: "Ophthalmology", status: "Pending", priority: "Urgent", complaint: "Foreign object entry in right eye with severe redness." },
    { id: "APT-305", patientName: "Ada Lovelace", age: 28, gender: "Female", date: getRelativeDate(1), time: "03:00 PM", department: "Ophthalmology", status: "Completed", priority: "Follow-up", complaint: "Post-LASIK healing evaluation check." },

    // Pediatrics (Dr. Sruthi)
    { id: "APT-207", patientName: "Laura Martinez", age: 8, gender: "Female", date: getRelativeDate(0), time: "05:15 PM", department: "Pediatrics", status: "Cancelled", priority: "Routine", complaint: "Seasonal viral fever and persistent cough." },
    { id: "APT-212", patientName: "William White", age: 12, gender: "Male", date: getRelativeDate(2), time: "03:45 PM", department: "Pediatrics", status: "Completed", priority: "Routine", complaint: "Scheduled structural vaccination series." },
    { id: "APT-306", patientName: "Billy Kid", age: 5, gender: "Male", date: getRelativeDate(0), time: "02:00 PM", department: "Pediatrics", status: "Pending", priority: "Urgent", complaint: "Acute abdominal pain and vomiting." },

    // Dentistry (Dr. Sreedhar)
    { id: "APT-307", patientName: "Steve Rogers", age: 33, gender: "Male", date: getRelativeDate(0), time: "09:00 AM", department: "Dentistry", status: "Pending", priority: "Urgent", complaint: "Severe wisdom tooth pain and gum swelling." },
    { id: "APT-308", patientName: "Tony Stark", age: 48, gender: "Male", date: getRelativeDate(0), time: "10:30 AM", department: "Dentistry", status: "Confirmed", priority: "Routine", complaint: "Dental scaling and routine oral hygiene check." },
    { id: "APT-309", patientName: "Bruce Banner", age: 51, gender: "Male", date: getRelativeDate(1), time: "02:00 PM", department: "Dentistry", status: "Completed", priority: "Follow-up", complaint: "Root canal therapy second sitting." }
];

let SCHEDULE_DATA = [
    { id: 1, day: "Mondays", time: "09:00 AM - 12:00 PM" },
    { id: 2, day: "Wednesdays", time: "01:00 PM - 04:00 PM" },
    { id: 3, day: "Fridays", time: "05:00 PM - 08:00 PM" }
];

let LEAVE_DATA = [
    { id: 101, type: "Medical Leave", start: getRelativeDate(3), end: getRelativeDate(4), format: "multiple", reason: "Minor procedure and recovery.", emergency: false, status: "Approved" },
    { id: 102, type: "Family Emergency", start: getRelativeDate(12), end: getRelativeDate(12), format: "single", reason: "Family matter requires immediate attention.", emergency: true, status: "Approved" },
    { id: 103, type: "Conference / Training", start: getRelativeDate(20), end: getRelativeDate(22), format: "multiple", reason: "Attending annual cardiology symposium.", emergency: false, status: "Pending" }
];

const DOCTOR_REVIEWS = {
    "aruna@mediconnect.com": {
        avgRating: "4.9/5",
        totalCount: "48 reviews",
        satisfaction: "98%",
        list: [
            { name: "Amit S.", rating: 5, date: "June 25, 2026", text: "Dr. Aruna is extremely professional and polite. She listened to all my cardiac concerns patiently and explained the treatment workflow very clearly." },
            { name: "Priya R.", rating: 5, date: "June 23, 2026", text: "Outstanding doctor! Her diagnosis of my mother's hypertension was highly accurate. Punctuality is great." },
            { name: "Vikram K.", rating: 4, date: "June 20, 2026", text: "Very knowledgeable cardiologist. The consultation was detail-oriented. Clean clinic environment." },
            { name: "Sneha D.", rating: 5, date: "June 18, 2026", text: "Excellent experience. She makes you feel very comfortable and explains everything in simple terms. Highly recommended!" }
        ]
    },
    "saniya@mediconnect.com": {
        avgRating: "4.8/5",
        totalCount: "36 reviews",
        satisfaction: "96%",
        list: [
            { name: "Rahul M.", rating: 5, date: "June 24, 2026", text: "Dr. Saniya is a wonderful neurologist. She treated my chronic migraine issues with great care. Very detailed explanation." },
            { name: "Aditi G.", rating: 4, date: "June 22, 2026", text: "Very friendly and analytical. Helped resolve my sleep apnea queries and recommended a highly effective treatment plan." },
            { name: "Rohan V.", rating: 5, date: "June 19, 2026", text: "Excellent medical knowledge and communication. She answered all my neurological health queries with utmost professionalism." },
            { name: "Meera J.", rating: 5, date: "June 15, 2026", text: "She is extremely patient-centric. Her calm behavior and thorough diagnosis gave me great confidence during my recovery." }
        ]
    },
    "bharath@mediconnect.com": {
        avgRating: "4.9/5",
        totalCount: "52 reviews",
        satisfaction: "97%",
        list: [
            { name: "Suresh P.", rating: 5, date: "June 25, 2026", text: "Dr. Bharath is an exceptional orthopedist. My knee pain has significantly reduced after following his rehabilitation plan." },
            { name: "Kiran S.", rating: 5, date: "June 21, 2026", text: "Highly professional orthopedic specialist. He explains the root cause of bone fractures and joints issues wonderfully." },
            { name: "Deepa N.", rating: 4, date: "June 18, 2026", text: "Very good experience. He is punctual, professional, and provides highly practical advice regarding physical therapy." },
            { name: "Arjun T.", rating: 5, date: "June 14, 2026", text: "Painless joint treatment! Excellent surgical guidance and post-op follow-up care. A truly reliable doctor." }
        ]
    },
    "jayachandhra@mediconnect.com": {
        avgRating: "4.7/5",
        totalCount: "29 reviews",
        satisfaction: "94%",
        list: [
            { name: "Gopal C.", rating: 5, date: "June 24, 2026", text: "Dr. Jayachandhra is a brilliant ophthalmologist. My cataract surgery went very smoothly. Exceptional precision and care." },
            { name: "Lata K.", rating: 4, date: "June 22, 2026", text: "Good eye checkup experience. He prescribed correct spectacles power and gave excellent advice for dry eyes." },
            { name: "Vijay D.", rating: 5, date: "June 17, 2026", text: "Very thorough examination of retina. He is highly patient, answering all questions about laser treatment clearly." },
            { name: "Anjali S.", rating: 5, date: "June 14, 2026", text: "Very friendly and expert doctor. The clinic staff is also extremely helpful and well-organized." }
        ]
    },
    "sruthi@mediconnect.com": {
        avgRating: "4.8/5",
        totalCount: "42 reviews",
        satisfaction: "95%",
        list: [
            { name: "Ramesh B.", rating: 5, date: "June 25, 2026", text: "Dr. Sruthi is wonderful with children. My daughter felt very comfortable during her vaccination. Very gentle and patient." },
            { name: "Nisha T.", rating: 5, date: "June 22, 2026", text: "She is highly caring and comforting. Explains baby nutrition and growth parameters in a very detailed manner." },
            { name: "Karthik P.", rating: 4, date: "June 19, 2026", text: "Excellent pediatrician. Quick diagnosis of viral fever and very responsive to follow-up texts." },
            { name: "Swati R.", rating: 5, date: "June 15, 2026", text: "Highly recommend Dr. Sruthi for any pediatric needs. Her friendly behavior immediately calms anxious children." }
        ]
    },
    "sreedhar@mediconnect.com": {
        avgRating: "4.9/5",
        totalCount: "50 reviews",
        satisfaction: "98%",
        list: [
            { name: "Manish K.", rating: 5, date: "June 24, 2026", text: "Dr. Sreedhar is an excellent dentist. My root canal was completely painless! Very advanced equipment and hygiene." },
            { name: "Ritu A.", rating: 5, date: "June 21, 2026", text: "Exceptional scaling and cleaning service. He explains tooth care tips very thoroughly. Very punctual." },
            { name: "Harish G.", rating: 4, date: "June 19, 2026", text: "Highly professional dentistry. Took great care in matching the crown color during my implant restoration." },
            { name: "Pooja V.", rating: 5, date: "June 16, 2026", text: "Very gentle extraction process. He makes sure the patient is comfortable and explains post-op precautions clearly." }
        ]
    }
};

let SELECTED_APPOINTMENT_ID = null;
let CURRENT_DASHBOARD_FILTER = 'today';
let IS_AVAILABLE_TODAY = true;

let currentDateRender = new Date(); 

const departmentQuotes = {
  "Cardiology": "Every heartbeat you protect brings hope to another family.",
  "Neurology": "Your expertise restores clarity and confidence to every patient.",
  "Pediatrics": "Your care shapes healthier futures for the next generation.",
  "Orthopedics": "Every step a patient takes begins with your dedication.",
  "Ophthalmology": "Helping patients see the beauty of the world with clear vision.",
  "Dentistry": "Brightening lives one healthy smile at a time."
};

const departmentIcons = {
  "Cardiology": "bi-capsule", // Fallback only, Cardiology dynamic banner renders the logo
  "Neurology": "bi-activity",
  "Pediatrics": "bi-emoji-smile-fill",
  "Orthopedics": "bi-person-standing",
  "Ophthalmology": "bi-eye-fill",
  "Dentistry": "bi-tooth"
};

let statusChartInstance = null;
let weeklyChartInstance = null;
let departmentChartInstance = null;

// ==========================================================================
// PORTAL INITIALIZATION & ROUTING ROUTINES
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Render floating background particles on load (using non-heart/non-cross icons)
    const bgfx = document.getElementById('login-bg-fx');
    if (bgfx) {
        bgfx.innerHTML = "";
        const iconList = ['bi-dna', 'bi-stethoscope', 'bi-capsule', 'bi-virus', 'bi-capsule-pill', 'bi-thermometer-half', 'bi-bandaid', 'bi-prescription2'];
        for(let i=0; i<30; i++) {
            const icon = document.createElement('i');
            const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];
            icon.className = `float-ic bi ${randomIcon}`;
            icon.style.left = Math.random() * 100 + '%';
            icon.style.top = Math.random() * 100 + '%';
            icon.style.animationDelay = (Math.random() * 8) + 's';
            icon.style.animationDuration = (8 + Math.random() * 10) + 's';
            icon.style.fontSize = (14 + Math.random() * 20) + 'px';
            bgfx.appendChild(icon);
        }
    }

    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const closeBtn = document.getElementById("sidebar-close");
    
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
    }
    if (closeBtn && sidebar) {
        closeBtn.addEventListener("click", () => sidebar.classList.remove("open"));
    }

    const searchInput = document.getElementById("appointmentSearch");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = APPOINTMENTS_DATA.filter(apt => apt.patientName.toLowerCase().includes(term));
            renderAppointmentsTable(filtered);
        });
    }

    const dashboardSearchInput = document.getElementById("dashboardAppointmentSearch");
    if (dashboardSearchInput) {
        dashboardSearchInput.addEventListener("input", (e) => {
            renderTodaysAppointments(e.target.value);
        });
    }

    const availToggle = document.getElementById("availabilityToggle");
    if (availToggle) {
        availToggle.addEventListener("change", (e) => {
            IS_AVAILABLE_TODAY = e.target.checked;
            updateAvailabilityToggle();
        });
    }

    document.addEventListener('click', (e) => {
        const panel = document.getElementById('profile-dropdown-panel');
        const toggle = document.getElementById('nav-profile-toggle');
        if (panel && !panel.classList.contains('d-none')) {
            if (!panel.contains(e.target) && !toggle.contains(e.target)) {
                panel.classList.add('d-none');
            }
        }
    });

    // Check remember me pre-fill
    const savedEmail = localStorage.getItem("remember_email");
    const savedPassword = localStorage.getItem("remember_password");
    if (savedEmail && savedPassword) {
        const idInput = document.getElementById("login-id");
        const pwInput = document.getElementById("login-password");
        const remCheck = document.getElementById("rememberMe");
        if (idInput) idInput.value = savedEmail;
        if (pwInput) pwInput.value = savedPassword;
        if (remCheck) remCheck.checked = true;
    }

    initNavigationListeners();
    initFormProcessors();
    loadProfile(); 
    
    renderAppointmentsTable(APPOINTMENTS_DATA);
    renderScheduleTable();
    updateDashboardGreeting();
    updateDashboardStats();
    renderTodaysAppointments();
    renderDoctorReviews();
    
    renderMonthlyCalendar();
    
    // Photo Upload Listener
    const photoUpload = document.getElementById('profile-photo-upload');
    if (photoUpload) {
        photoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const dataUrl = event.target.result;
                    localStorage.setItem('doctorProfilePhoto_' + CURRENT_DOCTOR.email, dataUrl);
                    updateProfilePhotoUI(dataUrl);
                    const removePhotoContainer = document.getElementById('remove-photo-container');
                    if (removePhotoContainer) removePhotoContainer.classList.remove('d-none');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Remove Photo Listener
    const btnRemovePhoto = document.getElementById('btn-remove-photo');
    if (btnRemovePhoto) {
        btnRemovePhoto.addEventListener('click', function() {
            localStorage.removeItem('doctorProfilePhoto_' + CURRENT_DOCTOR.email);
            const photoUpload = document.getElementById('profile-photo-upload');
            if (photoUpload) photoUpload.value = "";
            loadProfile();
            showToast('Profile Photo Removed Successfully');
        });
    }
});

function initNavigationListeners() {
    document.querySelectorAll("[data-view]").forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const targetedViewId = anchor.getAttribute("data-view");
            switchView(targetedViewId);
            
            const sidebar = document.getElementById("sidebar");
            if (sidebar) sidebar.classList.remove("open"); 
        });
    });
}

function switchView(viewId) {
    document.querySelectorAll(".app-view").forEach(view => view.classList.add("d-none"));
    
    const activeSection = document.getElementById(`view-${viewId}`);
    if (activeSection) activeSection.classList.remove("d-none");

    document.querySelectorAll("[data-view]").forEach(anchor => {
        if(anchor.getAttribute("data-view") === viewId) {
            anchor.classList.add("active");
        } else {
            anchor.classList.remove("active");
        }
    });

    if (viewId === "dashboard") {
        updateDashboardGreeting();
        updateDashboardStats();
        renderTodaysAppointments();
        renderDoctorReviews();
    }
    
    if (viewId === "schedule") {
        renderMonthlyCalendar();
    }

    if (viewId === "analytics") {
        renderAnalytics();
    }
}

// ==========================================================================
// DYNAMIC EDITABLE PROFILE & DROPDOWN LOGIC
// ==========================================================================
function updateGlobalProfileUI() {
    const nameInput = document.getElementById('prof-name');
    const deptInput = document.getElementById('prof-domain');
    const expInput = document.getElementById('prof-exp');
    const emailInput = document.getElementById('prof-email');
    const phoneInput = document.getElementById('prof-phone');

    const name = nameInput ? nameInput.value : CURRENT_DOCTOR.name;
    const dept = deptInput ? deptInput.value : CURRENT_DOCTOR.department;
    const exp = expInput ? expInput.value : CURRENT_DOCTOR.experience;
    const email = emailInput ? emailInput.value : CURRENT_DOCTOR.email;
    const phone = phoneInput ? phoneInput.value : '+91 9876543210';

    const navName = document.getElementById('nav-doc-name');
    const navDept = document.getElementById('nav-doc-dept');
    if(navName) navName.innerText = name;
    if(navDept) navDept.innerText = dept;

    const dropName = document.getElementById('drop-name');
    const dropDept = document.getElementById('drop-dept');
    const dropExp = document.getElementById('drop-exp');
    const dropEmail = document.getElementById('drop-email');
    const dropPhone = document.getElementById('drop-phone');
    if(dropName) dropName.innerText = name;
    if(dropDept) dropDept.innerText = dept;
    if(dropExp) dropExp.innerText = exp;
    if(dropEmail) dropEmail.innerText = email;
    if(dropPhone) dropPhone.innerText = phone;

    const displayName = document.getElementById('display-name');
    const displayDomain = document.getElementById('display-domain');
    if(displayName) displayName.innerText = name;
    
    if(displayDomain) {
        if (dept.toLowerCase() === "cardiology") {
            displayDomain.innerHTML = `<img src="logo.jpeg" alt="MEDI CONNECT" style="height: 16px; width: 16px; object-fit: contain; vertical-align: text-top; margin-right: 4px;"> ${dept}`;
        } else {
            let currentDeptIcon = departmentIcons[dept] || "bi-hospital-fill";
            displayDomain.innerHTML = `<i class="bi ${currentDeptIcon} me-1"></i> ${dept}`;
        }
    }

    // Update initials block
    const initials = name.split(" ").map(n => n[0]).join("");
    const initialsEl = document.getElementById('nav-doc-initials');
    if (initialsEl) initialsEl.innerText = initials;
    const dropInitials = document.getElementById('drop-initials');
    if (dropInitials) dropInitials.innerText = initials;
}

function updateProfilePhotoUI(dataUrl) {
    const profileImg = document.getElementById('profile-page-img');
    if(profileImg) profileImg.src = dataUrl;

    const navAvatar = document.getElementById('nav-doc-avatar');
    const navInitials = document.getElementById('nav-doc-initials');
    
    if(navAvatar && navInitials) {
        navAvatar.src = dataUrl;
        navAvatar.classList.remove('d-none');
        navAvatar.classList.add('d-md-block');
        navInitials.classList.add('d-none');
    }

    const dropInitials = document.getElementById('drop-initials');
    if(dropInitials) {
        dropInitials.innerHTML = `<img src="${dataUrl}" class="rounded-circle" style="width: 100%; height: 100%; object-fit: cover;">`;
    }
}

function toggleDoctorProfilePanel(e) {
    e.stopPropagation();
    const panel = document.getElementById('profile-dropdown-panel');
    if (panel) panel.classList.toggle('d-none');
}

// Fixed toggleEditMode to properly render domain badge based on updated input value
function toggleEditMode(enable) {
    const inputs = document.querySelectorAll('.profile-input');
    const editBtn = document.getElementById('btn-edit-profile');
    const actions = document.getElementById('edit-actions');

    inputs.forEach(input => input.disabled = !enable);

    if (enable) {
        if(editBtn) editBtn.classList.add('d-none');
        if(actions) actions.classList.remove('d-none');
    } else {
        if(editBtn) editBtn.classList.remove('d-none');
        if(actions) actions.classList.add('d-none');
        loadProfile(); 
    }
}

function saveProfile() {
    const data = {
        name: document.getElementById('prof-name').value,
        email: document.getElementById('prof-email').value,
        phone: document.getElementById('prof-phone').value,
        exp: document.getElementById('prof-exp').value,
        domain: document.getElementById('prof-domain').value,
        fee: document.getElementById('prof-fee').value
    };
    
    localStorage.setItem('doctorProfileMaster_' + CURRENT_DOCTOR.email, JSON.stringify(data));
    
    updateGlobalProfileUI();
    updateDashboardGreeting();
    
    toggleEditMode(false);
    showToast('Profile Details Updated Successfully');
}

function loadProfile() {
    const savedData = JSON.parse(localStorage.getItem('doctorProfileMaster_' + CURRENT_DOCTOR.email));
    if (savedData) {
        document.getElementById('prof-name').value = savedData.name;
        document.getElementById('prof-email').value = savedData.email;
        document.getElementById('prof-phone').value = savedData.phone;
        document.getElementById('prof-exp').value = savedData.exp;
        document.getElementById('prof-domain').value = savedData.domain;
        document.getElementById('prof-fee').value = savedData.fee;
    } else {
        document.getElementById('prof-name').value = CURRENT_DOCTOR.name;
        document.getElementById('prof-email').value = CURRENT_DOCTOR.email;
        document.getElementById('prof-phone').value = CURRENT_DOCTOR.phone || "+91 9876543210";
        document.getElementById('prof-exp').value = CURRENT_DOCTOR.experience || "10 Years";
        document.getElementById('prof-domain').value = CURRENT_DOCTOR.department;
        document.getElementById('prof-fee').value = CURRENT_DOCTOR.fee || 500;
    }
    
    const savedPhoto = localStorage.getItem('doctorProfilePhoto_' + CURRENT_DOCTOR.email);
    const removePhotoContainer = document.getElementById('remove-photo-container');
    if (savedPhoto) {
        updateProfilePhotoUI(savedPhoto);
        if (removePhotoContainer) removePhotoContainer.classList.remove('d-none');
    } else {
        const defaultPhotos = {
            "aruna@mediconnect.com": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240",
            "saniya@mediconnect.com": "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=240",
            "bharath@mediconnect.com": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=240",
            "jayachandhra@mediconnect.com": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=240",
            "sruthi@mediconnect.com": "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=240",
            "sreedhar@mediconnect.com": "https://images.unsplash.com/photo-1622834048635-61ecf7132c6c?auto=format&fit=crop&q=80&w=240"
        };
        updateProfilePhotoUI(defaultPhotos[CURRENT_DOCTOR.email] || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240');
        if (removePhotoContainer) removePhotoContainer.classList.add('d-none');
    }

    updateGlobalProfileUI();
}

function showToast(message) {
    const toastEl = document.getElementById('profileToast');
    const msgEl = document.getElementById('toastMessage');
    if (toastEl && msgEl) {
        msgEl.innerText = message;
        const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
        toast.show();
    }
}

// ==========================================================================
// DYNAMIC GREETING & DASHBOARD STATS LOGIC ENGINE
// ==========================================================================
function updateDashboardGreeting() {
    const greetingEl = document.getElementById("dashboard-greeting");
    const quoteEl = document.getElementById("dashboard-quote");
    const summaryEl = document.getElementById("dashboard-summary");
    const dateEl = document.getElementById("dashboard-date");
    const iconWrapper = document.getElementById("department-icon-wrapper");

    if (!greetingEl) return;

    const currentHour = new Date().getHours();
    let timeGreeting = "Good Evening";
    let emoji = "🌙";

    if (currentHour >= 5 && currentHour < 12) {
        timeGreeting = "Good Morning";
        emoji = "👋";
    } else if (currentHour >= 12 && currentHour < 17) {
        timeGreeting = "Good Afternoon";
        emoji = "☀️";
    } 

    const nameInput = document.getElementById("prof-name");
    const deptInput = document.getElementById("prof-domain");

    const doctorName = nameInput && nameInput.value.trim() !== "" ? nameInput.value.trim() : CURRENT_DOCTOR.name;
    const department = deptInput && deptInput.value.trim() !== "" ? deptInput.value.trim() : CURRENT_DOCTOR.department;

    greetingEl.innerHTML = `${timeGreeting}, ${doctorName} ${emoji}`;
    
    if (quoteEl) {
        let matchedKey = Object.keys(departmentQuotes).find(key => department.toLowerCase().includes(key.toLowerCase()));
        quoteEl.textContent = matchedKey ? departmentQuotes[matchedKey] : "Your expertise and compassion make a difference every day.";
    }

    if (iconWrapper) {
        updateDepartmentIllustration(department);
    }

    const today = new Date();
    if (dateEl) {
        dateEl.textContent = today.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    if (summaryEl) {
        const todayStr = getRelativeDate(0);
        const doctorAppointments = APPOINTMENTS_DATA.filter(apt => apt.department.toLowerCase() === CURRENT_DOCTOR.department.toLowerCase());
        const todaysApts = doctorAppointments.filter(apt => apt.date === todayStr);
        const totalToday = todaysApts.length;
        const followUps = todaysApts.filter(apt => apt.priority === "Follow-up").length;
        summaryEl.textContent = `You have ${totalToday} appointments scheduled today, including ${followUps} follow-up consultations.`;
    }
}

function updateDashboardStats() {
    const todayCountEl = document.getElementById("stats-today-count");
    const pendingCountEl = document.getElementById("stats-pending-count");
    const completedCountEl = document.getElementById("stats-completed-count");
    const cancelledCountEl = document.getElementById("stats-cancelled-count");

    const todayStr = getRelativeDate(0);
    const doctorAppointments = APPOINTMENTS_DATA.filter(apt => apt.department.toLowerCase() === CURRENT_DOCTOR.department.toLowerCase());

    const todayCount = doctorAppointments.filter(apt => apt.date === todayStr).length;
    const pendingCount = doctorAppointments.filter(apt => apt.status === "Pending").length;
    const completedCount = doctorAppointments.filter(apt => apt.status === "Completed").length;
    const cancelledCount = doctorAppointments.filter(apt => apt.status === "Cancelled").length;

    if (todayCountEl) todayCountEl.textContent = todayCount;
    if (pendingCountEl) pendingCountEl.textContent = pendingCount;
    if (completedCountEl) completedCountEl.textContent = completedCount;
    if (cancelledCountEl) cancelledCountEl.textContent = cancelledCount;
}

function filterAppointments(filterType) {
    CURRENT_DASHBOARD_FILTER = filterType;

    document.querySelectorAll('.dashboard-stat-card').forEach(card => {
        if(card.getAttribute('data-filter') === filterType) {
            card.classList.add('active-stat-card');
        } else {
            card.classList.remove('active-stat-card');
        }
    });

    const titleEl = document.getElementById('dashboard-table-title');
    if (titleEl) {
        if(filterType === 'today') titleEl.innerText = "Today's Appointments";
        else if(filterType === 'Pending') titleEl.innerText = "Pending Appointments";
        else if(filterType === 'Completed') titleEl.innerText = "Completed Appointments";
        else if(filterType === 'Cancelled') titleEl.innerText = "Cancelled Appointments";
    }

    renderTodaysAppointments();
}

function renderTodaysAppointments(searchTerm = '') {
    const tbody = document.getElementById("dashboardAppointmentTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const todayStr = getRelativeDate(0);
    let filtered = APPOINTMENTS_DATA.filter(apt => apt.department.toLowerCase() === CURRENT_DOCTOR.department.toLowerCase());

    if (CURRENT_DASHBOARD_FILTER === 'today') {
        filtered = filtered.filter(apt => apt.date === todayStr);
    } else {
        filtered = filtered.filter(apt => apt.status === CURRENT_DASHBOARD_FILTER);
    }

    if (searchTerm.trim() !== "") {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(apt => apt.patientName.toLowerCase().includes(term));
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No appointments found matching targeted schedule queries.</td></tr>`;
        return;
    }

    filtered.forEach(apt => {
        let priorityBadge = "";
        if(apt.priority === "Urgent") priorityBadge = "🔴 Urgent";
        else if(apt.priority === "Follow-up") priorityBadge = "🟡 Follow-up";
        else priorityBadge = "🟢 Routine";

        let statusBadge = "";
        switch (apt.status) {
            case "Pending": statusBadge = `<span class="badge bg-warning-subtle text-warning border border-warning border-opacity-25 px-2 py-1 rounded">Pending</span>`; break;
            case "Confirmed": statusBadge = `<span class="badge bg-primary-subtle text-primary border border-primary border-opacity-25 px-2 py-1 rounded">Confirmed</span>`; break;
            case "Completed": statusBadge = `<span class="badge bg-success-subtle text-success border border-success border-opacity-25 px-2 py-1 rounded">Completed</span>`; break;
            case "Cancelled": statusBadge = `<span class="badge bg-danger-subtle text-danger border border-danger border-opacity-25 px-2 py-1 rounded">Cancelled</span>`; break;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="fw-bold text-dark border-bottom-0 ps-4">${apt.patientName}</td>
            <td class="border-bottom-0">${apt.date}</td>
            <td class="border-bottom-0">${apt.time}</td>
            <td class="fw-medium border-bottom-0">${priorityBadge}</td>
            <td class="border-bottom-0">${statusBadge}</td>
            <td class="text-end border-bottom-0 pe-4">
                <div class="btn-group gap-1 shadow-sm rounded">
                    <button class="btn btn-sm btn-outline-primary transition-card" onclick="loadPatientDetails('${apt.id}')"><i class="bi bi-folder2-open"></i> EHR</button>
                    <button class="btn btn-sm btn-outline-secondary transition-card" onclick="loadStatusUpdater('${apt.id}')"><i class="bi bi-sliders"></i> Status</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================================================
// DOCTOR REVIEWS RENDERER ENGINE
// ==========================================================================
function renderDoctorReviews() {
    const reviewsContainer = document.getElementById("reviews-list-container");
    const avgRatingVal = document.getElementById("avg-rating-value");
    const totalReviewsVal = document.getElementById("total-reviews-value");
    const satisfactionBar = document.getElementById("satisfaction-bar");
    const satisfactionPercent = document.getElementById("satisfaction-percent");

    if (!reviewsContainer) return;

    const data = DOCTOR_REVIEWS[CURRENT_DOCTOR.email] || { avgRating: "5.0/5", totalCount: "0 reviews", satisfaction: "100%", list: [] };
    
    if (avgRatingVal) avgRatingVal.innerText = `⭐ ${data.avgRating}`;
    if (totalReviewsVal) totalReviewsVal.innerText = `(${data.totalCount})`;
    if (satisfactionBar) satisfactionBar.style.width = data.satisfaction;
    if (satisfactionPercent) satisfactionPercent.innerText = `${data.satisfaction} Patient Satisfaction`;

    reviewsContainer.innerHTML = "";
    if (data.list.length === 0) {
        reviewsContainer.innerHTML = `<div class="col-12 text-center py-3 text-muted">No reviews recorded yet for this provider.</div>`;
        return;
    }

    data.list.forEach(rev => {
        let stars = "";
        for(let i=1; i<=5; i++) {
            if(i <= rev.rating) stars += '<i class="bi bi-star-fill text-warning me-1" style="font-size: 0.85rem;"></i>';
            else stars += '<i class="bi bi-star text-muted me-1" style="font-size: 0.85rem;"></i>';
        }

        const initials = rev.name.split(" ").map(n => n[0]).join("");

        const div = document.createElement("div");
        div.className = "col-12 col-md-6";
        div.innerHTML = `
            <div class="card p-3 rounded-3 review-card border h-100 shadow-xs">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 34px; height: 34px; font-size: 0.8rem;">
                            ${initials}
                        </div>
                        <div>
                            <h6 class="m-0 fw-bold text-dark" style="font-size: 0.85rem;">${rev.name}</h6>
                            <small class="text-muted" style="font-size: 0.7rem;">${rev.date}</small>
                        </div>
                    </div>
                    <div>
                        ${stars}
                    </div>
                </div>
                <p class="m-0 text-muted small text-dark" style="line-height: 1.45; font-size: 0.8rem;">"${rev.text}"</p>
            </div>
        `;
        reviewsContainer.appendChild(div);
    });
}

// ==========================================================================
// PRACTICE PERFORMANCE ANALYTICS ENGINE
// ==========================================================================
function renderAnalyticsCharts() {
    const doctorAppointments = APPOINTMENTS_DATA.filter(apt => apt.department.toLowerCase() === CURRENT_DOCTOR.department.toLowerCase());

    // 1. Status Chart
    const statusCounts = { Pending: 0, Confirmed: 0, Completed: 0, Cancelled: 0 };
    doctorAppointments.forEach(apt => {
        if (statusCounts[apt.status] !== undefined) {
            statusCounts[apt.status]++;
        }
    });

    const statusCtx = document.getElementById('statusChart');
    if (statusCtx) {
        if (statusChartInstance) statusChartInstance.destroy();
        statusChartInstance = new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
                datasets: [{
                    data: [statusCounts.Pending, statusCounts.Confirmed, statusCounts.Completed, statusCounts.Cancelled],
                    backgroundColor: ['#f59e0b', '#2366A4', '#2CB9B6', '#ef4444'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } }
                }
            }
        });
    }

    // 2. Weekly Chart
    const weeklyLabels = [];
    const weeklyData = [];
    const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const dayLabel = i === 0 ? "Today" : daysName[d.getDay()];
        weeklyLabels.push(dayLabel);
        
        const count = doctorAppointments.filter(apt => apt.date === dStr).length;
        weeklyData.push(count);
    }

    const weeklyCtx = document.getElementById('weeklyChart');
    if (weeklyCtx) {
        if (weeklyChartInstance) weeklyChartInstance.destroy();
        weeklyChartInstance = new Chart(weeklyCtx, {
            type: 'bar',
            data: {
                labels: weeklyLabels,
                datasets: [{
                    label: 'Appointments',
                    data: weeklyData,
                    backgroundColor: 'rgba(35, 102, 164, 0.75)',
                    borderColor: '#2366A4',
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1, color: '#587089' },
                        grid: { borderDash: [4, 4] }
                    },
                    x: {
                        ticks: { color: '#587089' }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // 3. Department Chart
    const deptCounts = { Cardiology: 0, Neurology: 0, Orthopedics: 0, Ophthalmology: 0, Pediatrics: 0, Dentistry: 0 };
    APPOINTMENTS_DATA.forEach(apt => {
        if (deptCounts[apt.department] !== undefined) {
            deptCounts[apt.department]++;
        }
    });

    const deptCtx = document.getElementById('departmentChart');
    if (deptCtx) {
        if (departmentChartInstance) departmentChartInstance.destroy();
        departmentChartInstance = new Chart(deptCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(deptCounts),
                datasets: [{
                    label: 'Total Active Patient Load',
                    data: Object.values(deptCounts),
                    backgroundColor: 'rgba(44, 185, 182, 0.75)',
                    borderColor: '#2CB9B6',
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1, color: '#587089' },
                        grid: { borderDash: [4, 4] }
                    },
                    x: {
                        ticks: { color: '#587089' }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

function renderAnalytics() {
    const doctorAppointments = APPOINTMENTS_DATA.filter(apt => apt.department.toLowerCase() === CURRENT_DOCTOR.department.toLowerCase());
    const todayStr = getRelativeDate(0);

    const todayCount = doctorAppointments.filter(apt => apt.date === todayStr).length;
    const pendingCount = doctorAppointments.filter(apt => apt.status === "Pending").length;
    const completedCount = doctorAppointments.filter(apt => apt.status === "Completed").length;
    const cancelledCount = doctorAppointments.filter(apt => apt.status === "Cancelled").length;

    // Set stats
    document.getElementById("analytics-today-count").innerText = todayCount;
    document.getElementById("analytics-pending-count").innerText = pendingCount;
    document.getElementById("analytics-completed-count").innerText = completedCount;
    document.getElementById("analytics-cancelled-count").innerText = cancelledCount;

    // Performance Cards
    const totalTreated = 1240 + doctorAppointments.filter(apt => apt.status === "Completed").length;
    document.getElementById("analytics-treated-total").innerText = totalTreated.toLocaleString();
    
    // Average Consultation Time
    let avgTime = "15 min";
    if (CURRENT_DOCTOR.department === "Cardiology") avgTime = "20 min";
    else if (CURRENT_DOCTOR.department === "Pediatrics") avgTime = "12 min";
    else if (CURRENT_DOCTOR.department === "Neurology") avgTime = "25 min";
    document.getElementById("analytics-avg-time").innerText = avgTime;

    // Satisfaction score
    const reviewsData = DOCTOR_REVIEWS[CURRENT_DOCTOR.email] || { satisfaction: "96%" };
    document.getElementById("analytics-satisfaction").innerText = reviewsData.satisfaction;
    
    // Attendance rates
    let attendance = "96%";
    if (CURRENT_DOCTOR.department === "Dentistry") attendance = "98%";
    else if (CURRENT_DOCTOR.department === "Ophthalmology") attendance = "95%";
    document.getElementById("analytics-attendance").innerText = attendance;

    renderAnalyticsCharts();
}

setInterval(() => {
    updateDashboardGreeting();
    updateDashboardStats();
    renderTodaysAppointments();
}, 60000);

// ==========================================================================
// USER LOGIC HANDLERS (LOGIN / VALIDATION / FORMS)
// ==========================================================================
function initFormProcessors() {
    const loginForm = document.getElementById("login-form");
    const roleSelect = document.getElementById("login-role");


    
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            
            if (!loginForm.checkValidity()) {
                e.stopPropagation();
                loginForm.classList.add("was-validated");
            } else {
               const email = document.getElementById("login-id").value.trim();
            const password = document.getElementById("login-password").value.trim();

               

            // Admin Login
if (
    email.toLowerCase() === "admin@mediconnect.com" &&
    password === "admin123"
) {
    window.location.href = "admin-dashboard/admin-dashboard.html";
    return;
}

/* ==========================
   Role Redirect
========================== */



                const doctor = DOCTORS.find(
                    d => d.email.toLowerCase() === email.toLowerCase() &&
                         d.password === password
                );

                if (doctor) {
                    CURRENT_DOCTOR = doctor;

                    // Check remember me setting
                    const rememberMeChecked = document.getElementById("rememberMe").checked;
                    if (rememberMeChecked) {
                        localStorage.setItem("remember_email", email);
                        localStorage.setItem("remember_password", password);
                    } else {
                        localStorage.removeItem("remember_email");
                        localStorage.removeItem("remember_password");
                    }

                    // Pre-fill profile page fields
                    loadProfile(); 

                    document.getElementById("login-page").classList.add("d-none");
                    document.getElementById("app-container").classList.remove("d-none");

                    updateDashboardGreeting();
                    updateDashboardStats();
                    renderTodaysAppointments();
                    renderDoctorReviews();
                    
                    // Render default tables with logged doctor department
                    renderAppointmentsTable(APPOINTMENTS_DATA);
                    renderScheduleTable();

                    switchView("dashboard");
                    showToast("Welcome " + doctor.name);
                } else {
                    alert("Invalid Email Address or Password");
                }
            }
        });
    }

    // Show/Hide password toggle listener
    const togglePasswordBtn = document.getElementById("togglePasswordBtn");
    if (togglePasswordBtn) {
        const passwordInput = document.getElementById("login-password");
        const togglePasswordIcon = document.getElementById("togglePasswordIcon");
        togglePasswordBtn.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordIcon.className = "bi bi-eye";
            } else {
                passwordInput.type = "password";
                togglePasswordIcon.className = "bi bi-eye-slash";
            }
        });
    }

    // Forgot password form submission
    const forgotForm = document.getElementById("forgot-password-form");
    if (forgotForm) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!forgotForm.checkValidity()) {
                e.stopPropagation();
                forgotForm.classList.add("was-validated");
            } else {
                const email = document.getElementById("reset-email").value;
                const modalEl = document.getElementById("forgotPasswordModal");
                const modal = bootstrap.Modal.getInstance(modalEl);
                if (modal) modal.hide();
                showToast(`Password reset link successfully sent to ${email}`);
                forgotForm.reset();
                forgotForm.classList.remove("was-validated");
            }
        });
    }

    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            document.getElementById("app-container").classList.add("d-none");
            document.getElementById("login-page").classList.remove("d-none");
            if (loginForm) {
                loginForm.classList.remove("was-validated");
                // Don't reset remember values if saved
                const savedEmail = localStorage.getItem("remember_email");
                const savedPassword = localStorage.getItem("remember_password");
                loginForm.reset();
                if (savedEmail && savedPassword) {
                    document.getElementById("login-id").value = savedEmail;
                    document.getElementById("login-password").value = savedPassword;
                    document.getElementById("rememberMe").checked = true;
                }
            }
        });
    }

    const scheduleForm = document.getElementById("schedule-form");
    if (scheduleForm) {
        scheduleForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!scheduleForm.checkValidity()) {
                e.stopPropagation();
                scheduleForm.classList.add("was-validated");
            } else {
                const dayInput = document.getElementById("schedule-day").value;
                const timeInput = document.getElementById("schedule-time").value;
                
                SCHEDULE_DATA.push({
                    id: Date.now(),
                    day: dayInput,
                    time: timeInput
                });
                
                renderScheduleTable();
                scheduleForm.reset();
                scheduleForm.classList.remove("was-validated");
                showToast("New clinical operational hours committed to schedule.");
            }
        });
    }
    
    const leaveForm = document.getElementById("leave-form");
    if (leaveForm) {
        leaveForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if(!leaveForm.checkValidity()) {
                e.stopPropagation();
                leaveForm.classList.add("was-validated");
            } else {
                processLeaveSubmission();
            }
        });
    }
}

// ==========================================================================
// CLINICAL MODULE VIEW ENGINE SUBROUTINES
// ==========================================================================
function renderAppointmentsTable(dataset) {
    const tbody = document.getElementById("appointmentTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    // FILTER dataset for CURRENT_DOCTOR department
    const filteredDataset = dataset.filter(apt => apt.department.toLowerCase() === CURRENT_DOCTOR.department.toLowerCase());

    if(filteredDataset.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No patient matches found matching operational specifications.</td></tr>`;
        return;
    }

    filteredDataset.forEach(apt => {
        let priorityBadge = "";
        if(apt.priority === "Urgent") priorityBadge = "🔴 Urgent";
        else if(apt.priority === "Follow-up") priorityBadge = "🟡 Follow-up";
        else priorityBadge = "🟢 Routine";

        let statusBadge = "";
        switch (apt.status) {
            case "Pending": statusBadge = `<span class="badge bg-warning-subtle text-warning border border-warning border-opacity-25 px-2 py-1 rounded">Pending</span>`; break;
            case "Confirmed": statusBadge = `<span class="badge bg-primary-subtle text-primary border border-primary border-opacity-25 px-2 py-1 rounded">Confirmed</span>`; break;
            case "Completed": statusBadge = `<span class="badge bg-success-subtle text-success border border-success border-opacity-25 px-2 py-1 rounded">Completed</span>`; break;
            case "Cancelled": statusBadge = `<span class="badge bg-danger-subtle text-danger border border-danger border-opacity-25 px-2 py-1 rounded">Cancelled</span>`; break;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="fw-bold text-dark border-bottom-0 ps-4">${apt.patientName}</td>
            <td class="border-bottom-0">${apt.date}</td>
            <td class="border-bottom-0">${apt.time}</td>
            <td class="fw-medium border-bottom-0">${priorityBadge}</td>
            <td class="border-bottom-0">${statusBadge}</td>
            <td class="text-end border-bottom-0 pe-4">
                <div class="btn-group gap-1 shadow-sm rounded">
                    <button class="btn btn-sm btn-outline-primary transition-card" onclick="loadPatientDetails('${apt.id}')"><i class="bi bi-folder2-open"></i> EHR File</button>
                    <button class="btn btn-sm btn-outline-secondary transition-card" onclick="loadStatusUpdater('${apt.id}')"><i class="bi bi-sliders"></i> Status</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// EHR Patient Details Loader
function loadPatientDetails(aptId) {
    const apt = APPOINTMENTS_DATA.find(a => a.id === aptId);
    if(apt) {
        SELECTED_APPOINTMENT_ID = aptId;
        document.getElementById("detail-pt-name").innerText = apt.patientName;
        document.getElementById("detail-pt-id").innerText = `#${apt.id}`;
        document.getElementById("detail-pt-agesex").innerText = `${apt.age} Yrs / ${apt.gender}`;
        document.getElementById("detail-pt-complaint").innerText = apt.complaint;
        switchView("patient-details");
    }
}

function loadConsultationNotes() {
    document.getElementById("note-symptoms").value = "";
    document.getElementById("note-diagnosis").value = "";
    document.getElementById("note-prescription").value = "";
    document.getElementById("note-advice").value = "";
    switchView("consultation-notes");
}

function saveConsultationNotes() {
    showToast("Consultation summary variables compiled, signed digitally, and committed safely onto client record.");
    switchView("appointments");
}

function loadStatusUpdater(aptId) {
    const apt = APPOINTMENTS_DATA.find(a => a.id === aptId);
    if(apt) {
        SELECTED_APPOINTMENT_ID = aptId;
        document.getElementById("status-pt-name").innerText = apt.patientName;
        document.getElementById("status-pt-meta").innerText = `Target Slot Window: ${apt.date} @ ${apt.time}`;
        switchView("status");
    }
}

function updateStatusState(newStatus) {
    const apt = APPOINTMENTS_DATA.find(a => a.id === SELECTED_APPOINTMENT_ID);
    if(apt) {
        apt.status = newStatus;
        renderAppointmentsTable(APPOINTMENTS_DATA);
        
        updateDashboardStats();
        renderTodaysAppointments();
        
        showToast(`Appointment internal tracking workflow moved to state: [${newStatus}].`);
        switchView("appointments");
    }
}

function renderScheduleTable() {
    const tbody = document.getElementById("scheduleTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    SCHEDULE_DATA.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="fw-semibold ps-4 border-bottom-0">${item.day}</td>
            <td class="font-monospace text-muted border-bottom-0">${item.time}</td>
            <td class="text-end pe-4 border-bottom-0">
                <button class="btn btn-sm btn-outline-danger p-1 px-2 border-0 shadow-sm transition-card bg-light" onclick="deleteScheduleBlock(${item.id})">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteScheduleBlock(id) {
    SCHEDULE_DATA = SCHEDULE_DATA.filter(item => item.id !== id);
    renderScheduleTable();
}

// ==========================================================================
// MANAGE LEAVE CALENDAR MODULE & LEAVE LOGIC ENGINE
// ==========================================================================
function updateAvailabilityToggle() {
    const label = document.getElementById("availabilityLabel");
    const navLabel = document.getElementById("nav-availability-status");
    if (IS_AVAILABLE_TODAY) {
        if(label) { label.innerText = "🟢 Available Today"; label.className = "form-check-label small fw-bold text-success cursor-pointer"; }
        if(navLabel) { navLabel.innerHTML = `<i class="bi bi-circle-fill me-1" style="font-size: 0.5rem; vertical-align: middle;"></i> Available Today`; navLabel.className = "badge bg-success-subtle text-success border border-success border-opacity-25 rounded-pill px-3 py-2 w-100 fw-medium"; }
    } else {
        if(label) { label.innerText = "🔴 Not Available"; label.className = "form-check-label small fw-bold text-danger cursor-pointer"; }
        if(navLabel) { navLabel.innerHTML = `<i class="bi bi-circle-fill me-1" style="font-size: 0.5rem; vertical-align: middle;"></i> Not Available`; navLabel.className = "badge bg-danger-subtle text-danger border border-danger border-opacity-25 rounded-pill px-3 py-2 w-100 fw-medium"; }
    }
}

function executeQuickScheduleAction(action) {
    if (action === 'applyAll') {
        const mondaySlots = SCHEDULE_DATA.filter(s => s.day === 'Mondays');
        if (mondaySlots.length > 0) {
            ['Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays'].forEach(day => {
                mondaySlots.forEach(slot => {
                    const exists = SCHEDULE_DATA.find(s => s.day === day && s.time === slot.time);
                    if (!exists) {
                        SCHEDULE_DATA.push({ id: Date.now() + Math.random(), day: day, time: slot.time });
                    }
                });
            });
            showToast("Monday's schedule successfully applied to all weekdays.");
        } else {
            alert("No schedule found for Monday to copy.");
        }
    } else if (action === 'emergency') {
        const tgl = document.getElementById("availabilityToggle");
        if(tgl) tgl.checked = false;
        IS_AVAILABLE_TODAY = false;
        updateAvailabilityToggle();
        
        const todayStr = getRelativeDate(0);
        LEAVE_DATA.push({
            id: Date.now(),
            type: "Family Emergency",
            start: todayStr,
            end: todayStr,
            format: "single",
            reason: "Emergency flagged via quick action.",
            emergency: true,
            status: "Approved"
        });
        showToast("Emergency leave marked for today. Appointments blocked.");
    } else if (action === 'reset') {
        if(confirm("Are you sure you want to clear the entire schedule?")) {
            SCHEDULE_DATA = [];
        }
    }
    
    renderScheduleTable();
    renderMonthlyCalendar();
}

function toggleLeaveFormat() {
    const format = document.getElementById("leave-format").value;
    const singleWrap = document.getElementById("single-date-wrapper");
    const multiStartWrap = document.getElementById("multi-start-wrapper");
    const multiEndWrap = document.getElementById("multi-end-wrapper");
    const singleInput = document.getElementById("leave-single-date");
    const startInput = document.getElementById("leave-start-date");
    const endInput = document.getElementById("leave-end-date");
    
    if(format === 'single') {
        singleWrap.classList.remove('d-none');
        multiStartWrap.classList.add('d-none');
        multiEndWrap.classList.add('d-none');
        singleInput.required = true;
        startInput.required = false;
        endInput.required = false;
        calculateLeaveDuration();
    } else {
        singleWrap.classList.add('d-none');
        multiStartWrap.classList.remove('d-none');
        multiEndWrap.classList.remove('d-none');
        singleInput.required = false;
        startInput.required = true;
        endInput.required = true;
        calculateLeaveDuration();
    }
}

function toggleOtherReason() {
    const type = document.getElementById("leave-type-drp").value;
    const otherWrap = document.getElementById("other-reason-wrapper");
    const otherInput = document.getElementById("leave-other-reason");
    
    if(type === 'Other') {
        otherWrap.classList.remove('d-none');
        otherInput.required = true;
    } else {
        otherWrap.classList.add('d-none');
        otherInput.required = false;
    }
}

function calculateLeaveDuration() {
    const format = document.getElementById("leave-format").value;
    const durationDisplay = document.getElementById("duration-display");
    const durationText = document.getElementById("duration-text");
    
    if(format === 'single') {
        const val = document.getElementById("leave-single-date").value;
        if(val) {
            durationDisplay.classList.remove('d-none');
            durationText.innerText = "Duration: 1 Day";
        } else {
            durationDisplay.classList.add('d-none');
        }
    } else {
        const start = document.getElementById("leave-start-date").value;
        const end = document.getElementById("leave-end-date").value;
        
        if(start && end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            if(endDate >= startDate) {
                const diffTime = Math.abs(endDate - startDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
                durationDisplay.classList.remove('d-none');
                durationText.innerText = `Duration: ${diffDays} Days`;
            } else {
                durationDisplay.classList.remove('d-none');
                durationText.innerText = "Invalid Date Range";
            }
        } else {
            durationDisplay.classList.add('d-none');
        }
    }
}

function processLeaveSubmission() {
    const format = document.getElementById("leave-format").value;
    let start, end;
    
    if(format === 'single') {
        start = document.getElementById("leave-single-date").value;
        end = start;
    } else {
        start = document.getElementById("leave-start-date").value;
        end = document.getElementById("leave-end-date").value;
        if(new Date(end) < new Date(start)) {
            alert("End date cannot be earlier than start date.");
            return;
        }
    }
    
    let type = document.getElementById("leave-type-drp").value;
    if(type === 'Other') {
        type = document.getElementById("leave-other-reason").value;
    }
    
    const reason = document.getElementById("leave-notes").value || type;
    const emergency = document.getElementById("leave-emergency-toggle").checked;
    
    const newLeave = {
        id: Date.now(),
        type: type,
        start: start,
        end: end,
        format: format,
        reason: reason,
        emergency: emergency,
        status: "Pending"
    };
    
    LEAVE_DATA.push(newLeave);
    
    const form = document.getElementById("leave-form");
    form.reset();
    form.classList.remove('was-validated');
    toggleLeaveFormat();
    toggleOtherReason();
    document.getElementById("duration-display").classList.add('d-none');
    
    showToast("Leave request formally submitted. Future appointments blocked.");
    
    renderMonthlyCalendar();
}

function changeCalendarMonth(offset) {
    currentDateRender.setMonth(currentDateRender.getMonth() + offset);
    renderMonthlyCalendar();
}

function getDatesInRange(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  const end = new Date(endDate);
  
  while (currentDate <= end) {
    dates.push(`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

function renderMonthlyCalendar() {
    const grid = document.getElementById("leave-calendar-grid");
    const monthHeader = document.getElementById("calendar-month-year");
    if (!grid || !monthHeader) return;
    
    grid.innerHTML = "";
    
    const year = currentDateRender.getFullYear();
    const month = currentDateRender.getMonth();
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthHeader.innerText = `${monthNames[month]} ${year}`;
    
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        grid.innerHTML += `<div class="calendar-header-day">${day}</div>`;
    });
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const today = new Date();
    const isCurrentMonthYear = today.getMonth() === month && today.getFullYear() === year;
    
    const leaveLookup = {};
    LEAVE_DATA.forEach(leave => {
        if(leave.status !== 'Cancelled') {
            const rangeDates = getDatesInRange(leave.start, leave.end);
            rangeDates.forEach(dStr => {
                leaveLookup[dStr] = leave; 
            });
        }
    });

    for(let i = 0; i < firstDay; i++) {
        grid.innerHTML += `<div class="calendar-day-cell empty-cell"></div>`;
    }
    
    for(let i = 1; i <= daysInMonth; i++) {
        const isToday = isCurrentMonthYear && today.getDate() === i;
        const cellDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        
        let extraClasses = 'current-month';
        if(isToday) extraClasses += ' today';
        
        let clickAttr = '';
        const matchingLeave = leaveLookup[cellDateStr];
        
        if(matchingLeave) {
            extraClasses += ' has-leave';
            if(matchingLeave.emergency) extraClasses += ' emergency-leave';
            clickAttr = `onclick="openLeaveModal(${matchingLeave.id})" title="Click to view details"`;
        }
        
        grid.innerHTML += `<div class="calendar-day-cell ${extraClasses}" ${clickAttr}>${i}</div>`;
    }
}

function openLeaveModal(leaveId) {
    const leave = LEAVE_DATA.find(l => l.id === leaveId);
    if(leave) {
        document.getElementById("modal-leave-date").innerText = leave.format === 'single' ? leave.start : `${leave.start} to ${leave.end}`;
        document.getElementById("modal-leave-type").innerText = leave.type;
        
        let durationStr = "1 Day";
        if(leave.format === 'multiple') {
            const start = new Date(leave.start);
            const end = new Date(leave.end);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            durationStr = `${diffDays} Days`;
        }
        document.getElementById("modal-leave-duration").innerText = durationStr;
        
        const statusEl = document.getElementById("modal-leave-status");
        statusEl.innerText = leave.status;
        statusEl.className = leave.status === 'Approved' ? 'text-success' : 'text-warning';
        
        const emergencyEl = document.getElementById("modal-leave-emergency");
        emergencyEl.innerText = leave.emergency ? "Yes" : "No";
        emergencyEl.className = leave.emergency ? "text-danger" : "text-dark";
        
        document.getElementById("modal-leave-reason").innerText = leave.reason;
        
        const modal = new bootstrap.Modal(document.getElementById('leaveDetailsModal'));
        modal.show();
    }
}

// ==========================================================================
// SALARY DOWNLOAD UTILITIES
// ==========================================================================
function downloadReceipt(month, amount, status) {
    const nameInput = document.getElementById('prof-name');
    const docName = nameInput ? nameInput.value : CURRENT_DOCTOR.name;
    
    const receiptContent = `
=============================================
         MEDI CONNECT - SALARY RECEIPT            
=============================================

Doctor Name       : ${docName}
Statement Month   : ${month}
Total Net Amount  : ${amount}
Payment Status    : ${status}

Generated On      : ${new Date().toLocaleDateString()}

---------------------------------------------
Thank you for your dedicated service.
=============================================
`;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = `MEDI_CONNECT_Salary_Receipt_${month.replace(' ', '_')}.txt`;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showToast(`Salary receipt for ${month} downloaded successfully.`);
}

function updateDepartmentIllustration(department) {
    const iconWrapper = document.getElementById("department-icon-wrapper");
    const labelEl = document.getElementById("department-illustration-label");
    if (!iconWrapper) return;

    if (labelEl) {
        labelEl.textContent = department;
    }

    const deptLower = department.toLowerCase();
    let svgContent = "";

    if (deptLower.includes("cardiology")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-cardio" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-cardio" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#grad-cardio)" filter="url(#glow-cardio)"/><path d="M3 13h3.5l1.5-4 2 8 2-10 1.5 6 1-2H21" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    } else if (deptLower.includes("dentistry")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-dent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-dent" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#14B8A6" flood-opacity="0.6"/></filter></defs><path d="M12 2c-3.3 0-5.5 1.7-5.5 5.5 0 2 .8 4 1.3 5.5.5 1.5.7 3 .2 4.5-.3.8-.1 1.5.5 1.5s1.2-.8 1.7-2.3c.5-1.5 1-2.2 1.8-2.2s1.3.7 1.8 2.2c.5 1.5 1.1 2.3 1.7 2.3s.8-.7.5-1.5c-.5-1.5-.3-3 .2-4.5.5-1.5 1.3-3.5 1.3-5.5C17.5 3.7 15.3 2 12 2z" fill="url(#grad-dent)" filter="url(#glow-dent)"/><path d="M17.5 4.5l.3 1 .9.3-.9.3-.3 1-.3-1-.9-.3.9-.3z" fill="#FFFFFF"/></svg>`;
    } else if (deptLower.includes("neurology")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-neuro" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-neuro" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><path d="M12 3c-3.6 0-6.5 2.7-6.5 6 0 1.2.4 2.3 1 3.2C5.6 13 5 14.2 5 15.5 5 18 7 20 9.5 20c.6 0 1.2-.1 1.7-.4.5.3 1 .4 1.6.4.6 0 1.1-.1 1.6-.4.5.3 1 .4 1.7.4 2.5 0 4.5-2 4.5-4.5 0-1.3-.6-2.5-1.5-3.3.6-.9 1-2 1-3.2 0-3.3-2.9-6-6.5-6z" fill="url(#grad-neuro)" filter="url(#glow-neuro)"/><path d="M9 7.5c.5-1.5 2-2 3-1.5M7.5 10c1-.5 2 .5 2 1.5M8 13.5c1 .5 1.5 1.5 1 2.5M15 7.5c-.5-1.5-2-2-3-1.5M16.5 10c-1-.5-2 .5-2 1.5M16 13.5c-1 .5-1.5 1.5-1 2.5" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/></svg>`;
    } else if (deptLower.includes("orthopedics")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-ortho" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-ortho" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g transform="rotate(-45 12 12)" filter="url(#glow-ortho)"><rect x="5" y="11" width="14" height="2" rx="1" fill="url(#grad-ortho)"/><circle cx="5" cy="10" r="2" fill="url(#grad-ortho)"/><circle cx="5" cy="14" r="2" fill="url(#grad-ortho)"/><circle cx="19" cy="10" r="2" fill="url(#grad-ortho)"/><circle cx="19" cy="14" r="2" fill="url(#grad-ortho)"/></g></svg>`;
    } else if (deptLower.includes("ent")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-ent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-ent" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><path d="M9 3a5 5 0 0 0-3 9.2V19a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1.2A6 6 0 0 0 17 9a5 5 0 0 0-8-6z" fill="url(#grad-ent)" filter="url(#glow-ent)"/><path d="M9 5a3 3 0 0 1 4.8 2.4c0 1.5-.8 2.8-2 3.4a1 1 0 0 0-.6.9v3.6a1 1 0 0 1-2 0V11a1 1 0 0 0-.5-.9C8 9.3 7 8 7 6.4A3 3 0 0 1 9 5z" fill="#FFFFFF"/></svg>`;
    } else if (deptLower.includes("gynecology")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-gyn" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-gyn" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-gyn)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#grad-gyn)"/><circle cx="10" cy="8" r="1.8" fill="#FFFFFF"/><path d="M7.5 14c0-1.5 1.5-2.2 2.5-2.2s2.5.7 2.5 2.2v1.5h-5V14z" fill="#FFFFFF"/><circle cx="13.5" cy="10.5" r="1.1" fill="#FFFFFF"/><path d="M12.5 13.5c0-.8.8-1.2 1.3-1.2s1.3.4 1.3 1.2v1h-2.6v-1z" fill="#FFFFFF"/></g></svg>`;
    } else if (deptLower.includes("pulmonology")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-pulm" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-pulm" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-pulm)"><path d="M11 5.5C8 5.5 5.5 8 5.5 12c0 3.5 2 6 5 6.5V5.5z" fill="url(#grad-pulm)"/><path d="M13 5.5C16 5.5 18.5 8 18.5 12c0 3.5-2 6-5 6.5V5.5z" fill="url(#grad-pulm)"/><path d="M12 3.5v5m0 0l-2 2m2-2l2 2" fill="none" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/></g></svg>`;
    } else if (deptLower.includes("general physician")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-gp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-gp" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-gp)"><path d="M7 4h3M14 4h3M8 4v2c0 3 2 5.5 4 5.5s4-2.5 4-5.5V4" fill="none" stroke="url(#grad-gp)" stroke-width="2" stroke-linecap="round"/><path d="M12 11.5v4.5" fill="none" stroke="url(#grad-gp)" stroke-width="2"/><circle cx="12" cy="18" r="2.5" fill="url(#grad-gp)"/><circle cx="12" cy="18" r="0.8" fill="#FFFFFF"/></g></svg>`;
    } else if (deptLower.includes("nephrology")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-neph" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-neph" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-neph)"><path d="M9.5 5C7 5 5 7.5 5 11c0 3.5 2 6 4.5 6 .8 0 1-.8 1-2.5V7.5c0-1.7-.2-2.5-1-2.5z" fill="url(#grad-neph)"/><path d="M14.5 5c2.5 0 4.5 2.5 4.5 6 0 3.5-2 6-4.5 6-.8 0-1-.8-1-2.5V7.5c0-1.7.2-2.5 1-2.5z" fill="url(#grad-neph)"/><path d="M10.5 13.5c0 1.5.8 2.5 1.5 4M13.5 13.5c0 1.5-.8 2.5-1.5 4" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/></g></svg>`;
    } else if (deptLower.includes("dermatology")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-derm" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-derm" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-derm)"><path d="M3 8h18M3 13h18M3 18h18" fill="none" stroke="url(#grad-derm)" stroke-width="2" stroke-linecap="round"/><path d="M11.5 3c-1.5 3.5.5 5.5 1.5 7" fill="none" stroke="url(#grad-derm)" stroke-width="2" stroke-linecap="round"/><circle cx="13" cy="11.5" r="1.5" fill="#FFFFFF"/></g></svg>`;
    } else if (deptLower.includes("ophthalmology")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-ophth" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-ophth" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-ophth)"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" fill="none" stroke="url(#grad-ophth)" stroke-width="2"/><circle cx="12" cy="12" r="4.5" fill="url(#grad-ophth)"/><circle cx="12" cy="12" r="1.8" fill="#FFFFFF"/></g></svg>`;
    } else if (deptLower.includes("pediatrics")) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-peds" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-peds" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-peds)"><circle cx="7" cy="8" r="2.5" fill="url(#grad-peds)"/><circle cx="17" cy="8" r="2.5" fill="url(#grad-peds)"/><circle cx="7" cy="8" r="1" fill="#FFFFFF"/><circle cx="17" cy="8" r="1" fill="#FFFFFF"/><circle cx="12" cy="13.5" r="5.5" fill="url(#grad-peds)"/><circle cx="10" cy="12.5" r="0.8" fill="#FFFFFF"/><circle cx="14" cy="12.5" r="0.8" fill="#FFFFFF"/><ellipse cx="12" cy="15" rx="1.5" ry="1" fill="#FFFFFF"/><circle cx="12" cy="14.5" r="0.6" fill="url(#grad-peds)"/><path d="M19 1.5h2v2h2v2h-2v2h-2v-2h-2v-2h2z" fill="#FFFFFF"/></g></svg>`;
    } else {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><defs><linearGradient id="grad-gp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563EB" /><stop offset="50%" stop-color="#0891B2" /><stop offset="100%" stop-color="#14B8A6" /></linearGradient><filter id="glow-gp" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#0891B2" flood-opacity="0.6"/></filter></defs><g filter="url(#glow-gp)"><path d="M7 4h3M14 4h3M8 4v2c0 3 2 5.5 4 5.5s4-2.5 4-5.5V4" fill="none" stroke="url(#grad-gp)" stroke-width="2" stroke-linecap="round"/><path d="M12 11.5v4.5" fill="none" stroke="url(#grad-gp)" stroke-width="2"/><circle cx="12" cy="18" r="2.5" fill="url(#grad-gp)"/><circle cx="12" cy="18" r="0.8" fill="#FFFFFF"/></g></svg>`;
    }

    iconWrapper.innerHTML = svgContent;
}