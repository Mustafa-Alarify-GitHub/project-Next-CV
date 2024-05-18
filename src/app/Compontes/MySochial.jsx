"use Client"
import Image from 'next/image'
import React from 'react'

const MySochial = () => {
  function MySocial(src, title, herf) {
    return (
      <div className="One_Soisal">
          <Image src={`/Social/${src}.png`} alt="s" width={45} height={45} />
          <h4>{title}</h4>
      </div>
    )
  }
  return (
    <div id="tell_Me">
      <center>
        <h1>Our Social Networks</h1>
      </center>

      <div id="Div_Social_">
        {MySocial('phone', '775516215',"tel:+967775516215")}
        {MySocial('email', 'm771071760@gmail.com',"mailto:m771071760@gmail.com")}
        {MySocial('fac', 'مصطفئ محمد سالم العريفي')}
        {MySocial('git', 'Mustafa-Alarify')}
        {MySocial('inst', '775516215')}
        {MySocial('what', '775516215')}
      </div>
      <center>
        <h4>©2024 Sv-Mustafa. All rights reserved. </h4>
      </center>
    </div>
  )
}

export default MySochial
