var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');


form.addEventListener('submit', additem);

itemList.addEventListener('click',removeitem);

filter.addEventListener('keyup', filterItems);


function additem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));

    var del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';

    del.appendChild(document.createTextNode('X'));

    li.appendChild(del);

    itemList.appendChild(li);
}


function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });



}