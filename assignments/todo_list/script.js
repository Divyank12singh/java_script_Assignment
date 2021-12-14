const completed_task=document.querySelectorAll('button')[0]
const pending_task=document.querySelectorAll('button')[1]

function completed_work(){
fetch("https://jsonplaceholder.typicode.com/todos")
.then(Response=>Response.json())
.then(json =>{
let li=`<tr><th>ITEM ID</th><th>TASK</th></tr>`
json.forEach(todo => {
    if (todo.completed==true){
        li+=`<tr><td>${todo.id} </td><td>${todo.title} </td></tr>`
    }
});
document.getElementById("table1").innerHTML = li;
})
}

function pending_work(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(Response=>Response.json())
    .then(json =>{
    let li=`<tr><th>ITEM ID</th><th>TASK</th></tr>`
    json.forEach(todo => {
        if (todo.completed==false){
            li+=`<tr><td>${todo.id} </td><td>${todo.title} </td></tr>`
        }
    });
    document.getElementById("table2").innerHTML = li;
    })
}
completed_task.addEventListener("click",completed_work)
pending_task.addEventListener("click",pending_work) 