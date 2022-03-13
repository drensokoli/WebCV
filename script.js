document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "drensokoli@gmail.com",
        Password : "babinani",
        To : 'ds51318@ubt-uni.net',
        From : document.getElementById("email").value,
        Subject : "New contact form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}