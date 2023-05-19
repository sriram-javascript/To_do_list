let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let input_Field=document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    
    
    
    var paragraph =document.createElement('p');
    paragraph.innerText=input_Field.value;
    toDoContainer.appendChild(paragraph);
    input_Field.value="";
    paragraph.addEventListener('click',function(){

        paragraph.style.textDecoration="line-through";

    })

    paragraph.addEventListener('dblclick',function(){

        toDoContainer.removeChild(paragraph);

    })
   

})




   
