

document.addEventListener("DOMContentLoaded",function(){


   /* $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});
    
    */
    

//get a reference to our elements in js.
var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

//click event listener to the hamburger button
ham.addEventListener("click", attivaMenu)
//this function check if the menu contains the showMenu class,
// if there is showMenu class than we remove it
//or else we add it
function attivaMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

//the var menuLinks get all the links with class menuLink
var menuLinks = document.querySelectorAll(".menuLink");

//iterate with forEach all the link so they can get the 
//click event listener the call "attivaMenu" function
menuLinks.forEach(
function (menuLink) {
    menuLink.addEventListener("click", attivaMenu)
  }
)





//rsvp



document.getElementById("sub").onclick=function(e){
    e.preventDefault();
    
    var find =document.getElementById("find");
    var fname =document.getElementById('fname').value;



var name = fname.length;
console.log(name)

if ( name > 1 ){

  document.getElementById("pagina").style.transform="translateY(0)";
  document.getElementById("conct").innerHTML="Hello " + fname; 
}

document.getElementById('continue').onclick=function(){
 document.getElementById('pagina').style.display="none";
 document.getElementById('pagina_2').style.display="block";
}

}//preventDefault





});//ready
