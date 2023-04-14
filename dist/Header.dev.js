"use strict";

//* Navigation bar scroll response. 
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) {
    document.getElementById("headerScroll").className = "header-top";
  } else {
    document.getElementById("headerScroll").className = "header-scroll";
  }
} //* Search penal 
//! (Under Working : cancel btn is not working!) 


var searchIcon = document.getElementById("searchIcon");
var searchPenal = document.getElementById("searchPenal"); // const cancelBtn = document.getElementById("cancelBtn")

searchIcon.addEventListener("click", function () {
  if (searchPenal.className === "search-penal") {
    searchPenal.className += " search-penal-response";
  } else {
    searchPenal.className = "search-penal";
  }
}); //* li hover drop down

function shop() {
  document.querySelector("#shop").classList.toggle("show");
}

function blog() {
  document.querySelector("#blog").classList.toggle("show");
}

function pages() {
  document.querySelector("#pages").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".drop")) {
    var down = document.getElementsByClassName("down");
    var i;

    for (i = 0; i < down.length; i++) {
      var dropdown = down[i];

      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
};