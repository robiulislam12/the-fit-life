import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-section'>
      <div className="avatar">
        <img src="https://avatars.githubusercontent.com/u/85412996?v=4" alt="avatar" />
        <div>
          <h3>Robiul Islam</h3>
          <p>Narayanganj, Dhaka</p>
        </div>
      </div>
      <div className="details">
        <div>
          <h3>56 <small>kg</small> </h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>6.5</h3>
          <p>Height</p>
        </div>
        <div>
          <h3>19 <small>yrs</small> </h3>
          <p>Age</p>
        </div>
      </div>
      <div className="avatar-details"></div>
    </div>
  )
}

export default Profile