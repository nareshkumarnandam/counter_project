let displayCount = document.getElementById("display");
let counterDiv = document.getElementById("counter");
let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");
let resetBtn = document.getElementById("reset");

let idx = 0;

minusBtn.addEventListener("click" , minusCount);

function minusCount(){
    idx--;
    if(idx < 0){
        displayCount.style.color = "red";
    }
    if(idx === 0){
        displayCount.style.color = "black";
    }
    displayCount.innerText = `${idx}`;
}

plusBtn.addEventListener("click", plusCount);

function plusCount(){
    idx++;
    if(idx > 0){
        displayCount.style.color = "green";
    }
    if(idx === 0){
        displayCount.style.color = "black";
    }
    displayCount.innerText = `${idx}`;
}

resetBtn.addEventListener("click" , resetCount);

function resetCount(){
    idx = 0;
    if(idx === 0){
        displayCount.style.color = "black";
    }
    displayCount.innerText = `${idx}`;
}