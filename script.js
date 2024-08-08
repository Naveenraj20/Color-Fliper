let code = document.getElementById("colorId");
let headText = document.getElementById("headerTestId");
let btn = document.querySelector("button");
let bgColor = document.getElementById("article01");
let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
function fun(){
    result1 = "#";
    result2 = "#";
    for(let i=0;i<6;i++){
        result1 = result1 + (arr[Math.floor(Math.random()*16)]);
        result2 = result2 + (arr[Math.floor(Math.random()*13)]);
    }
    bgColor.style.background = result1;
    code.innerText = result1;
    btn.style.color = result2;
    headText.style.background = result2;
    headText.style.color = "#FFFFFF";
    code.style.background = result2;
    code.style.color = "#FFFFFF"
}