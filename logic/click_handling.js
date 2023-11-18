const allsquare=document.getElementsByClassName("square");
for(const i of allsquare){
   i.addEventListener("click",()=>{
    const idofelement=i.getAttribute("id");
    const innerhtml=document.getElementById(idofelement).innerHTML;
    if(innerhtml.includes("black") || innerhtml.includes("white")){
        document.getElementById(idofelement).style.backgroundColor="yellow";
    }
   })
}