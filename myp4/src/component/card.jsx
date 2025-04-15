import React from 'react'
import "./card.css"

export const Card = ({pImg, pBrend, pPrice}) => {
  return (
    <>
      <div className='card'>
        <div className='img'>
          <img src={pImg} alt={`${pBrend} product`} />
        </div>
        <div className='data'>
          <h1>{pBrend}</h1>
          <span>{pPrice}</span>
        </div>
      </div>
    </>
  )
}

export default Card
