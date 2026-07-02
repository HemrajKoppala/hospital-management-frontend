// ============================================
// MEDICONNECT - COMPLETE SCRIPT
// ============================================

// ============================================
// SECTION 1: TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    
    const icon = toast.querySelector('i');
    if (type === 'success') {
        icon.className = 'fas fa-check-circle';
        icon.style.color = '#0b6e7c';
        toast.style.borderLeftColor = '#0b6e7c';
    } else if (type === 'error') {
        icon.className = 'fas fa-exclamation-circle';
        icon.style.color = '#e74c3c';
        toast.style.borderLeftColor = '#e74c3c';
    } else if (type === 'warning') {
        icon.className = 'fas fa-exclamation-triangle';
        icon.style.color = '#f39c12';
        toast.style.borderLeftColor = '#f39c12';
    } else if (type === 'info') {
        icon.className = 'fas fa-info-circle';
        icon.style.color = '#0b6e7c';
        toast.style.borderLeftColor = '#0b6e7c';
    }
    
    toast.classList.add('show');
    
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function hideToast() {
    document.getElementById('toast').classList.remove('show');
}

// ============================================
// SECTION 2: PASSWORD VISIBILITY TOGGLE
// ============================================
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(inputId + 'Icon');
    
    if (input.type === 'password') {
        input.type = 'text';
        if (icon) icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        if (icon) icon.className = 'fas fa-eye';
    }
}

// ============================================
// SECTION 3: DEMO LOGIN (No Local Storage)
// ============================================
const DEMO_USERS = [
    { 
        email: 'demo@mediconnect.com', 
        password: 'demo123', 
        name: 'Demo Patient', 
        age: 35, 
        dob: '1990-06-15', 
        gender: 'Male' 
    }
];

let currentUser = null;
let isLoggedIn = false;

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    document.getElementById('loginEmailError').classList.remove('show');
    document.getElementById('loginPasswordError').classList.remove('show');
    
    if (!email) {
        document.getElementById('loginEmailError').classList.add('show');
        document.getElementById('loginEmailError').textContent = 'Please enter your email';
        showToast('Please enter your email', 'error');
        return;
    }
    
    if (!password) {
        document.getElementById('loginPasswordError').classList.add('show');
        showToast('Please enter your password', 'error');
        return;
    }
    
    const user = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    
    if (!user) {
        document.getElementById('loginEmailError').classList.add('show');
        document.getElementById('loginEmailError').textContent = 'Invalid credentials. Use demo@mediconnect.com / demo123';
        showToast('Invalid credentials. Use demo@mediconnect.com / demo123', 'error');
        return;
    }
    
    currentUser = user;
    isLoggedIn = true;
    
    showToast('Welcome back, ' + user.name + '! 🎉', 'success');
    closeLoginModal();
    
    document.getElementById('mainDashboard').style.display = 'block';
    updateUserProfile(user);
}

function handleRegister(event) {
    event.preventDefault();
    showToast('Demo mode: Please use demo@mediconnect.com / demo123 to login', 'info');
    closeRegisterModal();
    setTimeout(() => {
        openLoginModal();
    }, 500);
}

function getCurrentUser() {
    return currentUser;
}

function isLoggedInUser() {
    return isLoggedIn;
}

function logoutUser() {
    currentUser = null;
    isLoggedIn = false;
}

// ============================================
// SECTION 4: AUTHENTICATION - MODAL CONTROLS
// ============================================
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('loginForm').reset();
    document.querySelectorAll('#loginForm .error-text').forEach(el => el.classList.remove('show'));
}

function openRegisterModal() {
    closeLoginModal();
    document.getElementById('registerModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRegisterModal() {
    document.getElementById('registerModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('registerForm').reset();
    document.querySelectorAll('#registerForm .error-text').forEach(el => el.classList.remove('show'));
}

function openForgotModal() {
    closeLoginModal();
    document.getElementById('forgotModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('forgotStepEmail').classList.add('active');
    document.getElementById('forgotStepOTP').classList.remove('active');
    document.getElementById('forgotStepPassword').classList.remove('active');
    document.getElementById('forgotEmailForm').reset();
    document.getElementById('forgotEmailError').classList.remove('show');
}

function closeForgotModal() {
    document.getElementById('forgotModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('forgotEmailForm').reset();
    document.getElementById('forgotOtpForm').reset();
    document.getElementById('forgotResetForm').reset();
    document.querySelectorAll('#forgotModal .error-text').forEach(el => el.classList.remove('show'));
    document.getElementById('forgotStepEmail').classList.add('active');
    document.getElementById('forgotStepOTP').classList.remove('active');
    document.getElementById('forgotStepPassword').classList.remove('active');
}

// ============================================
// SECTION 5: FORGOT PASSWORD (Demo)
// ============================================
let currentResetEmail = '';
let generatedOTP = '';
let otpVerified = false;

function sendOTP(event) {
    event.preventDefault();
    
    const email = document.getElementById('forgotEmail').value.trim();
    
    document.getElementById('forgotEmailError').classList.remove('show');
    
    if (!email) {
        document.getElementById('forgotEmailError').classList.add('show');
        document.getElementById('forgotEmailError').textContent = 'Please enter your email';
        showToast('Please enter your email', 'error');
        return;
    }
    
    const user = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
        document.getElementById('forgotEmailError').classList.add('show');
        document.getElementById('forgotEmailError').textContent = 'No account found with this email';
        showToast('No account found with this email', 'error');
        return;
    }
    
    currentResetEmail = email;
    generatedOTP = String(Math.floor(100000 + Math.random() * 900000));
    otpVerified = false;
    
    console.log('🔐 OTP for ' + email + ': ' + generatedOTP);
    console.log('📧 This would be sent to your email in production');
    
    document.getElementById('otpEmailDisplay').textContent = email;
    document.getElementById('forgotStepEmail').classList.remove('active');
    document.getElementById('forgotStepOTP').classList.add('active');
    
    showToast('📧 OTP sent to ' + email + ' (Check console for OTP)', 'info');
}

function verifyOTP(event) {
    event.preventDefault();
    
    const otp = document.getElementById('otpCode').value.trim();
    
    document.getElementById('otpError').classList.remove('show');
    
    if (otp.length !== 6) {
        document.getElementById('otpError').classList.add('show');
        document.getElementById('otpError').textContent = 'Please enter a 6-digit OTP';
        showToast('Please enter a 6-digit OTP', 'error');
        return;
    }
    
    if (otp !== generatedOTP) {
        document.getElementById('otpError').classList.add('show');
        document.getElementById('otpError').textContent = 'Invalid OTP. Please try again.';
        showToast('Invalid OTP. Please try again.', 'error');
        return;
    }
    
    otpVerified = true;
    document.getElementById('forgotStepOTP').classList.remove('active');
    document.getElementById('forgotStepPassword').classList.add('active');
    
    showToast('✅ OTP Verified! Set your new password.', 'success');
}

function resendOTP() {
    generatedOTP = String(Math.floor(100000 + Math.random() * 900000));
    console.log('🔄 New OTP for ' + currentResetEmail + ': ' + generatedOTP);
    console.log('📧 This would be sent to your email in production');
    showToast('📧 New OTP sent! Check console for OTP', 'info');
}

function resetPassword(event) {
    event.preventDefault();
    
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    
    document.getElementById('newPasswordError').classList.remove('show');
    document.getElementById('confirmNewError').classList.remove('show');
    
    if (newPassword.length < 6) {
        document.getElementById('newPasswordError').classList.add('show');
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    if (newPassword !== confirmNewPassword) {
        document.getElementById('confirmNewError').classList.add('show');
        showToast('Passwords do not match', 'error');
        return;
    }
    
    showToast('✅ Password reset successfully! Please login.', 'success');
    closeForgotModal();
    
    setTimeout(() => {
        openLoginModal();
    }, 500);
}

// ============================================
// SECTION 6: UPDATE USER PROFILE IN UI
// ============================================
function updateUserProfile(user) {
    if (!user) return;
    
    const avatar = document.getElementById('patientAvatar');
    const nameEl = document.getElementById('patientName');
    const profileAvatar = document.getElementById('profileAvatar');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    
    if (avatar && user.name) {
        avatar.textContent = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    if (nameEl && user.name) {
        nameEl.textContent = user.name;
    }
    if (profileAvatar && user.name) {
        profileAvatar.textContent = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    if (profileName && user.name) {
        profileName.textContent = user.name;
    }
    if (profileEmail && user.email) {
        profileEmail.textContent = user.email;
    }
    
    if (document.getElementById('fullName') && user.name) {
        document.getElementById('fullName').value = user.name;
    }
    if (document.getElementById('age') && user.age) {
        document.getElementById('age').value = user.age;
    }
    if (document.getElementById('dob') && user.dob) {
        document.getElementById('dob').value = user.dob;
    }
    if (document.getElementById('email') && user.email) {
        document.getElementById('email').value = user.email;
    }
    if (document.getElementById('gender') && user.gender) {
        document.getElementById('gender').value = user.gender;
    }
}

// ============================================
// SECTION 7: PAGE NAVIGATION
// ============================================
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-tab[data-page]').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector(`.nav-tab[data-page="${pageId}"]`);
    if (activeTab) activeTab.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// SECTION 8: LOGOUT
// ============================================
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout from MediConnect?')) {
        logoutUser();
        showToast('You have been logged out successfully', 'success');
        document.getElementById('mainDashboard').style.display = 'none';
        setTimeout(() => {
            openLoginModal();
        }, 500);
    }
});

// ============================================
// SECTION 9: PROFILE FUNCTIONS
// ============================================
let isEditingProfile = false;

function toggleEditProfile() {
    isEditingProfile = !isEditingProfile;
    const inputs = document.querySelectorAll('#profileGrid input, #profileGrid select');
    const actions = document.getElementById('profileActions');
    const editBtn = document.querySelector('.edit-profile-btn');
    
    inputs.forEach(input => {
        if (input.id !== 'email' && input.id !== 'age') {
            input.disabled = !isEditingProfile;
        }
    });
    
    if (isEditingProfile) {
        actions.style.display = 'flex';
        editBtn.innerHTML = '<i class="fas fa-times"></i> Cancel Edit';
        editBtn.style.display = 'none';
        showToast('You can now edit your profile', 'info');
    } else {
        actions.style.display = 'none';
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit Profile';
        editBtn.style.display = 'inline-flex';
        const user = getCurrentUser();
        if (user) {
            updateUserProfile(user);
        }
    }
}

function validateDateOfBirth() {
    const dobInput = document.getElementById('dob');
    const dobError = document.getElementById('dobError');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const selectedDate = new Date(dobInput.value);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate > today) {
        if (dobError) dobError.classList.add('show');
        if (dobInput) dobInput.style.borderColor = '#e74c3c';
        return false;
    } else {
        if (dobError) dobError.classList.remove('show');
        if (dobInput) dobInput.style.borderColor = '#d6e9f0';
        return true;
    }
}

document.getElementById('dob')?.addEventListener('change', function() {
    if (isEditingProfile) {
        validateDateOfBirth();
        updateAge();
    }
});

function updateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById('age').value = age;
    }
}

function saveProfile() {
    const name = document.getElementById('fullName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const address = document.getElementById('address').value.trim();
    const emergencyContact = document.getElementById('emergencyContact').value.trim();
    const bloodGroup = document.getElementById('bloodGroup').value.trim();
    const gender = document.getElementById('gender').value;
    
    if (!validateDateOfBirth()) {
        showToast('Please select a valid date of birth (cannot be in future)', 'error');
        return;
    }
    
    if (!name) {
        showToast('Please enter your full name', 'error');
        return;
    }
    if (!mobile || mobile.length < 10) {
        showToast('Please enter a valid mobile number', 'error');
        return;
    }
    if (!address) {
        showToast('Please enter your address', 'error');
        return;
    }
    
    updateAge();
    
    const user = getCurrentUser();
    if (user) {
        user.name = name;
        user.age = parseInt(document.getElementById('age').value);
        user.dob = document.getElementById('dob').value;
        user.gender = gender;
        updateUserProfile(user);
    }
    
    showToast('Profile saved successfully!', 'success');
    toggleEditProfile();
}

// ============================================
// SECTION 10: DOCTOR DATA
// ============================================
const doctorsData = [
    { 
        name: 'Dr. Priya Sharma', 
        credentials: 'MBBS, MD', 
        specialization: 'Cardiologist', 
        experience: '18 years', 
        rating: 4.8, 
        reviews: 127, 
        fee: 800,
        availableDays: [1, 2, 3, 4, 5],
        slots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '04:00 PM']
    },
    { 
        name: 'Dr. Arjun Reddy', 
        credentials: 'MBBS, DDV', 
        specialization: 'Dermatologist', 
        experience: '12 years', 
        rating: 4.7, 
        reviews: 98, 
        fee: 700,
        availableDays: [1, 2, 4, 5],
        slots: ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM']
    },
    { 
        name: 'Dr. Meera Nair', 
        credentials: 'MBBS, MS', 
        specialization: 'ENT', 
        experience: '15 years', 
        rating: 4.9, 
        reviews: 156, 
        fee: 750,
        availableDays: [2, 3, 4, 5],
        slots: ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM']
    },
    { 
        name: 'Dr. Suresh Patel', 
        credentials: 'MBBS, DNB', 
        specialization: 'Orthopedic', 
        experience: '10 years', 
        rating: 4.6, 
        reviews: 84, 
        fee: 650,
        availableDays: [1, 2, 3, 5],
        slots: ['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM']
    },
    { 
        name: 'Dr. Ananya Singh', 
        credentials: 'MBBS, MD', 
        specialization: 'Gynecologist', 
        experience: '14 years', 
        rating: 4.8, 
        reviews: 112, 
        fee: 720,
        availableDays: [1, 2, 3, 4, 5],
        slots: ['09:00 AM', '11:00 AM', '02:00 PM', '05:00 PM']
    }
];

// ============================================
// SECTION 11: BOOK APPOINTMENT CALENDAR
// ============================================
let selectedSlot = null;
let selectedDate = null;
let currentDoctorData = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function updateDoctorSummary() {
    const index = parseInt(document.getElementById('doctorSelect').value);
    currentDoctorData = doctorsData[index];
    
    if (currentDoctorData) {
        document.getElementById('selectedDoctorName').innerHTML = `${currentDoctorData.name} <span style="font-size:15px; font-weight:400; color:#1f6b7a;">${currentDoctorData.credentials}</span>`;
        document.getElementById('selectedDoctorCreds').textContent = `${currentDoctorData.specialization} · ${currentDoctorData.experience} experience`;
        document.querySelector('.doctor-summary .stars').innerHTML = 
            `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> ${currentDoctorData.rating} (${currentDoctorData.reviews} reviews)`;
        document.getElementById('doctorFee').textContent = currentDoctorData.fee;
        document.getElementById('bookingFee').textContent = currentDoctorData.fee;
        document.getElementById('bookingPatientName').textContent = document.getElementById('patientName')?.textContent || 'Demo Patient';
        
        const today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        
        generateCalendar(currentDoctorData.availableDays);
        
        selectedSlot = null;
        selectedDate = null;
        document.getElementById('selectedSlotDisplay').textContent = 'None';
        document.getElementById('appointmentTime').innerHTML = '<option value="">Please select a date first</option>';
        document.getElementById('appointmentTime').disabled = true;
        document.getElementById('doctorSlotsContainer').innerHTML = '<span style="color:#3f7484; font-size:13px;">Please select a date</span>';
    }
}

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    maxDate.setHours(0, 0, 0, 0);
    
    const firstOfMonth = new Date(currentYear, currentMonth, 1);
    firstOfMonth.setHours(0, 0, 0, 0);
    
    if (firstOfMonth > maxDate) {
        showToast('Cannot view dates beyond 30 days', 'warning');
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        generateCalendar(currentDoctorData.availableDays);
        return;
    }
    
    generateCalendar(currentDoctorData.availableDays);
}

function generateCalendar(availableDays) {
    const calendarEl = document.getElementById('doctorCalendar');
    if (!calendarEl) return;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    maxDate.setHours(0, 0, 0, 0);
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startingDay = firstDay.getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('calendarMonthYear').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    let html = '';
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        html += `<div style="text-align:center; font-size:11px; font-weight:600; color:#3f7484; padding:4px;">${day}</div>`;
    });
    
    for (let i = 0; i < startingDay; i++) {
        html += `<div style="padding:4px;"></div>`;
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        date.setHours(0, 0, 0, 0);
        const dayOfWeek = date.getDay();
        const isToday = date.getTime() === today.getTime();
        const isPast = date < today;
        const isFutureBeyond30 = date > maxDate;
        const isAvailable = availableDays.includes(dayOfWeek) && !isPast && !isFutureBeyond30;
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dayStr = String(date.getDate()).padStart(2, '0');
        const dateStr = year + '-' + month + '-' + dayStr;
        
        let classes = 'calendar-day';
        if (isAvailable) {
            classes += ' available';
        } else {
            classes += ' unavailable';
        }
        if (isToday) classes += ' today';
        if (selectedDate === dateStr) classes += ' selected';
        
        html += `<div class="${classes}" data-date="${dateStr}" onclick="selectCalendarDate('${dateStr}')">
            ${day}
        </div>`;
    }
    
    calendarEl.innerHTML = html;
    
    const dateInput = document.getElementById('appointmentDate');
    const minDate = new Date();
    minDate.setHours(0, 0, 0, 0);
    dateInput.min = minDate.toISOString().split('T')[0];
    dateInput.max = maxDate.toISOString().split('T')[0];
}

function selectCalendarDate(dateStr) {
    const selectedElement = document.querySelector(`.calendar-day[data-date="${dateStr}"]`);
    if (!selectedElement) {
        showToast('Please select a valid date', 'warning');
        return;
    }
    
    if (selectedElement.classList.contains('unavailable')) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDateObj = new Date(dateStr + 'T00:00:00');
        selectedDateObj.setHours(0, 0, 0, 0);
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 30);
        maxDate.setHours(0, 0, 0, 0);
        
        if (selectedDateObj < today) {
            showToast('Cannot select past dates', 'warning');
        } else if (selectedDateObj > maxDate) {
            showToast('Cannot select dates beyond 30 days', 'warning');
        } else {
            showToast('Doctor is not available on this date', 'warning');
        }
        return;
    }
    
    selectedDate = dateStr;
    
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        dateInput.value = dateStr;
        dateInput.dispatchEvent(new Event('change'));
    }
    
    document.querySelectorAll('.calendar-day').forEach(el => {
        el.classList.remove('selected');
        if (el.dataset.date === dateStr) {
            el.classList.add('selected');
        }
    });
    
    updateSlotsForSelectedDate();
    
    const displayDate = new Date(dateStr + 'T00:00:00');
    showToast(`Selected: ${displayDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}`, 'success');
}

function updateSlotsForSelectedDate() {
    const slotsContainer = document.getElementById('doctorSlotsContainer');
    const timeSelect = document.getElementById('appointmentTime');
    
    if (!selectedDate || !currentDoctorData) {
        slotsContainer.innerHTML = '<span style="color:#3f7484; font-size:13px;">Please select a date</span>';
        timeSelect.disabled = true;
        timeSelect.innerHTML = '<option value="">Please select a date first</option>';
        return;
    }
    
    const now = new Date();
    const currentHour = now.getHours();
    const selectedDateObj = new Date(selectedDate + 'T00:00:00');
    const isToday = selectedDateObj.toDateString() === now.toDateString();
    
    const bookedSlots = ['11:00 AM', '03:00 PM'];
    
    let html = '';
    let selectHtml = '<option value="">Select a time slot</option>';
    let hasAvailable = false;
    
    currentDoctorData.slots.forEach(slot => {
        const isBooked = bookedSlots.includes(slot);
        let isAvailable = !isBooked;
        
        if (isToday && isAvailable) {
            const slotHour = parseInt(slot.split(':')[0]);
            const slotAmPm = slot.split(' ')[1];
            let slotHour24 = slotHour;
            if (slotAmPm === 'PM' && slotHour !== 12) slotHour24 = slotHour + 12;
            if (slotAmPm === 'AM' && slotHour === 12) slotHour24 = 0;
            
            if (slotHour24 < currentHour + 1) {
                isAvailable = false;
            }
        }
        
        const isSelected = selectedSlot === slot;
        
        if (isAvailable) {
            hasAvailable = true;
            html += `<button class="time-slot-btn ${isSelected ? 'selected' : ''}" onclick="selectTimeSlot('${slot}')">
                ${slot}
            </button>`;
            selectHtml += `<option value="${slot}" ${isSelected ? 'selected' : ''}>${slot}</option>`;
        } else if (isBooked) {
            html += `<button class="time-slot-btn booked" disabled>${slot} (Booked)</button>`;
        } else {
            html += `<button class="time-slot-btn unavailable" disabled>${slot} (Unavailable)</button>`;
        }
    });
    
    if (!hasAvailable) {
        html = '<span style="color:#e74c3c; font-size:13px;">No slots available on this date</span>';
    }
    
    slotsContainer.innerHTML = html;
    timeSelect.innerHTML = selectHtml;
    timeSelect.disabled = false;
    
    if (selectedSlot) {
        document.getElementById('selectedSlotDisplay').textContent = selectedSlot;
        timeSelect.value = selectedSlot;
    } else {
        document.getElementById('selectedSlotDisplay').textContent = 'None';
    }
}

function selectTimeSlot(slot) {
    selectedSlot = slot;
    document.getElementById('selectedSlotDisplay').textContent = slot;
    
    const timeSelect = document.getElementById('appointmentTime');
    timeSelect.value = slot;
    
    document.querySelectorAll('.time-slot-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.textContent.trim() === slot) {
            btn.classList.add('selected');
        }
    });
    
    showToast(`Selected time: ${slot}`, 'success');
}

// ============================================
// SECTION 12: PAYMENT FUNCTIONS
// ============================================
let selectedPaymentMethod = 'card';

function openPaymentModal() {
    const date = document.getElementById('appointmentDate').value;
    const timeSelect = document.getElementById('appointmentTime');
    const symptoms = document.getElementById('symptoms').value.trim();
    const dateError = document.getElementById('dateError');
    const timeError = document.getElementById('timeError');
    const symptomsError = document.getElementById('symptomsError');
    
    if (dateError) dateError.style.display = 'none';
    if (timeError) timeError.style.display = 'none';
    if (symptomsError) symptomsError.style.display = 'none';
    
    if (!date) {
        if (dateError) {
            dateError.style.display = 'block';
            dateError.textContent = 'Please select an appointment date';
        }
        showToast('Please select an appointment date', 'error');
        return;
    }
    
    const selectedDateObj = new Date(date + 'T00:00:00');
    selectedDateObj.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    maxDate.setHours(0, 0, 0, 0);
    
    if (selectedDateObj < today) {
        if (dateError) {
            dateError.style.display = 'block';
            dateError.textContent = 'Cannot select past dates';
        }
        showToast('Cannot select past dates', 'error');
        return;
    }
    
    if (selectedDateObj > maxDate) {
        if (dateError) {
            dateError.style.display = 'block';
            dateError.textContent = 'Cannot select dates beyond 30 days';
        }
        showToast('Cannot select dates beyond 30 days', 'error');
        return;
    }
    
    if (!timeSelect || !timeSelect.value) {
        if (timeError) {
            timeError.style.display = 'block';
            timeError.textContent = 'Please select a valid time slot';
        }
        showToast('Please select a valid time slot', 'error');
        return;
    }
    
    if (!symptoms || symptoms.length < 5) {
        if (symptomsError) {
            symptomsError.style.display = 'block';
            symptomsError.textContent = 'Please describe your symptoms (min 5 characters)';
        }
        showToast('Please describe your symptoms (min 5 characters)', 'error');
        return;
    }
    
    const doctors = [
        { name: 'Dr. Priya Sharma', fee: 800 },
        { name: 'Dr. Arjun Reddy', fee: 700 },
        { name: 'Dr. Meera Nair', fee: 750 },
        { name: 'Dr. Suresh Patel', fee: 650 },
        { name: 'Dr. Ananya Singh', fee: 720 }
    ];
    const index = parseInt(document.getElementById('doctorSelect').value);
    const doctor = doctors[index];
    
    const dateObj = new Date(date + 'T00:00:00');
    const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeText = timeSelect.options[timeSelect.selectedIndex].text;
    
    document.getElementById('modalDoctorName').textContent = doctor.name;
    document.getElementById('modalPatientName').textContent = document.getElementById('patientName')?.textContent || 'Demo Patient';
    document.getElementById('modalAppointmentDate').textContent = formattedDate;
    document.getElementById('modalAppointmentTime').textContent = timeText;
    document.getElementById('modalAppointmentFee').textContent = doctor.fee;
    document.getElementById('modalTotalAmount').textContent = doctor.fee;
    document.getElementById('modalPayButtonAmount').textContent = doctor.fee;
    
    document.getElementById('paymentModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function selectPayment(element, method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('selected');
        const check = opt.querySelector('.fa-check-circle');
        if (check) check.style.display = 'none';
    });
    element.classList.add('selected');
    const check = element.querySelector('.fa-check-circle');
    if (check) check.style.display = 'block';
    
    const upiContainer = document.getElementById('upiQRContainer');
    if (method === 'upi') {
        if (upiContainer) upiContainer.style.display = 'block';
    } else {
        if (upiContainer) upiContainer.style.display = 'none';
    }
}

function processPayment() {
    const payBtn = document.getElementById('razorpayPayBtn');
    if (!payBtn) return;
    
    const originalText = payBtn.innerHTML;
    
    payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening Razorpay...';
    payBtn.disabled = true;
    payBtn.classList.add('payment-processing');
    
    const doctorName = document.getElementById('modalDoctorName')?.textContent || '';
    const amount = document.getElementById('modalTotalAmount')?.textContent || '0';
    const date = document.getElementById('modalAppointmentDate')?.textContent || '';
    const time = document.getElementById('modalAppointmentTime')?.textContent || '';
    
    setTimeout(() => {
        const success = Math.random() > 0.1;
        
        if (success) {
            payBtn.innerHTML = '<i class="fas fa-check"></i> Payment Successful!';
            payBtn.style.background = '#28a745';
            
            setTimeout(() => {
                closePaymentModal();
                showToast('✅ Payment Successful!', 'success');
                
                const today = new Date();
                const bookingDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                
                const appointmentData = {
                    id: 'APP-' + Date.now().toString().slice(-6),
                    doctor: doctorName,
                    date: date,
                    time: time,
                    bookingDate: bookingDate,
                    status: 'upcoming',
                    fee: amount,
                    rated: 'false'
                };
                
                addAppointmentToDashboard(appointmentData);
                addNotification(doctorName, date, time);
                updateTrackingPage(appointmentData);
                
                const symptoms = document.getElementById('symptoms');
                if (symptoms) symptoms.value = '';
                
                document.getElementById('selectedSlotDisplay').textContent = 'None';
                selectedSlot = null;
                selectedDate = null;
                
                const appointmentTime = document.getElementById('appointmentTime');
                if (appointmentTime) {
                    appointmentTime.innerHTML = '<option value="">Please select a date first</option>';
                    appointmentTime.disabled = true;
                }
                
                document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
                
                const doctorSlotsContainer = document.getElementById('doctorSlotsContainer');
                if (doctorSlotsContainer) {
                    doctorSlotsContainer.innerHTML = '<span style="color:#3f7484; font-size:13px;">Please select a date</span>';
                }
                
                openDownloadModal(appointmentData);
                
                updateNotificationCount();
                payBtn.innerHTML = originalText;
                payBtn.style.background = '';
                payBtn.disabled = false;
                payBtn.classList.remove('payment-processing');
                
            }, 1000);
            
        } else {
            payBtn.innerHTML = '<i class="fas fa-times"></i> Payment Failed';
            payBtn.style.background = '#dc3545';
            payBtn.classList.add('payment-failure');
            
            setTimeout(() => {
                closePaymentModal();
                showToast('❌ Payment failed. Please try again.', 'error');
                
                payBtn.innerHTML = originalText;
                payBtn.style.background = '';
                payBtn.disabled = false;
                payBtn.classList.remove('payment-failure');
                payBtn.classList.remove('payment-processing');
            }, 1500);
        }
    }, 2000);
}

// ============================================
// SECTION 13: DOWNLOAD APPOINTMENT
// ============================================
let currentDownloadData = null;

function openDownloadModal(appointmentData) {
    currentDownloadData = appointmentData;
    
    document.getElementById('downloadAppId').textContent = '#' + appointmentData.id;
    document.getElementById('downloadPatientName').textContent = document.getElementById('patientName')?.textContent || 'Demo Patient';
    document.getElementById('downloadDoctorName').textContent = appointmentData.doctor;
    document.getElementById('downloadSpecialization').textContent = currentDoctorData ? currentDoctorData.specialization : 'General';
    document.getElementById('downloadDate').textContent = appointmentData.date;
    document.getElementById('downloadTime').textContent = appointmentData.time;
    document.getElementById('downloadFee').textContent = '₹' + appointmentData.fee;
    
    document.getElementById('downloadModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
    document.getElementById('downloadModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function downloadAppointmentPDF() {
    showToast('📄 Downloading appointment confirmation...', 'warning');
    setTimeout(() => {
        showToast('✅ Appointment PDF downloaded successfully!', 'success');
        closeDownloadModal();
    }, 1500);
}

// ============================================
// SECTION 14: VIEW APPOINTMENT DETAILS
// ============================================
function viewAppointmentDetails(appointmentId) {
    const card = document.querySelector(`.appointment-card[data-id="${appointmentId}"]`);
    if (card) {
        const doctor = card.querySelector('.appointment-doctor')?.textContent?.trim() || 'Unknown Doctor';
        const time = card.querySelector('.appointment-time')?.textContent?.trim() || 'Unknown Time';
        const status = card.querySelector('.status-badge')?.textContent?.trim() || 'Unknown Status';
        
        const details = `
📋 Appointment Details
━━━━━━━━━━━━━━━━━━━━━
🩺 Doctor: ${doctor}
📅 Date & Time: ${time}
📌 Status: ${status}
💳 Fee: ₹${document.getElementById('modalAppointmentFee')?.textContent || '800'}
━━━━━━━━━━━━━━━━━━━━━
📌 Note: This is a demo appointment. 
For real appointments, full details would be shown here.
        `;
        alert(details);
        showToast('Viewing appointment details', 'success');
    } else {
        alert(`📋 Appointment Details\n━━━━━━━━━━━━━━━━━━━━━\n🩺 Doctor: Dr. Priya Sharma\n📅 Date: 25 June 2026\n⏰ Time: 10:30 AM\n📌 Status: Upcoming\n💳 Fee: ₹800\n━━━━━━━━━━━━━━━━━━━━━\n📌 Note: This is a demo appointment.`);
        showToast('Viewing appointment details', 'success');
    }
}

// ============================================
// SECTION 15: CANCEL APPOINTMENT
// ============================================
function openCancelModal() {
    const doctor = document.getElementById('trackingDoctor')?.textContent || 'Dr. Priya Sharma';
    const date = document.getElementById('trackingDate')?.textContent || '25 June 2026, 10:30 AM';
    
    document.getElementById('cancelAppointmentInfo').textContent = `${doctor} - ${date}`;
    document.getElementById('cancelModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCancelModal() {
    document.getElementById('cancelModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('cancelReason').value = '';
    document.getElementById('cancelComments').value = '';
}

function confirmCancel() {
    const reason = document.getElementById('cancelReason')?.value;
    const comments = document.getElementById('cancelComments')?.value.trim();
    
    if (!reason) {
        showToast('Please select a reason for cancellation', 'error');
        return;
    }
    
    closeCancelModal();
    showToast('✅ Appointment cancelled successfully.', 'success');
    
    document.getElementById('trackingStatusBadge').textContent = 'Cancelled';
    document.getElementById('trackingStatusBadge').style.background = '#f8dddd';
    document.getElementById('trackingStatusBadge').style.color = '#a13a3a';
    document.getElementById('trackingStatusBadge').style.border = '1px solid #e74c3c';
    
    document.getElementById('progressTracker').innerHTML = `
        <span class="badge" style="background:#0b6e7c; color:white; padding:6px 16px;">Booked</span>
        <span style="color:#1f6b7a;">→</span>
        <span class="badge" style="background:#1f9bb0; color:white; padding:6px 16px;">Confirmed</span>
        <span style="color:#1f6b7a;">→</span>
        <span class="badge" style="background:#e74c3c; color:white; padding:6px 16px;">Cancelled</span>
    `;
    
    document.getElementById('progressDetails').innerHTML = `
        <div><span class="badge" style="background:#fff3cd; color:#8a6d1f;">Completed</span> Appointment Booked</div>
        <div><span class="badge" style="background:#cce5ff; color:#004085;">Completed</span> Doctor Confirmed</div>
        <div><span class="badge" style="background:#e74c3c; color:white;">Cancelled</span> Appointment Cancelled due to: ${reason}</div>
    `;
    
    const notifList = document.getElementById('notificationsList');
    if (notifList) {
        const newNotif = document.createElement('div');
        newNotif.className = 'notif-item';
        newNotif.dataset.category = 'appointment';
        newNotif.dataset.read = 'false';
        newNotif.innerHTML = `
            <div class="notif-icon"><i class="fas fa-calendar-times"></i></div>
            <div class="notif-content">
                <strong>Appointment Cancelled</strong>
                <span style="color:#2d5f6b;">${document.getElementById('cancelAppointmentInfo').textContent}</span>
            </div>
            <span class="notif-time">Just now</span>
            <span class="badge" style="background:#e74c3c; color:white; cursor:pointer;" onclick="markAsRead(this)">Unread</span>
        `;
        notifList.insertBefore(newNotif, notifList.firstChild);
    }
    updateNotificationCount();
}

document.getElementById('cancelModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeCancelModal();
    }
});

// ============================================
// SECTION 16: RATING FUNCTIONALITY (Only from Reviews Section)
// ============================================
let selectedRating = 0;
let currentRatingDoctor = '';
let currentRatingSpecialization = '';

function openRatingModal(doctorName, specialization) {
    const pendingItems = document.querySelectorAll('#pendingRatingsList .appointment-card');
    let alreadyRated = false;
    
    pendingItems.forEach(item => {
        if (item.textContent.includes(doctorName) && item.dataset.rated === 'true') {
            alreadyRated = true;
        }
    });
    
    if (alreadyRated) {
        showToast('You have already rated this doctor', 'warning');
        return;
    }
    
    currentRatingDoctor = doctorName;
    currentRatingSpecialization = specialization || '';
    selectedRating = 0;
    
    document.getElementById('ratingDoctorName').textContent = doctorName;
    document.getElementById('ratingDoctorSpecialization').textContent = specialization || '';
    document.getElementById('ratingText').textContent = 'Select a rating';
    document.getElementById('ratingText').style.color = '#3f7484';
    
    const reviewField = document.getElementById('ratingReview');
    if (reviewField) {
        reviewField.value = '';
        reviewField.style.borderColor = '#d6e9f0';
        reviewField.placeholder = 'Please write a detailed review (min 10 characters)...';
    }
    
    document.getElementById('reviewError').style.display = 'none';
    
    document.querySelectorAll('#starContainer i').forEach(star => {
        star.style.color = '#d1d5db';
    });
    
    document.getElementById('ratingModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRatingModal(skipped = false) {
    document.getElementById('ratingModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('ratingReview').style.borderColor = '#d6e9f0';
    document.getElementById('ratingReview').placeholder = 'Please write a detailed review (min 10 characters)...';
    document.getElementById('reviewError').style.display = 'none';
    
    if (skipped && currentRatingDoctor) {
        handleRatingSkip(currentRatingDoctor);
    }
}

function handleRatingSkip(doctorName) {
    const pendingItems = document.querySelectorAll('#pendingRatingsList .appointment-card');
    pendingItems.forEach(item => {
        if (item.textContent.includes(doctorName) && item.dataset.rated === 'false') {
            item.dataset.rated = 'skipped';
            const rateBtn = item.querySelector('.btn-outline');
            if (rateBtn) {
                rateBtn.textContent = '⏳ Skipped';
                rateBtn.style.cssText = 'color:#8a9ba5; border-color:#d1d5db; cursor:default;';
                rateBtn.onclick = function() {
                    showToast('You can still review this later from the Reviews page', 'info');
                };
            }
        }
    });
    showToast('Review skipped. You can review later from the Reviews page.', 'info');
}

function setRating(value) {
    selectedRating = value;
    const stars = document.querySelectorAll('#starContainer i');
    
    stars.forEach((star, index) => {
        if (index < value) {
            star.style.color = '#f5b342';
        } else {
            star.style.color = '#d1d5db';
        }
    });
    
    const ratingTexts = {
        1: '⭐ Very Poor',
        2: '⭐ Poor',
        3: '⭐⭐ Average',
        4: '⭐⭐⭐ Good',
        5: '⭐⭐⭐⭐⭐ Excellent!'
    };
    
    document.getElementById('ratingText').textContent = ratingTexts[value] || 'Select a rating';
    document.getElementById('ratingText').style.color = '#3f7484';
}

function submitRating() {
    const review = document.getElementById('ratingReview')?.value.trim() || '';
    const reviewField = document.getElementById('ratingReview');
    const errorEl = document.getElementById('reviewError');
    
    if (reviewField) reviewField.style.borderColor = '#d6e9f0';
    if (errorEl) errorEl.style.display = 'none';
    
    if (selectedRating === 0) {
        document.getElementById('ratingText').textContent = '⚠️ Please select a rating';
        document.getElementById('ratingText').style.color = '#e74c3c';
        return;
    }
    
    if (!review || review.length < 10) {
        if (reviewField) {
            reviewField.style.borderColor = '#e74c3c';
            reviewField.placeholder = '⚠️ Please write a detailed review (min 10 characters)';
        }
        if (errorEl) {
            errorEl.style.display = 'block';
            errorEl.textContent = 'Please write at least 10 characters';
        }
        return;
    }
    
    const doctorName = currentRatingDoctor;
    
    const pendingItems = document.querySelectorAll('#pendingRatingsList .appointment-card');
    pendingItems.forEach(item => {
        if (item.textContent.includes(doctorName)) {
            item.dataset.rated = 'true';
            const rateBtn = item.querySelector('.btn-outline');
            if (rateBtn) {
                rateBtn.textContent = '✅ Reviewed';
                rateBtn.style.cssText = 'color:#28a745; border-color:#28a745; cursor:default;';
                rateBtn.onclick = function() {
                    showToast('Already reviewed this doctor', 'info');
                };
            }
            const statusBadge = item.querySelector('.status-badge');
            if (statusBadge) {
                statusBadge.textContent = 'Reviewed';
                statusBadge.className = 'status-badge completed';
            }
        }
    });
    
    closeRatingModal();
    showToast(`✅ Thank you for rating ${currentRatingDoctor} ${selectedRating} stars!`, 'success');
    
    const ratingsList = document.getElementById('ratingsList');
    if (ratingsList) {
        const newRating = document.createElement('div');
        newRating.style.cssText = 'background:#f8fcfd; padding:16px; border-radius:16px; margin-bottom:12px; border-left:4px solid #f5b342; animation: fadeIn 0.3s ease;';
        newRating.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <strong>${currentRatingDoctor}</strong>
                    <span style="font-size:13px; color:#3f7484;">${currentRatingSpecialization}</span>
                </div>
                <div style="color:#f5b342; font-size:18px;">
                    ${'<i class="fas fa-star"></i>'.repeat(selectedRating)}${'<i class="fas fa-star" style="color:#d1d5db;"></i>'.repeat(5 - selectedRating)}
                </div>
            </div>
            <p style="margin-top:8px; font-size:14px; color:#1a2e3f;">${review}</p>
            <span style="font-size:12px; color:#8a9ba5;">Reviewed on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        `;
        ratingsList.insertBefore(newRating, ratingsList.firstChild);
    }
    
    addNotification(`Rating submitted for ${currentRatingDoctor}`, '⭐ You rated ' + selectedRating + ' stars');
    updateNotificationCount();
}

// ============================================
// SECTION 17: ADD APPOINTMENT TO DASHBOARD
// ============================================
function addAppointmentToDashboard(appointmentData) {
    const appCount = document.getElementById('dashAppointments');
    if (appCount) {
        appCount.textContent = parseInt(appCount.textContent) + 1;
    }
    
    const appointmentsList = document.getElementById('recentAppointments');
    if (appointmentsList) {
        const newAppointment = document.createElement('div');
        newAppointment.className = 'appointment-card';
        newAppointment.dataset.id = appointmentData.id;
        newAppointment.dataset.doctor = appointmentData.doctor;
        newAppointment.dataset.date = appointmentData.date;
        newAppointment.dataset.time = appointmentData.time;
        newAppointment.dataset.status = 'upcoming';
        newAppointment.dataset.rated = 'false';
        newAppointment.innerHTML = `
            <div>
                <span class="appointment-doctor">${appointmentData.doctor} <small>${currentDoctorData ? currentDoctorData.specialization : ''}</small></span>
                <span class="appointment-time">${appointmentData.date}, ${appointmentData.time}</span>
            </div>
            <span class="status-badge upcoming">Upcoming</span>
            <div class="appointment-actions">
                <button class="btn-outline" onclick="viewAppointmentDetails('${appointmentData.id}')">Details</button>
            </div>
        `;
        appointmentsList.insertBefore(newAppointment, appointmentsList.firstChild);
    }
    
    const historyList = document.getElementById('historyList');
    if (historyList) {
        const historyItem = document.createElement('div');
        historyItem.className = 'appointment-card';
        historyItem.dataset.status = 'upcoming';
        historyItem.dataset.id = appointmentData.id;
        historyItem.innerHTML = `
            <div>
                <span class="appointment-doctor">${appointmentData.doctor} <small>${currentDoctorData ? currentDoctorData.specialization : ''}</small></span>
                <span class="appointment-time">${appointmentData.date} · ${appointmentData.time}</span>
            </div>
            <span class="status-badge upcoming">Upcoming</span>
            <button class="btn-outline" onclick="viewAppointmentDetails('${appointmentData.id}')">Details</button>
        `;
        historyList.insertBefore(historyItem, historyList.firstChild);
    }
}

function addNotification(doctorName, date, time) {
    const notifList = document.getElementById('notificationsList');
    if (notifList) {
        const newNotif = document.createElement('div');
        newNotif.className = 'notif-item';
        newNotif.dataset.category = 'appointment';
        newNotif.dataset.read = 'false';
        newNotif.innerHTML = `
            <div class="notif-icon"><i class="fas fa-calendar-check"></i></div>
            <div class="notif-content">
                <strong>New Appointment Booked</strong>
                <span style="color:#2d5f6b;">with ${doctorName} on ${date} at ${time}</span>
            </div>
            <span class="notif-time">Just now</span>
            <span class="badge" style="background:#0b6e7c; color:white; cursor:pointer;" onclick="markAsRead(this)">Unread</span>
        `;
        notifList.insertBefore(newNotif, notifList.firstChild);
    }
}

function updateNotificationCount() {
    const unreadCount = document.querySelectorAll('.notif-item[data-read="false"]').length;
    const headerBadge = document.getElementById('headerBadgeCount');
    const dashBadge = document.getElementById('dashNotifications');
    
    if (headerBadge) {
        headerBadge.textContent = unreadCount;
        headerBadge.style.display = unreadCount === 0 ? 'none' : 'flex';
    }
    if (dashBadge) {
        dashBadge.textContent = unreadCount;
    }
}

document.getElementById('paymentModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closePaymentModal();
    }
});

// ============================================
// SECTION 18: UPDATE TRACKING PAGE
// ============================================
function updateTrackingPage(appointmentData) {
    document.getElementById('trackingDoctor').textContent = appointmentData.doctor;
    document.getElementById('trackingDate').textContent = `${appointmentData.date}, ${appointmentData.time}`;
    document.getElementById('trackingStatusBadge').textContent = 'Upcoming';
    document.getElementById('trackingStatusBadge').style.background = '#0b6e7c';
    document.getElementById('trackingStatusBadge').style.color = 'white';
    document.getElementById('trackingDoctorName').textContent = appointmentData.doctor;
    document.getElementById('trackingSpecialization').textContent = currentDoctorData ? currentDoctorData.specialization : 'General';
    document.getElementById('trackingStatusText').textContent = 'Upcoming';
    
    document.getElementById('progressTracker').innerHTML = `
        <span class="badge" style="background:#0b6e7c; color:white; padding:6px 16px;">Booked</span>
        <span style="color:#1f6b7a;">→</span>
        <span class="badge" style="background:#1f9bb0; color:white; padding:6px 16px;">Confirmed</span>
        <span style="color:#1f6b7a;">→</span>
        <span class="badge" style="background:#3ba6b9; color:white; padding:6px 16px;">Upcoming</span>
        <span style="color:#1f6b7a;">→</span>
        <span class="badge" style="background:#b3d7e0; color:#0b3b47; padding:6px 16px;">Completed</span>
    `;
    
    document.getElementById('progressDetails').innerHTML = `
        <div><span class="badge" style="background:#fff3cd; color:#8a6d1f;">Completed</span> Appointment Booked on ${appointmentData.bookingDate}</div>
        <div><span class="badge" style="background:#cce5ff; color:#004085;">Completed</span> Doctor Confirmed on ${appointmentData.bookingDate}</div>
        <div><span class="badge" style="background:#d1ecf1; color:#0f5b6b;">Current</span> Appointment Upcoming on ${appointmentData.date}</div>
    `;
}

// ============================================
// SECTION 19: VIEW REPORT
// ============================================
function viewReport(reportName, doctor, date) {
    const details = `
📄 Report Details
━━━━━━━━━━━━━━━━━━━━━
📋 Report: ${reportName}
👨‍⚕️ Doctor: ${doctor}
📅 Date: ${date}
📌 Status: Available for viewing
━━━━━━━━━━━━━━━━━━━━━
📌 This is a demo report view. 
In production, the full report would be displayed here.
    `;
    alert(details);
    showToast(`Viewing ${reportName}`, 'success');
}

function downloadReport(filename) {
    showToast(`📥 Downloading ${filename}...`, 'warning');
    setTimeout(() => {
        showToast(`✅ ${filename} downloaded successfully!`, 'success');
    }, 1500);
}

// ============================================
// SECTION 20: CHANGE PASSWORD
// ============================================
function openPasswordModal() {
    document.getElementById('passwordModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePasswordModal() {
    document.getElementById('passwordModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPasswordChange').value = '';
    document.getElementById('confirmPasswordChange').value = '';
}

function changePassword() {
    const current = document.getElementById('currentPassword')?.value || '';
    const newPass = document.getElementById('newPasswordChange')?.value || '';
    const confirm = document.getElementById('confirmPasswordChange')?.value || '';
    
    if (!current) {
        showToast('Please enter current password', 'error');
        return;
    }
    if (newPass.length < 6) {
        showToast('New password must be at least 6 characters', 'error');
        return;
    }
    if (newPass !== confirm) {
        showToast('New passwords do not match', 'error');
        return;
    }
    
    showToast('✅ Password changed successfully! (Demo mode)', 'success');
    closePasswordModal();
}

document.getElementById('passwordModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closePasswordModal();
    }
});

// ============================================
// SECTION 21: SUPPORT MODAL
// ============================================
function openSupportModal() {
    document.getElementById('supportModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSupportModal() {
    document.getElementById('supportModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function selectSupport(element, type) {
    document.querySelectorAll('.support-option').forEach(opt => {
        opt.style.borderColor = '#e4f0f5';
        opt.style.background = 'transparent';
    });
    element.style.borderColor = '#0b6e7c';
    element.style.background = '#f0f8fc';
    
    const messages = {
        'Email': '📧 Support email opened: support@mediconnect.com\n\nWe\'ll respond within 24 hours.',
        'Phone': '📞 Calling support: +91 1800-123-4567\n\nAvailable 9AM - 9PM IST',
        'Live Chat': '💬 Live chat started! A support agent will join shortly.',
        'Ticket': '🎫 Support ticket created! ID: #TKT-' + Date.now().toString().slice(-6)
    };
    
    alert(messages[type]);
    closeSupportModal();
    showToast(`✅ ${type} support initiated!`, 'success');
}

document.getElementById('supportModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeSupportModal();
    }
});

// ============================================
// SECTION 22: FAQ MODAL
// ============================================
function openFaqModal() {
    document.getElementById('faqModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFaqModal() {
    document.getElementById('faqModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleFaq(element) {
    element.classList.toggle('active');
}

document.getElementById('faqModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeFaqModal();
    }
});

// ============================================
// SECTION 23: REPORT ISSUE MODAL
// ============================================
let selectedIssueType = null;

function openReportModal() {
    document.getElementById('reportModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    selectedIssueType = null;
    document.querySelectorAll('.report-type').forEach(el => el.classList.remove('selected'));
}

function closeReportModal() {
    document.getElementById('reportModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('issueDescription').value = '';
    document.getElementById('issueFile').value = '';
    selectedIssueType = null;
    document.querySelectorAll('.report-type').forEach(el => el.classList.remove('selected'));
}

function selectIssueType(element, type) {
    document.querySelectorAll('.report-type').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedIssueType = type;
}

function submitReport() {
    if (!selectedIssueType) {
        showToast('Please select an issue type', 'error');
        return;
    }
    
    const description = document.getElementById('issueDescription')?.value.trim() || '';
    if (!description) {
        showToast('Please describe the issue', 'error');
        return;
    }
    
    const fileInput = document.getElementById('issueFile');
    let fileInfo = '';
    if (fileInput && fileInput.files.length > 0) {
        fileInfo = ` (Attached: ${fileInput.files[0].name})`;
    }
    
    closeReportModal();
    showToast(`✅ Issue reported: ${selectedIssueType}${fileInfo}`, 'success');
    setTimeout(() => {
        showToast('📋 Support team has been notified. Tracking ID: #ISS-' + Date.now().toString().slice(-6), 'success');
    }, 1000);
}

document.getElementById('reportModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeReportModal();
    }
});

// ============================================
// SECTION 24: ACCESSIBILITY MODAL
// ============================================
function openAccessibilityModal() {
    document.getElementById('accessibilityModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAccessibilityModal() {
    document.getElementById('accessibilityModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function saveAccessibilityPrefs() {
    const fontSize = document.getElementById('accessibilityFontSize')?.value || 'medium';
    const colorScheme = document.getElementById('accessibilityColorScheme')?.value || 'default';
    
    const sizeMap = { small: '12px', medium: '14px', large: '16px', xlarge: '18px' };
    document.body.style.fontSize = sizeMap[fontSize] || '14px';
    
    if (colorScheme === 'high') {
        document.body.classList.add('high-contrast');
        const toggle = document.getElementById('contrastToggle');
        if (toggle) { toggle.className = 'fas fa-toggle-on'; toggle.style.color = '#0b6e7c'; }
    } else {
        document.body.classList.remove('high-contrast');
        const toggle = document.getElementById('contrastToggle');
        if (toggle) { toggle.className = 'fas fa-toggle-off'; toggle.style.color = '#b3c8d0'; }
    }
    
    closeAccessibilityModal();
    showToast('✅ Accessibility preferences saved!', 'success');
}

document.getElementById('accessibilityModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeAccessibilityModal();
    }
});

// ============================================
// SECTION 25: SETTINGS FUNCTIONS
// ============================================
function toggleContrast(event) {
    event.stopPropagation();
    const toggle = document.getElementById('contrastToggle');
    
    if (toggle.classList.contains('fa-toggle-off')) {
        toggle.className = 'fas fa-toggle-on';
        toggle.style.color = '#0b6e7c';
        document.body.classList.add('high-contrast');
        showToast('High contrast mode enabled', 'warning');
    } else {
        toggle.className = 'fas fa-toggle-off';
        toggle.style.color = '#b3c8d0';
        document.body.classList.remove('high-contrast');
        showToast('High contrast mode disabled', 'success');
    }
}

function downloadMedicalRecords() {
    showToast('📁 Preparing medical records download...', 'warning');
    setTimeout(() => {
        showToast('✅ Medical records downloaded successfully! (All reports ZIP)', 'success');
    }, 1500);
}

function downloadAppointmentHistory() {
    showToast('📁 Preparing appointment history...', 'warning');
    setTimeout(() => {
        showToast('✅ Appointment history downloaded successfully!', 'success');
    }, 1500);
}

function managePrivacy() {
    const prefs = [
        'Share data with doctors only',
        'Share data with hospital staff',
        'Allow research use (anonymized)',
        'Data retention: 10 years'
    ];
    
    let msg = 'Current Privacy Settings:\n\n';
    prefs.forEach((p, i) => {
        msg += `${i+1}. ✅ ${p}\n`;
    });
    msg += '\nTo change preferences, visit Privacy Settings.';
    
    alert(msg);
    showToast('Privacy preferences viewed', 'success');
}

// ============================================
// SECTION 26: MEDICAL RECORDS
// ============================================
function filterRecords() {
    const search = document.getElementById('recordSearch')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || 'all';
    
    document.querySelectorAll('.record-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        const itemCategory = item.dataset.category;
        
        let show = true;
        if (search && !text.includes(search)) show = false;
        if (category !== 'all' && itemCategory !== category) show = false;
        
        item.style.display = show ? 'flex' : 'none';
    });
}

// ============================================
// SECTION 27: NOTIFICATIONS
// ============================================
function markAsRead(element) {
    const item = element.closest('.notif-item');
    if (item) {
        item.dataset.read = 'true';
        element.textContent = 'Read';
        element.style.background = '#dff0f5';
        element.style.color = '#0b6e7c';
        showToast('Marked as read', 'success');
        
        updateNotificationCount();
    }
}

function markAllRead() {
    document.querySelectorAll('.notif-item[data-read="false"] .badge').forEach(badge => {
        markAsRead(badge);
    });
    showToast('All notifications marked as read', 'success');
}

function filterNotifications() {
    const filter = document.getElementById('notificationFilter')?.value || 'all';
    document.querySelectorAll('.notif-item').forEach(item => {
        const category = item.dataset.category;
        item.style.display = (filter === 'all' || category === filter) ? 'flex' : 'none';
    });
}

// ============================================
// SECTION 28: APPOINTMENT HISTORY
// ============================================
function filterHistory() {
    const search = document.getElementById('historySearch')?.value.toLowerCase() || '';
    const status = document.getElementById('historyStatusFilter')?.value || 'all';
    
    document.querySelectorAll('#historyList .appointment-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        const cardStatus = card.dataset.status;
        
        let show = true;
        if (search && !text.includes(search)) show = false;
        if (status !== 'all' && cardStatus !== status) show = false;
        
        card.style.display = show ? 'flex' : 'none';
    });
}

// ============================================
// SECTION 29: KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const pages = ['dashboard', 'profile', 'book', 'records', 'notifications', 'history', 'tracking', 'ratings', 'settings'];
        const index = parseInt(e.key) - 1;
        if (pages[index]) switchPage(pages[index]);
    }
    if (e.key === 'Escape') {
        hideToast();
        closePaymentModal();
        closePasswordModal();
        closeSupportModal();
        closeFaqModal();
        closeReportModal();
        closeAccessibilityModal();
        closeCancelModal();
        closeRatingModal();
        closeLoginModal();
        closeRegisterModal();
        closeForgotModal();
        closeDownloadModal();
    }
});

// ============================================
// SECTION 30: INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ MediConnect Patient Dashboard initialized successfully');
    console.log('📌 Keyboard shortcuts: Ctrl+1-8 for navigation, Escape to close modals');
    console.log('📌 Demo Login: demo@mediconnect.com / demo123');
    
    document.getElementById('mainDashboard').style.display = 'none';
    
    setTimeout(() => {
        openLoginModal();
        document.getElementById('loginEmail').value = 'demo@mediconnect.com';
        document.getElementById('loginPassword').value = 'demo123';
        showToast('Use demo@mediconnect.com / demo123 to login', 'info');
    }, 500);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    maxDate.setHours(0, 0, 0, 0);
    
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        dateInput.min = today.toISOString().split('T')[0];
        dateInput.max = maxDate.toISOString().split('T')[0];
    }
    
    setTimeout(() => {
        updateDoctorSummary();
    }, 100);
    
    updateNotificationCount();
    
    document.querySelectorAll('.nav-tab[data-page]').forEach(tab => {
        tab.addEventListener('click', function(e) {
            switchPage(this.dataset.page);
        });
    });
    
    document.getElementById('appointmentDate')?.addEventListener('change', function() {
        const selectedDateVal = this.value;
        if (!selectedDateVal) {
            document.getElementById('appointmentTime').innerHTML = '<option value="">Please select a date first</option>';
            document.getElementById('appointmentTime').disabled = true;
            document.getElementById('doctorSlotsContainer').innerHTML = '<span style="color:#3f7484; font-size:13px;">Please select a date</span>';
            return;
        }
        
        const selectedDateObj = new Date(selectedDateVal + 'T00:00:00');
        selectedDateObj.setHours(0, 0, 0, 0);
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        const maxDateObj = new Date();
        maxDateObj.setDate(maxDateObj.getDate() + 30);
        maxDateObj.setHours(0, 0, 0, 0);
        
        if (selectedDateObj < todayDate) {
            showToast('Cannot select past dates', 'error');
            this.value = '';
            document.getElementById('appointmentTime').innerHTML = '<option value="">Please select a date first</option>';
            document.getElementById('appointmentTime').disabled = true;
            document.getElementById('doctorSlotsContainer').innerHTML = '<span style="color:#3f7484; font-size:13px;">Please select a date</span>';
            return;
        }
        
        if (selectedDateObj > maxDateObj) {
            showToast('Cannot select dates beyond 30 days', 'error');
            this.value = '';
            document.getElementById('appointmentTime').innerHTML = '<option value="">Please select a date first</option>';
            document.getElementById('appointmentTime').disabled = true;
            document.getElementById('doctorSlotsContainer').innerHTML = '<span style="color:#3f7484; font-size:13px;">Please select a date</span>';
            return;
        }
        
        document.querySelectorAll('.calendar-day').forEach(el => {
            el.classList.remove('selected');
            if (el.dataset.date === selectedDateVal) {
                el.classList.add('selected');
                selectedDate = selectedDateVal;
                updateSlotsForSelectedDate();
            }
        });
    });
    
    console.log('🎯 All features are ready!');
});