import {useState} from 'react';

const UserDetails = (props) => {
  
  const [isNotChecked, setIsNotChecked] = useState(true);
  const [isInvalidUserName, setIsInvalidUserName] = useState(false); 
  const [isInvalidPassword, setIsInvalidPassword] = useState(false); 

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    const email = formData.email;
    const fname = formData.fname;
    const userName = formData.userName;
    const password = formData.password

    if (userName.length < 4 || userName.length > 12) {
      setIsInvalidUserName(true);
    } else {
       setIsInvalidUserName(false);
    }

    if (password.length < 6 || password.length > 12) {
      setIsInvalidPassword(true);
    } else {
      setIsInvalidPassword(false);
    }



    if(isNotChecked == true || isInvalidPassword == true || isInvalidUserName == true) {
      return;
    }

    props.handleSubmit({email, fname, userName, password});
    props.nextPage();
  };

  const handleChange = (e) => {
    if(e.target.checked) {
      setIsNotChecked((current) => !current);
    } else {
       setIsNotChecked((current) => !current);
    }
  }

  return (
    <section id='register-page' className='content auth'>
      <form id='register' onSubmit={onSubmit}>
        <div className='container'>
          <h1>Register</h1>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='maria@email.com'
          />
          <label htmlFor='fname'>First Name:</label>
          <input type='text' id='fname' name='fname' />
          <label htmlFor='fname'>Username:</label>
          <input type='text' id='userName' name='userName' />
          {isInvalidUserName && <p style={{color: 'red', fontSize: "20px"}}>Must be between six and 12 characters long. </p>}
          <label htmlFor='pass'>Password:</label>
          <input type='password' name='password' id='register-password' />
           {isInvalidPassword && <p style={{color: 'red', fontSize: "20px"}}>Must be between six and 12 characters long. </p>}
          <div style={{display: "flex", marginTop: "5px"}}>
            <input
              type='checkbox'
              value={isNotChecked}
              onClick={handleChange}
              style={{width: "20px", marginRight: "15px"}}></input>
            <p style={{color: "white"}}>
              By checking this box, I agree to Terms &amp; Conditions of the
              site.
            </p>
          </div>

          <input className='btn submit' type='submit' value='Continue' />
        </div>
      </form>
    </section>
  );
};

// const RegisterWithAuth = withAuth(Register);

export default UserDetails;
