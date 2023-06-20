const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const success = document.getElementById("success");
const failure = document.getElementById("failure");
const button = document.getElementById("button");

//An event listener to the form being filled
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.fontSize = "2rem"
button.style.fontWeight = "400"


form.addEventListener("submit", theForm);

function theForm(e) {
    e.preventDefault();
    if(username.value === "" || email.value === "" || password.value === ""){
        failure.innerHTML = "Please enter your details!";
        failure.style.textAlign = 'center';
        failure.style.color = "red";
        failure.style.backgroundColor = "bisque";
        failure.style.fontSize = '2rem';
    }
    else if(password.value.length < 8){
        failure.innerText = "Password should be at least 8 characters!";
        failure.style.textAlign = 'center';
        failure.style.color = "orangered";
        failure.style.backgroundColor = "blue";
        failure.style.fontSize = '1.5rem';
    }
    else{
        const details = {
            username: username.value,
            email: email.value,
        }
        localStorage.setItem("baller", JSON.stringify(details));

        success.textContent = "You've successfully logged in!";
        success.style.textAlign = 'center';
        success.style.color = 'green';
        success.style.backgroundColor = 'orange';
        window.location.replace("/signinForm.html");
    }
}
