

function appendli() {
    let input = document.getElementById("input-box") ;
    let div =  document.createElement("div") ;
    let span =document.createElement("span") ;
    let label = document.createElement("label");
    let li = document.createElement("li");
    let liList =document.getElementById("ul-container");
    span.classList.add("check");
    div.append(span);
    label.innerHTML = input.value ;
    div.appendChild(label);
    div.classList.add("task");
    li.appendChild(div);
    span.classList.add("cross");
  /*  li.appendChild(span);
    liList.appendChild(li); */
    console.log(div)
    input.value="" ;
}
function del() {

}


let input =document.getElementById("input-box").addEventListener("keydown" , function(event){
    if(event.keyCode==13) {
        appendli();
    }
})

function div(){
   
let span = document.createElement("span");
let label = document.createElement("label") ;
div.appendChild(span);
div.appendChild(label);
 return div ;
}
