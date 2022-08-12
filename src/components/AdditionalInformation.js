import {useState} from 'react';

const AdditionInformation = (props) => {

  const [isVisible, setIsVisible] = useState(false);
  const [isLinkVisible, setIsLinkVisible] = useState(true);


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    const address1 = formData.address1;
    const address2 = formData.address2;
    const city = formData.city;
    const country = formData.country;
    const postalCode = formData.postalCode;
    const phoneNumber = formData.phoneNumber;
    const bonusCode = formData.bonusCode;

    if(address1 == '' || address2 == '' || city == '', country == '', postalCode == '', phoneNumber == '') {
      return alert('All fields are required');
    }


    props.handleSubmit({address1, address2, city, country, postalCode, phoneNumber,
      bonusCode});
      props.nextPage();

  };


   return (
     <section id='register-page' className='content auth'>
       <form id='register' onSubmit={onSubmit}>
         <div className='container'>
           <label htmlFor='address1'>Address 1</label>
           <input type='text' id='address1' name='address1' />
           <label htmlFor='address1'>Address 2</label>
           <input type='text' id='address2' name='address2' />
           <label htmlFor='city'>City</label>
           <input type='text' id='city' name='city' />
           <label htmlFor='country'>County:</label>
           <input type='text' id='country' name='country' />
           <label htmlFor='postalCode'>Postal Code:</label>
           <input type='text' id='postalCode' name='postalCode' />
           <label htmlFor='phoneNumber'>Phone Number:</label>
           <input type='text' id='phoneNumber' name='phoneNumber' />
           {isLinkVisible && (
             <p style={{color: "white", fontSize: "22px"}}>
               Do you have a bonus code?
               <a
                 href=''
                 onClick={(e) => {
                   e.preventDefault();
                   setIsLinkVisible((previousState) => !previousState);
                   setIsVisible((previousState) => !previousState);
                 }}>
                 {" "}
                 Click here.
               </a>
             </p>
           )}
           {isVisible && (
             <div>
               <label htmlFor='bonusCode'>Bonus Code:</label>
               <input type='text' id='bonusCode' name='bonusCode' />
             </div>
           )}
           <input className='btn submit' type='submit' value='Continue' />
         </div>
       </form>
     </section>
   );
};

export default AdditionInformation;
