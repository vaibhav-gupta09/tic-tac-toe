import React from 'react'

interface ISquareProps{
  onClick: () => void,
  value: 'X' | 'O' | null;
  winner: string | null;
}

const Square: React.FC<ISquareProps> = ({onClick, value, winner}) => {
  if(!value){
  return (
    <>
      <button 
        className='square-button'
        disabled = {Boolean(winner)}
        style={{}}
        onClick = {onClick}
        >{value}</button>
    </>
  ) 
  }
  return(
    <button 
        className={`square-button square_${value}`}
        disabled
        >{value}
        </button>
  )
  
}

export default Square