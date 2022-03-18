document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })

  const popup = document.querySelector('.alert');
  const close = document.querySelector('.button');

  
// ____________________ REVERSE SCROLL________________
  // $(window).on('scroll', function(){
  //   $(".card").css('bottom', $(window).scrollTop()*-0.8);
  // });


// ____________________ WELCOME CARD FUNCTION ALTERNATIVE________________
  // var greeting_card = document.getElementsByClassName("card");

  // function welcome(){
  //   document.getElementById("card").style.transform = "translateY(0)";
  // }
  // function start(){
  //   document.getElementById("card").style.transition = "3000";
  //   window.setTimeout(welcome, 1500)
  // }

  // function change(){

  //   greeting_card.classList.add("transformed-state");

  //   //   const elements = document.getElementById("card");
  //   //   elements.toggle("transformed-state");
  //   //    for (let element of elements) {
  //   //    element.classList.toggle("transformed-state");
  //   //  }
  // }

  var textTransform = document.getElementById("welcome");

  var card = document.getElementById("card");

  var scrollLink1 = document.querySelector(".para");
  var scrollLink2 = document.querySelector(".dyta");
  var scrollLink3 = document.querySelector(".treta");

  
  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block";

    }, 6000)

    setTimeout(function(){
      card.classList.toggle("invisible");
    }, 1000)

    setTimeout(function(){
      textTransform.classList.toggle("invisible");
    }, 2000)

    setTimeout(function(){
      scrollLink1.classList.remove("invisible");
    }, 2500)

    setTimeout(function(){
      scrollLink2.classList.remove("invisible");
    }, 2800)

    setTimeout(function(){
      scrollLink3.classList.remove("invisible");
    }, 3100)

    // change({

    // }, 1000)


    // start({

    // }, )

  }

  close.addEventListener('click', () => {
    popup.style.display = "none";    
  }) 
