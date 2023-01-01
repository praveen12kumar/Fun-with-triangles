console.log("Hello");
// selector
const inputBase = document.querySelectorAll(".area-input");
const Btn = document.querySelector(".area-btn");
const outputDiv = document.querySelector(".area-output");

// add event listner
Btn.addEventListener("click", function AreaCalculate(){
    let Base = inputBase[0].value;
    let Height = inputBase[1].value;
    console.log(Base + " " + Height);

    let ans = calculateArea(Base, Height);
    outputDiv.innerText = "The area of the triangle is: " + ans + "cm^2";
})

// function
function calculateArea(Base, Height){
    let res = (Base * Height) / 2;
    return res;
}