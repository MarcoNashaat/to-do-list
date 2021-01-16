//getting elements
let text=document.getElementById("input");
let button=document.getElementById("button");
let todolist=document.getElementById("tasks");

//functions
button.addEventListener("click",function(){
    if (text.value="") {warn_msg()
        
    } else {
    let paragraph=document.createElement("p");
    paragraph.innerText = text.Value;
    paragraph.classList.add("list");
    todolist.appendChild(paragraph);
    text.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener("dblclick",function(){
        todolist.removeChild(paragraph);
    })     
    }
})

function warn_msg() {
    let warn_paragraph=document.createElement("p");
    let warning=document.createTextNode("please write something!");
    warn_paragraph.appendChild(warning);
    //warn_paragraph.value="please write something!";
    warn_paragraph.classList.add("warn");
    todolist.appendChild(warn_paragraph);

    
}