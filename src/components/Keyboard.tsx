import React from 'react'
import styles from "../styles/Keyboard.module.css"


const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]


type KeyboardProps = {
  activeLetters : string[] 
  inActiveLetters : string[] 
  addGuessedletter : (letter : string) => void
}



function Keyboard({activeLetters , inActiveLetters , addGuessedletter} : KeyboardProps) {

  return (
    <div 
      style={{
        display : "grid" , 
        gridTemplateColumns : "repeat(auto-fit , minmax(75px , 1fr))" ,
        gap : ".7rem"
      }}>

        {KEYS.map((key) => {

          const isActive = activeLetters.includes(key)
          const isInActive = inActiveLetters.includes(key)

          return (
            <button onClick={() => addGuessedletter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${isInActive ? styles.inactive : ""}`} key={key}>{key}</button>
          )

        })}

    </div>
  )

}



export default Keyboard