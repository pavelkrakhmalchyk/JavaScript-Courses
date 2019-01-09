var userName = prompt("What is your name?", "Unnamed");
var fixedName = "";

if (/\d/.test(userName)){
    userName = userName.toLowerCase();
    for (i = 0; i < userName.length; i++){
        if (i%2 != 0){
            fixedName += userName[i].toUpperCase();
        }
        else{
            fixedName += userName[i];
        }
    }
}
else{
    fixedName = userName.split("").reverse().join("");
}

var container = document.getElementById("container")
container.innerHTML = "Changed name: " + fixedName;


