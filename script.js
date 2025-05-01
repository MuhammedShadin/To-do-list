//var button = document.getElementById("add");
var task = document.getElementById("things").value;
//button.onclick=handle;
function handle(){
    var task = document.getElementById("things").value;
    const list = document.getElementById('lists'); 
    const newListItem = document.createElement('div'); 
    newListItem.textContent = task; 
    list.appendChild(newListItem); 
    things.value='';
}

