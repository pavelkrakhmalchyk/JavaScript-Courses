var messagesContainer = document.getElementsByClassName("messages-container")[0];
var sendersContainer = document.getElementsByClassName("senders-container")[0];

var messageHistory = generateMessageHistory(9);

function generateNewSender(id, senderNameText) {
    var image = document.createElement("img");
    image.src = "../Task 2/images/sender-photo.jpg";

    var senderPhoto = document.createElement("div");
    senderPhoto.classList.add("sender-photo");
    senderPhoto.appendChild(image);

    var senderName = document.createElement("div");
    senderName.classList.add("sender-name");
    senderName.textContent = senderNameText;

    var sender = document.createElement("div");
    sender.classList.add("sender");
    sender.appendChild(senderPhoto);
    sender.appendChild(senderName);

    sender.setAttribute("id", id);

    sender.onclick = onSenderClick;

    return sender;
}


function resetSelectedSenderColor() {
    var senders = document.getElementsByClassName("sender");

    for (var i = 0; i < senders.length; i++) {
        if (senders[i].style.background == "rgba(37, 104, 131, 0.5)") {
            senders[i].removeAttribute("style");
        }
    }
}


function onSenderClick() {
    var senderId = this.getAttribute("id");
    var sender = document.getElementById(senderId);

    resetSelectedSenderColor();
    sender.style.background = "rgba(37, 104, 131, 0.5)";

    var senderNameText = sender.getElementsByClassName("sender-name")[0];
    var messagesContainerHeader = generateMessagesContainerHeader(senderNameText);

    addContentToMessagesContainer(messageHistory.get(this), messagesContainerHeader);

    var messagesContainerContent = document.getElementsByClassName("messages-container-content")[0];
    messagesContainerContent.scrollTop = messagesContainerContent.scrollHeight;
}


function generateMessage(isOwnMessage, isWithImage, textMessage) {
    message = document.createElement("div");
    if (isOwnMessage == true) {
        message.classList.add("own-message");
    } else {
        message.classList.add("sender-message");
    }

    messageText = document.createElement("div");
    if (isWithImage == true) {
        messageText.classList.add("message-text");
    } else {
        messageText.classList.add("message-text-without-image");
    }

    messageText.textContent = textMessage;

    if (isWithImage == true) {
        var messagePhoto = document.createElement("div");
        messagePhoto.classList.add("message-photo");
        var image = document.createElement("img");

        if (isOwnMessage == true) {
            image.src = "../Task 2/images/own-photo.jpg";
            messagePhoto.appendChild(image);

            message.appendChild(messageText);
            message.appendChild(messagePhoto);
        } else {
            image.src = "../Task 2/images/sender-photo.jpg";
            messagePhoto.appendChild(image);

            message.appendChild(messagePhoto);
            message.appendChild(messageText);
        }
    } else {
        message.appendChild(messageText);
    }
    return message;
}


function addSenderToSendersContainer(sender) {
    sendersContainer.appendChild(sender);
}


function generateArrayOfMessages(count) {

    var messagesArray = [];
    var message;
    var messageText;

    for (i = 0; i < count; i++) {
        messageText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eligendi suscipit. Quia distinctio est, delectus ipsum dolorem non vitae doloribus illo a nostrum eum nam quod deserunt debitis nihil? Exercitationem.";
        message = generateMessage(true, false, messageText);
        messagesArray.push(message);

        for (j = 0; j < count; j++) {
            messageText = "Hello";
            message = generateMessage(true, false, messageText);
            messagesArray.push(message);
        }

        messageText = "How are you?";
        message = generateMessage(true, true, messageText);
        messagesArray.push(message);

        for (j = 0; j < count; j++) {
            messageText = "Hello";
            message = generateMessage(false, false, messageText);
            messagesArray.push(message);
        }

        messageText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum, tempore praesentium consequuntur minima in dolorem quasi laboriosam iste recusandae porro incidunt animi corporis et aut minus quis nam aperiam.";
        message = generateMessage(false, false, messageText);
        messagesArray.push(message);

        messageText = "How are you?";
        message = generateMessage(false, true, messageText);
        messagesArray.push(message);
    }

    return messagesArray;
}


function addContentToMessagesContainer(messagesArray, messagesContainerHeader) {
    while (messagesContainer.firstChild) {
        messagesContainer.removeChild(messagesContainer.firstChild);
    }

    var messagesContainerContent = document.createElement("div");
    messagesContainerContent.classList.add("messages-container-content");

    for (var i = 0; i < messagesArray.length; i++) {
        messagesContainerContent.appendChild(messagesArray[i]);
    }

    messagesContainer.appendChild(messagesContainerHeader);
    messagesContainer.appendChild(messagesContainerContent);
}


function generateMessagesContainerHeader(senderNameText) {
    var messageContainerHeader = document.createElement("div");
    messageContainerHeader.classList.add("messages-container-header");

    var senderPhoto = document.createElement("div");
    senderPhoto.classList.add("sender-photo");
    var image = document.createElement("img");
    image.src = "../Task 2/images/sender-photo.jpg";

    senderPhoto.appendChild(image);

    var senderName = document.createElement("div");
    senderName.classList.add("sender-name");
    senderName.textContent = senderNameText.textContent;

    messageContainerHeader.appendChild(senderPhoto);
    messageContainerHeader.appendChild(senderName);

    return messageContainerHeader;
}


function generateMessageHistory(sendersCount) {
    var messagesHistory = new Map();

    for (var i = 0; i < sendersCount; i++) {
        var sender = generateNewSender(i, "Marlin" + (i + 1));
        var messagesWithThisSender = generateArrayOfMessages(i + 1);

        addSenderToSendersContainer(sender);

        messagesHistory.set(sender, messagesWithThisSender);
    }

    return messagesHistory;
}