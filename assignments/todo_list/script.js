const Todo_input=document.querySelector('input');
const Todo_button=document.querySelector('button')
const todo_list=document.querySelector('div.todos')
Todo_button.addEventListener('click',add_item);

var count=0;
function add_item(){
    var item=document.createElement('p');
    item.innerHTML=Todo_input.value;
    item.setAttribute('key',count);
    todo_list.append(item);
    count+=1
    Todo_input.value="";
    item.addEventListener('click',function(){
        todo_list.removeChild(item);
    })
    
}
