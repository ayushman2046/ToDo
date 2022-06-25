function AddNote(){
    var taskname = document.getElementById('taskname').value
    var finaldiv = document.getElementById('finaldiv')

    var newtodo = document.createElement('div')
    var todoname = document.createElement('li')
    todoname.innerHTML = taskname
    var deletebtn = document.createElement('i')
    //<i class="fa-solid fa-trash-can"></i>
    deletebtn.classList.add('fa-solid')
    deletebtn.classList.add('fa-trash-can')

    newtodo.appendChild(todoname)
    newtodo.appendChild(deletebtn)

    finaldiv.appendChild(newtodo)
    document.getElementById('taskname').value = ""
}

var finaldiv = document.getElementById('finaldiv')
finaldiv.addEventListener("click",deleteitem)

function deleteitem(e)
{
    const element = e.target
    if(element.classList[0]==="fa-solid"){
        element.parentElement.remove()
    }
}