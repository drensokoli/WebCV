document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })

  const popup = document.querySelector('.alert');
  const close = document.querySelector('.button');

  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block";

    }, 3000)
  }

  close.addEventListener('click', () => {
    popup.style.display = "none";    
  })