import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Cards = ({handleAddToCart}) => {
  const [exercises, setExercises] = useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setExercises(data))
  }, [])

  return (
    <div className="card-container">
      {
        exercises.map(exercise => <Card key={exercise.index} exercise={exercise} handleAddToCart={handleAddToCart}/>)
      }
    </div>
  )
}

export default Cards