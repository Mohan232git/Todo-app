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
        input.classList.add("invalid")
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
    
}
function del() {

}



let labels = document.getElementById("list-items")
console.log(labels)
labels.addEventListener(onclick , function(event){
        let span = document.getElementsByClassName("check");
        console.log(span)
})

let spanCross = document.getElementsByClassName("cross");
let liList =document.getElementById("ul-container");
let listItem = document.getElementsByClassName("listItems")
console.log(listItem);
liList.addEventListener(onclick,function(event){
     if(event.target.tagName==" ") {
        console.log(event.target);

     }
})


   /* document.getElementsByClassName("task").addEventListener(onclick,
    function(e){
        console.log('cliked')
    })*/

