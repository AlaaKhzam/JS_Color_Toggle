


const bodyElement = document.body;
const btnNav = document.querySelector(".btn-toggle"); 
const menuColors = document.querySelector(".menu-colors");
const menuColorsAll = document.querySelectorAll(".menu-colors ul li");



btnNav.addEventListener("click", function() {
    menuColors.classList.toggle("active");
});


menuColorsAll.forEach(color => {
    color.addEventListener('click', function () {
        let chosenColor = color.getAttribute("value");
        bodyElement.style.setProperty('background-color', chosenColor);
        menuColors.classList.toggle("active");
});
});




