import React from "react";
import './WordleLogic.css';

function Wordle() {
    var goalWord = "tower";
    var guesses = 1;

    function checkWord(word) {
        word = word.toLowerCase();
        console.log(word);

        const wordArray = word.split("");
        var currentText = document.getElementById("console").innerText;

        if (wordArray.length < 5) {
            currentText += " Word is too short! \n";
            document.getElementById("console").innerText = currentText;
            return;
        }
        if (wordArray.length > 5) {
            currentText += " Word is too long! \n";
            document.getElementById("console").innerText = currentText;
            return;
        }

        for (var i = 0; i < wordArray.length; i++) {
            var curLetter = wordArray[i];
            for (var j = 0; j < goalWord.length; j++) {
                var goalLetter = goalWord[j];
                if (curLetter === goalLetter) {
                    if (i === j ) {
                        currentText += " green ";
                    } else {
                        currentText += " yellow ";
                    }
                }
            } 
        }
        document.getElementById("console").innerText = currentText + " " +  word + '\n' + guesses + " Guess: ";
        guesses++;
    }

    return (
        <div className="wordleBox">
            <h1>Guess the 5 letter word a la "Mastermind"</h1>
            <input className="submitBox" id="submitBox" ></input>
            <button className="submitButton" 
                onClick={() => {
                    checkWord(document.getElementById("submitBox").value);
                }}>Submit
            </button>
            <button className="submitButton" 
                onClick={() => {
                    document.getElementById("console").innerText = "First Guess: ";
                }}>Reset
            </button>
            <h3 className="console" id="console">First Guess: </h3>
        </div> 
    );
}

export default Wordle;