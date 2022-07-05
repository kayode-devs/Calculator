let calulatorCon = document.querySelector(".calculator");
let output = document.querySelector("#output"); 
let button1 = document.getElementById("clear");
let buttons = document.querySelectorAll("button");
let numbers = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let equal = document.getElementById("equal");

for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", function (){
        output.value= output.value + numbers[i].innerHTML;
        return;
    })
}
for(let i=0; i<operator.length; i++){
    operator[i].addEventListener("click", function(){
        output.value= output.value + operator[i].innerHTML;
        
        return;
    })
}

equal.addEventListener("click", function(){
    const outputValue = output.value;
    const evaluate = eval(outputValue);
    output.value = evaluate;
})



button1.addEventListener("click", myFunction)

function myFunction(){
    output.value = "";
    output.focus();
}



// const evaluate = eval(2/2);

