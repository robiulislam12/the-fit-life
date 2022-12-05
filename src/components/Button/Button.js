import './Button.css';

const Button = ({text, color, fnc, time}) => {
  return (
    <button onClick={()=> fnc(time)} className='btn' style={{backgroundColor: color}}>{text}</button>
  )
}

export default Button