document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })




// Get data
const nameInput = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate data

function validateForm(){

    clearMessages();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }

    if(surname.value.length < 1){
        errorNodes[1].innerText = "Last name cannot be blank";
        surname.classList.add("error-border");
    }

    if(!emailIsValid(email.value)){
        errorNodes[2].innerText = "Invalid email address";
        email.classList.add("error-border");
    }
}

function clearMessages(){
    for(let i = 0; i< errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern
}


