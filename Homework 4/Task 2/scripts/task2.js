function toTask1() {
    window.open("../Task 1/index.html", "_self");
}

function insertFlexBox() {
    document.getElementsByTagName("body")[0].innerHTML = 
    "<div class='main-container'>" + 
        "<div class='box box1'></div>" +
        "<div class='box box2'></div>" + 
        "<div class='box box3'></div>" +
        "<div class='box box4'></div>" +
        "<div class='box box5'></div>" +
        "<div class='box box6'></div>" +
    "</div>";
}