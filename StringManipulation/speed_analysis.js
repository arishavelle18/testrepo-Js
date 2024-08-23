let testText = "The quick brown fox jumps over the lazy dog.";
let startTime,endTime;

function startTest(){
    document.getElementById("inputText").value = testText;
    startTime = new Date().getTime()
    var button = document.getElementById("startBtn");
    button.style.display = "none";
    var button = document.getElementById("endBtn");
    button.style.display = "block";
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
}
function endTest() {
    endTime = new Date().getTime();
    // Disable user input
    document.getElementById("userInput").readOnly = true;


    // calculate time elapsed and words per minute (wpm)
    let timeElapsed = (endTime - startTime) / 1000; // in seconds
    let userTypedText = document.getElementById("userInput").value;

    let typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== "";
    }).length;

    let yourTyping = userTypedText.split(/\s+/).filter(function (word){
        return word !== "";
    });

    let followingText = testText.split(/\s+/).filter(function (word){
        return word !== "";
    });
    let checkSame = yourTyping.filter(text => followingText.indexOf(text) !== -1).length


    let wpm = 0;

    // check kung ilang second dapat di zero tas yung typewords dapat yung lenght at number
    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords/timeElapsed) * 60);
    }

    //Display
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
    <h2>Typing Test Results:</h2>
    <p>Total Length: ${userTypedText.length}</p>
    <p>Total Correct Words: ${checkSame}</p>
    <p>Total Wrong Words: ${followingText.length - checkSame}</p>
    <p>Words Typed: ${typedWords}</p>
    <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
    <p>Words Per Minute (WPM): ${wpm}</p>
    `

    var button = document.getElementById("startBtn");
    button.style.display = "block";
    var button = document.getElementById("endBtn");
    button.style.display = "none";
    document.getElementById("inputText").value = "";
}