const calculateAmount = () =>{
    let grocery1 = parseFloat(document.getElementById("grocery1").value);
    let grocery2 = parseFloat(document.getElementById("grocery2").value);
    let grocery3 = parseFloat(document.getElementById("grocery3").value);

    document.getElementById("result").innerHTML = `The total amount is :$${grocery1 + grocery2 + grocery3}`
}