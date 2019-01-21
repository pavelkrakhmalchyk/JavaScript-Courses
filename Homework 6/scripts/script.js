var url = 'http://localhost:3000/posts/';

function Crud(id, userId, title, body){
    this.data;
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
}

crud = new Crud();

Crud.prototype.getAll = function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            this.data =  JSON.parse(xhr.responseText);
            createTable(this.data);
        }          
    }   
} 

Crud.prototype.create = function() {
    var xhr = new XMLHttpRequest();
    this.data = createRecord();

    var json = JSON.stringify(this.data);

    xhr.open('POST', url + this.data.id);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}
     

Crud.prototype.delete = function(button) {
    this.data = button.parentNode.parentNode.cells[0].textContent;
    var xhr = new XMLHttpRequest();

    xhr.open('DELETE', url + this.data);
    xhr.send();
}

Crud.prototype.put = function () {
    var xhr = new XMLHttpRequest();
    var record = createRecord();

    var json = JSON.stringify(record);

    xhr.open('PUT', url + record.id);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}


function createTable(data) {
    var table = document.createElement('table');
    table.id = 'posts';

    var tr = document.createElement('tr');
    tr.classList.add('header');

    var id = document.createElement('td');
    var userId = document.createElement('td');
    var title = document.createElement('td');
    var body = document.createElement('td');
    var buttons = document.createElement('td');
    buttons.setAttribute('colspan', '2');

    id.textContent = 'ID';
    userId.textContent = 'User ID';
    title.textContent = 'Title';
    body.textContent = 'Body';

    tr.appendChild(id);
    tr.appendChild(userId);
    tr.appendChild(title);
    tr.appendChild(body);
    tr.appendChild(buttons);

    table.appendChild(tr);

    for (var element of data) {
        var tr = document.createElement('tr');

        var id = document.createElement('td');
        var userId = document.createElement('td');
        var title = document.createElement('td');
        var body = document.createElement('td');

        var editButtonTd = document.createElement('td');
        var deleteButtonTd = document.createElement('td');

        var editButton = document.createElement('button');
        editButton.setAttribute('onclick', 'showAddEditForm(this)');
        editButton.classList.add('editButton');
        editButton.textContent = 'Edit';

        var deleteButton = document.createElement('button');
        deleteButton.setAttribute('onclick', 'crud.delete(this)');
        deleteButton.classList.add('deleteButton');
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

    document.body.appendChild(table);
}

function showAddEditForm(button) {
    if (button.classList.contains('editButton')) {
        tr = button.parentNode.parentNode;

        document.getElementById('modalWindowTitle').textContent = 'Edit record';

        document.getElementById('id').value = tr.cells[0].textContent;
        document.getElementById('userId').value = tr.cells[1].textContent;
        document.getElementById('title').value = tr.cells[2].textContent;
        document.getElementById('body').value = tr.cells[3].textContent;

        var popupWindowButton = document.getElementById('popupWindowButton');
        popupWindowButton.setAttribute('onclick', 'crud.put()');
    } 
    else if (button.classList.contains('createButton')) {
        document.getElementById('modalWindowTitle').textContent = 'Add new record';

        document.getElementById('id').value = '';
        document.getElementById('userId').value = '';
        document.getElementById('title').value = '';
        document.getElementById('body').value = '';

        var popupWindowButton = document.getElementById('popupWindowButton');
        popupWindowButton.setAttribute('onclick', 'crud.create()');
    }

    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = 'none';
    };

    var modalWin = document.getElementById('popupWindow');
    modalWin.style.display = 'block';
}

function createRecord() {
    var record = {};
    record.id = document.getElementById('id').value;
    record.userId = document.getElementById('userId').value;
    record.title = document.getElementById('title').value;
    record.body = document.getElementById('body').value;
    return record;
}

crud.getAll();