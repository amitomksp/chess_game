const allsquare=document.getElementsByClassName("square");
const clickeditem=[];
for(const i of allsquare){
   i.addEventListener("click",()=>{
    const idofelement=i.getAttribute("id");
    const innerhtml=document.getElementById(idofelement).innerHTML;
    if(clickeditem.length>0){
        clickeditem[0].removeAttribute("style");
        clickeditem.length=0;
    }
    if(innerhtml.includes("black") || innerhtml.includes("white")){
        document.getElementById(idofelement).style.backgroundColor="yellow";
        clickeditem.push(i)
    }
   })
}