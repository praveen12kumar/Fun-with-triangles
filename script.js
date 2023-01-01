console.log("hello")
/*---- Selector----*/
const inputs = document.querySelectorAll(".angle-input")
const isTrianglebtn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output")

isTrianglebtn.addEventListener("click", function isTriangle(){
    var a1 = Number(inputs[0].value);
    var a2 = Number(inputs[1].value);
    var a3 = Number(inputs[2].value);

    const ans = checkTriangle(a1, a2, a3);
    if(ans === 1){
        outputDiv.innerText = "it is triangle"
    }
    else{
        outputDiv.innerText = "not triangle"
    }
});

function checkTriangle(angle1, angle2, angle3){
    if((angle1 + angle2 + angle3) >= 180){
        return 1;
    }
    else{
        return 0;
    }
}