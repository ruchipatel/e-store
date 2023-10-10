import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const FormArea = () => {
    const [state, handleSubmit] = useForm("myyqlykj");
    if (state.succeeded) {
        return <p className='text-2xl text-green-700 text-center'>Thanks for joining!</p>;
    }
    if (state.errors){
        //console.log(state.errors.formErrors[0].message)
       // console.log(state.errors)
      return <p className='text-2xl text-red-700 text-center'>  Please fill proper form</p>
    }
  return (
    <>
    <form onSubmit={handleSubmit} method="POST">
           
           <label htmlFor="email">
 Email Address
</label>
<ContactInputBox
 id="email"
 type="email" 
 name="email"
 required
/>
<ValidationError 
        prefix="Email" 
        field="email"
 errors={state.errors}
/>
<label htmlFor="message">
 Message
</label>
           <ContactTextArea
 id="message"
 name="message"
/>
<ValidationError 
 prefix="Message" 
 field="message"
 errors={state.errors}
/>
         
           <div>
             <button
               type="submit" disabled={state.submitting}
               className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
             >
               Send Message
             </button>
           </div>
         </form>
    </>
  )
}

export default FormArea

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
      <>
        <div className="mb-6">
          <textarea
            rows={row}
            placeholder={placeholder}
            name={name}
            className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
            defaultValue={defaultValue}
          />
        </div>
      </>
    );
  };
  
  const ContactInputBox = ({ type, placeholder, name }) => {
    return (
      <>
        <div className="mb-6">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
      </>
    );
  };