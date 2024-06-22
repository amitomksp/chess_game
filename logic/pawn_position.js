const pownpositionblack=[];
const pownpositionwhite=[];
for(const i of filesnamearray){ //filesname from mapping.js
    pownpositionblack.push(document.getElementById(i+2))
}
for(const j of filesnamearray){
    pownpositionwhite.push(document.getElementById(j+7))
}
for(const k of pownpositionblack){
    k.addEventListener("click",()=>{
        const id =k.getAttribute("id");
        console.log(id);
        let change=parseInt(id[1]);
        const steps=[];
        for(let k=0;k<2;k++){
            change++;
            steps.push(document.getElementById(id[0]+change))
        }
           console.log(steps);
    })
}
for(const k of pownpositionwhite){
    k.addEventListener("click",()=>{
        const id =k.getAttribute("id");
        console.log(id);
        let change=parseInt(id[1]);
        const steps=[];
        for(let k=0;k<2;k++){
            change--;
            steps.push(document.getElementById(id[0]+change))
        }
           console.log(steps);
           hightlightCircle(stepsSquare);
         
    })
}

// function to add highlighting

const hightlightCircle = function ([first, second]) {
    let circle = document.createElement("div");
    let circle2 = document.createElement("div");
    circle.setAttribute("class", "circle");
    circle2.setAttribute("class", "circle");
    first.appendChild(circle);
    second.appendChild(circle2);
    console.log(first, second);
    first.classList.add("flex");
    second.classList.add("flex");
  };