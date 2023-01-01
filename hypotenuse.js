console.log("HELLO");

// selectors
//const inputA = document.querySelector(".side-inputA");
//const inputB = document.querySelector(".side-inputB");

const input = document.querySelectorAll(".side-input");
const btn = document.querySelector(".btn");
const outputDiv = document.querySelector(".output");
/*
btn.addEventListener("click", function(){
   let ans = calculateHypotenuse(inputA.value, inputB.value);
   outputDiv.innerText = "The length of hypotenuse is: "+ans;
});

function calculateHypotenuse(a, b){
    let res = ((a * a) + (b * b));
    return (Math.sqrt(res));
}
*/

function calculateSquareRoot(a, b){
    let res = ((a * a) + (b * b));
    return Math.sqrt(res);
}

btn.addEventListener("click", function calculateHypotenuse(){
    let ans = calculateSquareRoot(input[0].value, input[1].value);
    outputDiv.innerText = "The length of hypotenuse is: "+ans;
});