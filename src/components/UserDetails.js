

const UserDetails = (props) => {


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));


    const email = formData.email;
    const fname = formData.fname;
    const userName = formData.userName;
    const password = formData.password

    if (userName.length < 4 || userName.length > 12) {
      return;
    }

    if (password.length < 6 || password.length > 12) {
      return;
    }
    props.handleSubmit({email, fname, userName, password});
    props.nextPage();
  };

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
          <label htmlFor='pass'>Password:</label>
          <input type='password' name='password' id='register-password' />
         
  
          <input className='btn submit' type='submit' value='Continue' />
        </div>
      </form>
    </section>
  );
};

// const RegisterWithAuth = withAuth(Register);

export default UserDetails;
