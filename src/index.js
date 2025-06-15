document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    addGuest(e.target.guest_name.value);
})

})

function addGuest(guest){
    let li = document.createElement('li');
    li.textContent = `${guest} `;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Guest';
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click',handleDelete)
    console.log(li);
    document.querySelector('ol').appendChild(li)
}
function handleDelete(e){
    e.target.parentNode.remove();
}
