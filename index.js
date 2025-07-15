let heading = document.querySelector('h1');
heading.innerHTML = 'TODO WEB-APPLICATION';


let todoList = [{ todo :'',
date :'',

},
];

DisplayTodo ();

// add Button Javascript function // 

function Addtodo(){



let inputElement = document.querySelector('.same');

let todoitem = inputElement.value;
console.log(todoitem);

if(!todoitem){
  alert(`Input Value Can not be Empty`);

  return;
}

let inputDate = document.querySelector('#date');

let todoDate = inputDate.value;

if(!todoDate){
  alert(`Please Select a Date`);
    

  return;
}

todoList.push({todo:todoitem, date:todoDate});

inputElement.value = '';
inputDate.value = '';
DisplayTodo();

}





function DisplayTodo (){

todoList = todoList.filter(item => item.todo.trim() !== '' && item.date.trim() !== '');

DisplayList = document.querySelector('.list');

let newHtml = '';

for( let i = 0; i < todoList.length; i++){

  let {todo:todoitem, date:todoDate} = todoList[i];

  newHtml += `
  <span class ="span">${todoitem}</span>
    <span class = "span">${todoDate}</span>
    <button class ="delete-btn" onclick = "todoList.splice(${i},1); DisplayTodo();"> Delete </button>
  `;
}

DisplayList.innerHTML = newHtml;
}

// adding the function "delete btn only show when the input value is written otherwise it won't show" using gpt
// let Deletebtn = document.querySelector('.delete-btn');
window.addEventListener('load', () => {
  document.querySelector('.list').innerHTML = '';
});
