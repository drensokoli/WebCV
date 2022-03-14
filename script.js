document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })

  const popup = document.querySelector('.alert');
  const close = document.querySelector('.button');
  var greeting_card = document.getElementsByClassName("card");

  function welcome(){
    document.getElementById("card").style.transform = "translateY(0)";
  }
  function start(){
    document.getElementById("card").style.transition = "3000";
    window.setTimeout(welcome, 1500)
  }



  // function change(){

  //   greeting_card.classList.add("transformed-state");

  //   //   const elements = document.getElementById("card");
  //   //   elements.toggle("transformed-state");
  //   //    for (let element of elements) {
  //   //    element.classList.toggle("transformed-state");
  //   //  }
  // }

  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block";

    }, 3000)

    // change({

    // }, 1000)




    start({

    }, )

  }

  close.addEventListener('click', () => {
    popup.style.display = "none";    
  }) 