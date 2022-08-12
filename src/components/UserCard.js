const UserCard = (props) => {
  console.log(props);
  return (
    <div className='profile'>
      <img src='./iconProfile2.png' className='userIcon' />
      <div className="infoContainer">
        <p>Email: {props.user.email}</p>
        <p>Username: {props.user.userName}</p>
        <p>city: {props.user.city}</p>
      </div>

      <hr></hr>
      <div className='btnContainer'>
        <button className='showMoreBtn'>Show more</button>
      </div>
    </div>
  );
};

export default UserCard;
