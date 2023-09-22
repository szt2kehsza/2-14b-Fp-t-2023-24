
function DarkModeChange(){
    var button = document.getElementById('DarkMode');
    var buttonText = button.textContent;
    console.log(buttonText);
    if (buttonText === "Világos mód"){
        document.documentElement.style.setProperty('--kartyakhatterszine', 'white');
        document.documentElement.style.setProperty('--szovegszine', 'black');
        document.documentElement.style.setProperty('--szovegszine', 'black');
        button.textContent = "Sötét mód"; 
        
    } else {
        document.documentElement.style.setProperty('--kartyakhatterszine', 'black');
        document.documentElement.style.setProperty('--szovegszine', 'white');
        button.textContent = "Világos mód"; 
    }
}


// document.addEventListener("DOMContentLoaded", function() {
//     const menuIcon = document.getElementById("menuIcon");
//     const menu = document.getElementById("menu");
//     const closeBtn = document.getElementById("closeBtn");

//     menuIcon.addEventListener("click", function() {
//         menu.style.display = "block";
//     });

//     closeBtn.addEventListener("click", function() {
//         menu.style.display = "none";
//     });
// });