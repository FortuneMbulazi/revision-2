document.getElementById(button).addEventListener('click', loadText);

var xhr = new XMLHttpRequest();
xhr.open('get', 'Ajax.txt', true);

xhr.onload = function(){
    if(this.status == 200){
        var users = JSON.parse(this.responseText);
        console.log(users);
    }
    xhr.send();
}