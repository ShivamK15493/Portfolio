let Menu = document.getElementById("menu");
let Sidebar = document.getElementById("sidemenu");
let Crossbar = document.getElementById("crossBar");

Menu.addEventListener("click", function(){

     Sidebar.style.display="block";
     Sidebar.classList.add("hide");

});

Crossbar.addEventListener("click",function(){

    Sidebar.style.display="none";
})
