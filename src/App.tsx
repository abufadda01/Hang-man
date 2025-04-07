import React, { KeyboardEvent, useEffect, useState } from 'react'
import words from "./wordList.json"
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'


const App = () => {

  // useState function to return a random word text from the words array
  const [wordToGuess , setWordToGuess] = useState(() => {
    return "well"
    // return words[Math.floor(Math.random() * words.length)] 
  })


  // will be what the user will enter in the keyboard (try to guess)
  const [guessedLetters , setGuessedLetters] = useState<string[]>([])

  
  // the incorrect letters will be the all char that the user will enter and they will not be in the word that the user must guess
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))



  function addGuessedletter(letter : string){
    if(guessedLetters.includes(letter)) return // to not show all body parts if user keep enter same incorrect char (each wrong char will show one body part)
    setGuessedLetters(currentLetters => [...currentLetters , letter])
  }
  

  
  useEffect(() => {

    const keyBoardHandler = (e : globalThis.KeyboardEvent) => {

      const key = e.key // will be the pressed user keyboard key

      if(!key.match(/^[a-z]$/)) return // if the pressed user keyboard key not match any char from [a-z] stop the process

      e.preventDefault()

      addGuessedletter(key)

    }

    window.addEventListener("keypress" , keyBoardHandler)

    return () => {
      window.removeEventListener("keypress" , keyBoardHandler)      
    }

  } , [guessedLetters])



  return (

    <div style={{
      maxWidth : "800px" ,
      display : "flex" ,
      flexDirection : "column" ,
      gap : "2rem" ,
      margin : "0 auto" ,
      alignItems : "center"
    }}>

      <div style={{
        fontSize : "2rem" ,
        textAlign : "center"
      }}>
        Lose
        Win
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

      <div style={{alignSelf : "stretch" , marginTop : "30px"}}>
        <Keyboard/>
      </div>

    </div>
  )

}

export default App