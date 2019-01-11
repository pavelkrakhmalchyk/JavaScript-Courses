function generateNewSender(){
    var image = document.createElement("img");
    image.src = "../Task 2/images/sender-photo.jpg";

    var senderPhoto = document.createElement("div");
    senderPhoto.classList.add("sender-photo");
    senderPhoto.appendChild(image);

    var senderName = document.createElement("div");
    senderName.classList.add("sender-name");
    senderName.textContent = "Marilyn Monroe";

    var sender = document.createElement("div");
    sender.classList.add("sender");
    sender.appendChild(senderPhoto);
    sender.appendChild(senderName);

    return sender;
}

function addSendersToSendersContainer(count){
    var sendersContainer = document.getElementsByClassName("senders-container")[0];

    for (i = 0; i < count; i++){
        var sender = generateNewSender();
        sendersContainer.appendChild(sender);
        }
}

addSendersToSendersContainer(10);

