const inputAdd = document.querySelector(".addinput");
const addbtn = document.querySelector(".addbtn");
const list = document.querySelector(".listbox");
const filterbox = document.querySelector(".filter");



addbtn.addEventListener("click",add);
list.addEventListener("click",check);
filterbox.addEventListener("click",filter)


function add(event){
    event.preventDefault();
    const item= document.createElement("div");
    item.classList.add("item");
    const li = document.createElement("li");
    li.innerText=inputAdd.value;
    item.appendChild(li);
    const markbtn = document.createElement("button");
    markbtn.classList.add("btnmark");
    markbtn.innerText="MARK";
    item.appendChild(markbtn);

    const deletebtn = document.createElement("button");
    deletebtn.classList.add("btndlt");
    deletebtn.innerText="DELETE";
    item.appendChild(deletebtn);
    list.appendChild(item);
    inputAdd.value=""

}



function check(e){
    item = e.target;
    parent=item.parentElement;
    if(item.classList[0]==="btndlt"){
        parent.classList.add("rm");
        parent.addEventListener("transitionend",()=>{
            parent.remove();
        })
        
    }
    if(item.classList[0]==="btnmark"){
        parent.classList.toggle("en");
    }
    
}


function filter(e){
const items = list.childNodes;

items.forEach((item)=>{
    switch(e.target.value){
        case("all"):
        item.style.display ="flex";
        break;
        case("completed"):
            if(item.classList.contains("en")){
                item.style.display ="flex";
            }else{
                item.style.display ="none";
            }
        break;
        case("uncompleted"):
        if(!item.classList.contains("en")){
            item.style.display ="flex";
        }else{
            item.style.display ="none";
        }
        break;
    }
})


}