/* ==========================
   Notification Toggle
========================== */

const notificationBtn =
document.getElementById("notificationBtn");

const notificationDropdown =
document.getElementById("notificationDropdown");

notificationBtn.addEventListener("click", function(){

    profileDropdown.style.display = "none";

    if(notificationDropdown.style.display === "block"){

        notificationDropdown.style.display = "none";

    }else{

        notificationDropdown.style.display = "block";

    }

});

/* ==========================
   Close Notification
========================== */

document.addEventListener("click", function(e){

    if(
        !notificationBtn.contains(e.target) &&
        !notificationDropdown.contains(e.target)
    ){

        notificationDropdown.style.display = "none";

    }

});

/* ==========================
   Profile Dropdown
========================== */

const profileBtn =
document.getElementById("profileBtn");

const profileDropdown =
document.getElementById("profileDropdown");

profileBtn.addEventListener("click", function(e){

    e.stopPropagation();

    if(profileDropdown.style.display === "block"){

        profileDropdown.style.display = "none";

    }else{

        profileDropdown.style.display = "block";

        // Close notification if open
        notificationDropdown.style.display = "none";

    }

});

document.addEventListener("click", function(e){

    if(
        !profileBtn.contains(e.target) &&
        !profileDropdown.contains(e.target)
    ){

        profileDropdown.style.display = "none";

    }

});


/* ==========================
   Profile Menu Navigation
========================== */

const myProfileBtn =
document.getElementById("myProfileBtn");

const changePasswordBtn =
document.getElementById("changePasswordBtn");

const settingsProfileBtn =
document.getElementById("settingsProfileBtn");

myProfileBtn.addEventListener("click", function(e){

    e.preventDefault();

    showPage("settings");

    profileDropdown.style.display = "none";

    setActive(settingsBtn);

});

settingsProfileBtn.addEventListener("click", function(e){

    e.preventDefault();

    showPage("settings");

    profileDropdown.style.display = "none";

    setActive(settingsBtn);

});

changePasswordBtn.addEventListener("click", function(e){

    e.preventDefault();

    showPage("settings");

    profileDropdown.style.display = "none";

    setActive(settingsBtn);

    

});