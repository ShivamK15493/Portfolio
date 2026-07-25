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

let str = "Shivam Kumar";
let para = document.querySelector(".shivam p");

function name() {
    let i = 0;
    let ans = "";
    setInterval(() => {

        ans = ans + str[i];
        para.innerText = ans;
        i++;

        if (i == str.length) {
            i=0;
            ans="";
        }
    },120);

}
name();
