import React from 'react'
import Image from "../assets/logo.png"

function Logo() {
  return (
    <div>
      <img src={Image} style={{width:"60px" , height:"60px"}} alt="logo"></img>
    </div>
  )
}

export default Logo