import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, getLocalStorageTime } from '../../utils/fakedb';
import Button from '../Button/Button';
import './ExerciseDetails.css';

const ExerciseDetails = ({totalTime, setTotalTime}) => {

  const [secondBreak, setSecondBreak] = useState(0);


   const handleBreak = (second) => {
     addToDb('breakTime', second);
     setSecondBreak(second);
  }

  const handleShowToast = () =>{
    toast.success("WOW! You completed all the task", {
      position: toast.POSITION.TOP_CENTER
    });
    
    setSecondBreak(0);
    setTotalTime(0);

    // Clear local storage
    localStorage.clear()
  }

  useEffect(()=>{
    const getTime = getLocalStorageTime('breakTime');
    setSecondBreak(getTime)
  }, [])

  return (
    <div className='exercise'>
        <div className="break">
            <h3>Add A Break</h3>
            <div className="details">
            {
              [10,20,30,40,50].map((second, index) =>{
                return (
                    <div onClick={() => handleBreak(second)} className='break-div' key={index}>
                      <h3>{second}</h3>
                  </div>
                )
              })
            }
            </div>
        </div>
        <div className="exercise-details">
          <h3>Exercise Details</h3>
            <div className='details'>
              <p>Exercise Time</p>
              <p>{totalTime}s</p>
            </div>
            <div className='details'>
              <p>Break Time</p>
              <p>{secondBreak}s</p>
            </div>
        </div>
        <Button fnc={handleShowToast} text={'Activity Completed'} color={'#5D5FEF'}/>
        <ToastContainer autoClose={1500}/>
    </div>
  )
}

export default ExerciseDetails