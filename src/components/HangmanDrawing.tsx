import React from 'react'


const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
)

const RIGHT_EYE = (
  <div
    style={{
      width: "0.2em",
      height: "0.2em",
      borderRadius: "100%",
      border: "6px solid red",
      position: "absolute",
      top: "70px",
      right: "-15px",
    }}
  />
)


const LEFT_EYE = (
  <div
    style={{
      width: "0.2em",
      height: "0.2em",
      borderRadius: "100%",
      border: "6px solid blue",
      position: "absolute",
      top: "70px",
      left: "300px",
      transformOrigin: "left bottom",
    }}
  />
)


const MOUTH = (
  <div
    style={{
      width: "10px",
      height: "0.1em",
      border: "6px solid black",
      position: "absolute",
      top: "90px",
      left: "305px",
    }}
  />
)


const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "118px",
      right: 0,
      backgroundColor : "orange"
    }}
  />
)


const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-105px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)


const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "15px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)


const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)


const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)



const BODY_PARTS = [HEAD, RIGHT_EYE , LEFT_EYE , MOUTH , BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]



type HanngmanDrawingProps = {
  numberOfGuesses : number
}



function HangmanDrawing({numberOfGuesses} : HanngmanDrawingProps) {

  return (

    <div style={{position : "relative"}}>

      {BODY_PARTS.slice(0 , numberOfGuesses)}
      
      <div style={{height : "50px" , width : "10px" , background : "black" , position : "absolute" , top : 0 , right : 0}}/>
      
      <div style={{height : "10px" , width : "200px" , background : "black" , marginLeft : "120px"}}/>
      
      <div style={{height : "400px" , width : "10px" , background : "black" , marginLeft : "120px"}}/>
      
      <div style={{height : "10px" , width : "250px" , background : "black" , borderRadius : "20px"}}/>

    </div>

  )

}


export default HangmanDrawing