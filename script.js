document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })

  const popup = document.querySelector('.alert');
  const close = document.querySelector('.button');
  const greeting_card = document.querySelector(".card");

  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block";

    }, 3000)
    setTimeout(function(){
      // document.getElementById("card").style.transitionDuration = "2000ms";
      greeting_card.style.display = "flex";      
    }, 1500)
  }

  close.addEventListener('click', () => {
    popup.style.display = "none";    
  })