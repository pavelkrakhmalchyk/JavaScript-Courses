for (i = 0; i < 9; i++){
    var card = genarateNewCard();
    document.getElementsByClassName("card-container")[0].appendChild(card);
};

function genarateNewCard(){
    var card = document.createElement("div");
    card.classList.add("card");

    var cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = "Международное сотрудничество во всех сферах";

    var cardText = document.createElement("div");
    cardText.classList.add("card-text");
    cardText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste, odit nihil officia soluta dicta quibusdam id quia impedit velit cumque ullam accusantium quidem facilis aut laudantium asperiores aspernatur ducimus.";

    var cardButton = document.createElement("div");
    cardButton.classList.add("card-button");

    var image = document.createElement("img");
    image.src = "../Task 1/images/1.png";

    var button = document.createElement("button");
    button.textContent = "Try";

    cardButton.appendChild(button);

    cardContent.appendChild(cardHeader);
    cardContent.appendChild(cardText);
    cardContent.appendChild(cardButton);

    card.appendChild(image);
    card.appendChild(cardContent);

    return card;
}

function toLeverxPage(){
    window.open("https://leverx.ru/", "_self");
}