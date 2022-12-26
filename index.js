let divContainer = document.querySelector('#container');
let numInput = document.querySelector('#number');
let divNumbers = document.querySelector('.numbers');
let submitBttn = document.querySelector('#bttn');
let clearBttn = document.querySelector('#clear');
let numvalue = 16;

clearBttn.addEventListener('click',()=>{
    removeGrid()
    createGrid();
});

submitBttn.addEventListener('click',()=>{
     numvalue = Number(numInput.value);
     if( numvalue  >= 1 &&  numvalue <= 64){
        divNumbers.style.color = "black";
        divNumbers.style.marginLeft = "65px";
        divNumbers.textContent = numInput.value + "x" + numInput.value;
        removeGrid()
        createGrid();
     }
     else{
        divNumbers.style.fontSize = "20px";
        divNumbers.style.color = "green";
        divNumbers.style.margin = "0";
        divNumbers.textContent ="please enter a number from 1 to 64 !";
     }
    
    });

function createGrid(){
    let wH = 500/numvalue;
    for(let i=0; i<(numvalue**2); i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "white";
        newDiv.style.height = `${wH}px`;
        newDiv.style.width = `${wH}px`;
        newDiv.style.margin = "0px";
        newDiv.className = "squareDiv";
        
        
        newDiv.addEventListener('mouseover',()=> newDiv.style.backgroundColor="blue");
        divContainer.append(newDiv);
    }
}

function removeGrid(){
    let squareDivs = document.querySelectorAll('.squareDiv');
    for(let i=0; i<squareDivs.length; i++){
        squareDivs[i].remove();
    }
}

createGrid();





