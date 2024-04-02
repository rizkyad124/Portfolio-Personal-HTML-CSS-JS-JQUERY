const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function() {
  $("#contactForm").validate({
      rules: {
          fullname: {
              required: true,
              maxlength: 20
          },
          email: {
              required: true,
              email: true,
              maxlength: 30
          },
          phone: {
              required: true,
              number: true,
              maxlength: 12
          },
          message: {
              required: true,
              maxlength: 50
          }
      },
      messages: {
          fullname: {
              required: "Nama lengkap harus diisi",
              maxlength: "Nama lengkap tidak boleh lebih dari 20 karakter"
          },
          email: {
              required: "Email harus diisi",
              email: "Format email tidak valid",
              maxlength: "Email tidak boleh lebih dari 30 karakter"
          },
          phone: {
              required: "Nomor handphone harus diisi",
              number: "Nomor handphone harus berupa angka",
              maxlength: "Nomor handphone tidak boleh lebih dari 12 digit"
          },
          message: {
              required: "Pesan harus diisi",
              maxlength: "Pesan tidak boleh lebih dari 50 karakter"
          }
      }
  });
});
