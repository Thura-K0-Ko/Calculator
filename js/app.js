let keypad = document.querySelector(".keypad");
let display = document.querySelector(".display");
let key = document.querySelector(".key");
let operator = ["+","-","*","/","%"];


let filter = x =>{
    
    let current = display.innerText;
    let lastChar = current[current.length-1];
    if(current=="0" && x != "."){
        
            lastClear();
           
    }
    if(operator.includes(x) && operator.includes(lastChar)){
        
           return false;
               
    }

    return true;
}

let showIndisplay = x => {
    if(filter(x)){
        display.innerText += x;
    }
}





function calc() {

    display.innerText = eval(display.innerText);
}


let allClear = _ => display.innerText = "";
 
let lastClear = _ => display.innerText = display.innerText.slice(0,display.innerText.length-1);

