document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })

  const popup = document.querySelector('.alert');
  const close = document.querySelector('.button');
const greeting_card = document.querySelector('.card');

  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block";

    }, 4000)
    setTimeout(function(){
      greeting_card.style.display = "flex";
      greeting_card.style.transitionDuration = "5000";
      
    },1500)
  }

  close.addEventListener('click', () => {
    popup.style.display = "none";    
  })

// ___________________________________________________________

