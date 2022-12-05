import React from 'react'
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails'
import Profile from '../Profile/Profile'

const Cart = ({totalTime, setTotalTime}) => {
  return (
    <div>
      <Profile/>
      <ExerciseDetails totalTime={totalTime} setTotalTime={setTotalTime}/>
    </div>
  )
}

export default Cart