document.getElementById("input-box").addEventListener("keydown" , function(event){
    if(event.keyCode==13) {
        appendli();
    }
})

function appendli() {
    let input = document.getElementById("input-box") ;
    let div =  document.createElement("div") ;
    let span =document.createElement("span") ;
    let label = document.createElement("label");
    let li = document.createElement("li");
    let liList =document.getElementById("ul-container");
    let span2 = document.createElement("span") ;

    if(input.value==""){

        document.getElementById('input-box').placeholder = "Enter the task!"
        input.classList.add("invalid");
        
    }
    else{
    
    span.classList.add("check");
    div.append(span);
    label.innerHTML = input.value ;
    label.id = "list-items" ;
    div.appendChild(label);
    div.classList.add("task");
    li.appendChild(div);
    span2.classList.add("cross");
    li.appendChild(span2);
    li.classList.add("listItems");
    liList.appendChild(li);
    input.value="" ;
    input.classList.remove("invalid");
    
    }

    console.log(liList)

    let items = document.getElementById("ul-container");
    items.addEventListener("click",function(e){
    if(e.target.tagName=="LABEL"){
        e.target.classList.toggle("checked-items");
    }
    else if(e.target.tagName=="SPAN"){
         console.log(e.target);
    }
})
    
}












