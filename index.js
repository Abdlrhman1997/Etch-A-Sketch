let divContainer = document.querySelector('#container');
let gridSquare;

function createGrid(){
    let wH = 500/16;
    for(let i=0; i<(16*16); i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "red";
        newDiv.style.height = `${wH}px`;
        newDiv.style.width = `${wH}px`;
        newDiv.style.margin = "0px";
        
        
        
       

        newDiv.addEventListener('mouseover',()=> newDiv.style.backgroundColor="blue");
        divContainer.append(newDiv);
    }
}

createGrid();