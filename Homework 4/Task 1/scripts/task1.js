var newElement = document.createElement("div");

var userName = prompt("What is your name?", "Unnamed");

if (/\d/.test(userName)){
    for (i = 0; i < userName.length; i+=2){
        userName[i].toUpperCase();
    }
    newElement.innerHTML += userName;
}
else{
    console.log("NO!");
}

var container = document.getElementById("container");
container.appendChild(newElement);

