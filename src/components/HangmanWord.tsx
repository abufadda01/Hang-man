import React from 'react'


type HangmanWordProps = {
  guessedLetters : string [] 
  wordToGuess : string
}



function HangmanWord({guessedLetters , wordToGuess} : HangmanWordProps) {

  return (
    <div 
      style={{
        display : "flex",
        gap : ".25em",
        fontSize : "6rem",
        fontWeight : "bold",
        textTransform : "uppercase",
        fontFamily : "monospace",
      }}>

        {wordToGuess.split("").map((char , index) => (
          
          <span key={index} style={{borderBottom : ".1em solid black"}}>
          
            <span style={{visibility : guessedLetters.includes(char) ? "visible" : "hidden"}}>{char}</span>
          
          </span>

        ))}

    </div>
  )

}


export default HangmanWord