const form = document.getElementById("form");
const username = document.getElementById("username");
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
    if(username.value === "" || password.value === ""){
        failure.innerHTML = "Please enter your login details!";
        failure.style.textAlign = 'center';
        failure.style.color = "red";
        failure.style.backgroundColor = "bisque";
        failure.style.fontSize = '2rem';
        failure.style.textAlign ='center';
    }
    else{
        const theUser = JSON.parse(localStorage.getItem("baller"));
    
    if(username.value !== theUser.username){
        failure.textContent = "Details are not correct. Please fill in the correct details!";
        failure.style.textAlign = 'center';
        failure.style.color = 'red';
        failure.style.backgroundColor = 'orange';
        failure.style.fontSize = '1.5rem';
    }
    else{
        success.innerText = "Congratulations! login successful.";
        success.style.textAlign = 'center';
        success.style.color = 'green';
        success.style.backgroundColor = 'white';
        success.style.fontSize = '2rem';
        window.location.replace("/exchangeRate.html");
    }
}

}
