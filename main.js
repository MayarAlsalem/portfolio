var menu=document.getElementById("menu-btn");
var links=document.getElementById("ul-links");
menu.onclick=()=>{
  
   
    if(links.classList.contains("d-block")){
       
        links.classList.remove("d-block")
        links.classList.add("d-none");
    }
    else{
        links.classList.add("d-block");
        links.classList.remove("d-none");
    }
    

}
var li =document.querySelectorAll(".links ul li a");
li.forEach((e)=>{
    e.onclick=()=>{
        links.classList.add("d-none");
        links.classList.remove("d-block");
    }
});