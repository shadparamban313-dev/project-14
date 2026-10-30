var form = document.getElementById("form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value;

        localStorage.setItem("email", email);
        window.location.href = "welcome.html";

       

    });

}

// Check whether the display element exists
var display = document.getElementById("display");

if (display) {

    let email = localStorage.getItem("email");

    display.innerHTML = "Email :"+email;
    
}


var form = document.getElementById("form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let password = document.getElementById("password").value;

        localStorage.setItem("password", password);
        window.location.href = "welcome.html";

       

    });

}

// Check whether the display element exists
var displayemail = document.getElementById("displayemail");

if (displayemail) {

    let password = localStorage.getItem("password");

    displayemail.innerHTML = "Password :"+password;
    
}




