const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value+': '+emailInput.value));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

var outline = '';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var response = JSON.parse(xhttp.responseText);
       var people = response.people;
       console.log(people)

       for(var i = 0; i<people.length; i++){
           outline+= '<li>'+people[i].name+'</li>';
       }
       document.getElementById('users').innerHTML = outline;
    }
};
xhttp.open("GET", "retrieve.json", true);
xhttp.send();


