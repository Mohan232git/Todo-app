document.getElementById("input-box").addEventListener("keydown" , 
function(event){
    if(event.keyCode==13) {
        appendli();
     
    }
})


/* dark-mode & light mode */

let img = document.getElementById("switch");
img.addEventListener("click",function(e){
            let images = e.target ;
            let imagesClass = images.classList ;
        

            if(imagesClass=="sun") {
                img.classList.remove("sun")
                img.classList.add("moon");
                img.style.backgroundImage ="url('images/icon-moon.svg')" ;
                let body = document.getElementById('body') ;
                let inputBox =document.getElementById("input-box-div");
                let inputField = document.getElementById("input-box");
                let tasksdiv = document.getElementById('tasks');
                body.classList.add("dm-body");
                inputBox.classList.add("input-box-dm");
                inputField.classList.add("input-dm");
                tasksdiv.classList.add("dm-tasks");
                
                
            }
            else {
                img.classList.remove("moon");
                img.classList.add("sun") ;
                img.style.backgroundImage = "url('images/icon-sun.svg')" ;
                    
                let body = document.getElementById('body') ;
                let inputBox =document.getElementById("input-box-div");
                let inputField = document.getElementById("input-box");
                let tasksdiv = document.getElementById('tasks');
                body.classList.remove("dm-body");
                inputBox.classList.remove("input-box-dm");
                inputField.classList.remove("input-dm");
                tasksdiv.classList.remove("dm-tasks");
            
            }
        
})


/* add list items in ul-container */

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
    label.innerText = input.value ;
    label.id = "list-items" ;
    div.appendChild(label);
    div.classList.add("task");
    li.appendChild(div);
    span2.setAttribute("id","cross");
    li.appendChild(span2);
    li.classList.add("listItems");
    li.setAttribute("draggable",true);
    liList.appendChild(li);
    input.value="" ;
    document.getElementById('input-box').classList.remove("invalid");
    document.getElementById('input-box').placeholder = "Create Todo-task....."
    
    }


    /* for addding checked items */

        document.getElementById("ul-container").addEventListener("click",function(e){

    
        let div  = document.getElementsByClassName("task");
        /* let div  = document.getElementsByClassName("task");
        let list = document.getElementsByClassName("listItems");
        console.log(list);
        console.log(list); */
         if(e.target.tagName==='LABEL') {
            
            let lbl =  e.target ;
            let span = lbl.previousSibling;
            
            lbl.classList.toggle("checked-items");
             if(lbl.classList.contains("checked-items")){
                    span.classList.toggle("checked");
             }
             else{
               span.classList.remove("checked");
             }
            }   
    })

    let cross = document.querySelectorAll("#cross");
    cross.forEach(item => {
            
    item.addEventListener('click',function(e){
           e.target.parentNode.remove(); 
       })
   })


}
















