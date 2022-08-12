

const ContinueRegistration = (props) => {

    const handleRedirect = async() => {
        window.location.replace("http://www.casino.com");
    }
    

    return (
      <section id='register-page' className='content auth'>
        <p style={{color: "white", fontSize: "22px", fontFamily: "Georgia"}}>
          You’re ready to play! In order to play with real money, you will need
          to provide more information. You can do so now if you wish or skip and
          do it at a later time.
        </p>
        <div style={{display: 'flex', justifyContent: "space-around"}}>        
            <button onClick={props.nextPage}
          className='btn submit'
          type='button'
          value='Continue Registration'>
          Continue Registration
        </button>
        <button className='btn submit' type='button'>
          <a style={{textDecoration: "none", color: "white"}} onClick={handleRedirect}>Skip</a>
        </button></div>

      </section>
    );
}

export default ContinueRegistration;