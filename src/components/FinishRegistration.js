
import * as authService from "../services/authService";
import {useEffect} from 'react';


const FinishRegistration = (props) => {


    useEffect(() => {
        (async() => {
        await authService.register(props.userData);
        })()
    }, [])


 return (
   <section id='register-page' className='content auth'>
     <p style={{color: "white", fontSize: "22px", fontFamily: "Georgia"}}>
       “Thank you, You can now play with real money. Have fun, and good luck!”
     </p>
     <div style={{display: "flex", justifyContent: "space-around"}}>
       <button className='btn submit' type='button' value='Play Now'>
         <a
           href='http://play.casino.com/'
           style={{textDecoration: "none", color: "white"}}>
           Play now
         </a>
       </button>
       <button className='btn submit' type='button'>
         <a
           href='http://play.casino.com/promotions'
           style={{textDecoration: "none", color: "white"}}>
           Promotions
         </a>
       </button>
     </div>
   </section>
 );
};

export default FinishRegistration;
