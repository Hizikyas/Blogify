import React from 'react'

const Card = (props) => {
  return (
    <div className={`rounded-[10px] shadow-custom   ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card;
