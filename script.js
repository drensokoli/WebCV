document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".alert").style.display  = "none";
  })

  const popup = document.querySelector('.alert');
  const close = document.querySelector('.button');

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

  // .classList.toggle("visible");

  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block";

    }, 4000)

    // change({

    // }, 1000)

    setTimeout(function(){
      card.classList.toggle("invisible");
    }, 1000)

    setTimeout(function(){
      textTransform.classList.toggle("invisible");
    }, 2000)

    // start({

    // }, )

  }

  close.addEventListener('click', () => {
    popup.style.display = "none";    
  }) 

  $(document).ready(function(){ 
    $(window).scroll(function(){
      $(".card").css("transform", "translate3d(0," + $(this).scrollTop()*2 + "px, 0)"); 
   }).scroll();
});  