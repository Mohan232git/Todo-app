

function appendli() {
    let inputValue =document.getElementById("input-box") ;
    let li = document.createElement("li");
    let ul = document.getElementById("ul-container")  ;
    li.appendChild(document.createTextNode(inputValue.value)) ;
    ul.appendChild(li) ;
    inputValue.value="" ;
}
function del() {

}


let input =document.getElementById("input-box").addEventListener("keydown" , function(event){
    if(event.keyCode==13) {
        appendli();
    }
})

