import React, {useReducer, useState} from "react";
import './App.css';

const formReducer = (state, event) => {
    return{
        ...state,
        [event.name]: event.value
    }
}

function EmpReim(){
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        // alert('Revature Thanks you for Submiting this Request!')
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }
    const handleChange = event => {
        setFormData({
        name: event.target.name,
        value: event.target.value,
        
    });
}
return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name:</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <fieldset>
         <label>
           <p>Last Name:</p>
           <input name="name" onChange={handleChange}/>
               
         </label>
         <label>
           <p>Email</p>
           <input type="email" name="email" onChange={handleChange} />
         </label>
         <label>
           <p>Password</p>
           <input type="password" name="password" onChange={handleChange} />
         </label>
         <label>
           <p>Confirm Password</p>
           <input type="confirmPassword" name="confirmPassword" onChange={handleChange} />
         </label>
       </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
    }
export default EmpReim;




