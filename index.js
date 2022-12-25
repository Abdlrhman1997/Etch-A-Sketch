let divContainer = document.querySelector('#container');
let numInput = document.querySelector('#number');
let divNumbers = document.querySelector('.numbers');
let submitBttn = document.querySelector('#bttn');
let numvalue = 16;

submitBttn.addEventListener('click',()=>{
     numvalue = Number(numInput.value);
     if( numvalue  >= 1 &&  numvalue <= 64){
        divNumbers.textContent = numInput.value + "x" + numInput.value;
        removeDivs()
        createGrid();
     }
     else{
        divNumbers.style.fontSize = "24px";
        divNumbers.style.color = "red";
        divNumbers.textContent ="please enter a number from 1 to 64 !";
     }
    
    });

function createGrid(){
    let wH = 500/numvalue;
    for(let i=0; i<(numvalue**2); i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "red";
        newDiv.style.height = `${wH}px`;
        newDiv.style.width = `${wH}px`;
        newDiv.style.margin = "0px";
        newDiv.className = "squareDiv";
        
        
        newDiv.addEventListener('mouseover',()=> newDiv.style.backgroundColor="blue");
        divContainer.append(newDiv);
    }
}

function removeDivs(){
    let squareDivs = document.querySelectorAll('.squareDiv');
    for(let i=0; i<squareDivs.length; i++){
        squareDivs[i].remove();
    }
}

createGrid();





