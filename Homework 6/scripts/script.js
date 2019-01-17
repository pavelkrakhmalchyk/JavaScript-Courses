createTable(getData());

function getData(){
    var url  = 'https://jsonplaceholder.typicode.com/posts';
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);

    xhr.send();

    if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText ); 
    } 
    else {
        var array = JSON.parse(xhr.responseText)
    }

    return array;
}

function createTable(array){
    var aNewBodyElement = document.createElement('body');
    var table = document.createElement('table');

    for (var element of array){
        var tr = document.createElement('tr');

        var id = document.createElement('td');
        var userId = document.createElement('td');
        var title = document.createElement('td');
        var body = document.createElement('td');

        var editButtonTd = document.createElement('td');
        var deleteButtonTd = document.createElement('td');

        var editButton = document.createElement('button');
        editButton.id = 'edit ' + element.id;
        editButton.textContent = 'Edit';

        var deleteButton = document.createElement('button');
        deleteButton.id = 'delete ' + element.id;
        deleteButton.textContent = 'Delete';

        editButtonTd.appendChild(editButton);
        deleteButtonTd.appendChild(deleteButton);

        id.textContent = element.id;
        userId.textContent = element.userId;
        title.textContent = element.title;
        body.textContent = element.body;

        tr.appendChild(id);
        tr.appendChild(userId);
        tr.appendChild(title);
        tr.appendChild(body);
        tr.appendChild(editButtonTd);
        tr.appendChild(deleteButtonTd);

        table.appendChild(tr);
    }

    aNewBodyElement.appendChild(table);
    document.body = aNewBodyElement;
}

