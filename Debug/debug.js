function performOperation(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let operator = document.getElementById("operator").value;
    //check if valid number
    if(!isNaN(num1) && !isNaN(num2) && ['+', '-', '*', '/'].includes(operator)){
        let result = simplify(num1,num2,operator);
        displayResult(result)
    }else{
        displayResult("Please enter valid numbers");
    }
}


function simplify(num1,num2,operator){ 
    debugger;
    return eval(`${num1}${operator}${num2}`);
} ;

function displayResult(result){
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`
}