// function declaration

function calculateArea(){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    let area = length * width;
    document.getElementById("result").innerHTML = `The area of rectangle is: ${area}`;
}