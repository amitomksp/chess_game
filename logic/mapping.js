const arrayoffiles=document.querySelectorAll(".files");
const filesnamearray=["a","b","c","d","e","f","g","h"];
let filenumber=0;
for(const i of arrayoffiles){
    let counter=1;
    for(const el of i.children){
        el.setAttribute("id",filesnamearray[filenumber]+counter);
        counter++;
    }
    filenumber++;
}