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
        setFormData({fname: event.target.fname,
        value: event.target.value, lname: event.target.lname, value: event.target.value,
    });
}
return(
    <div className='wrapper'>
        <h1>Please fill out the Below form for Reimbursments</h1>
        {submitting && <div>You are Submitting the Following Information:
            <ul>
                {Object.entries(formData).map(([fname, value]) => (
                    <li key={fname}><strong>{fname}</strong>:{value.toString()}</li>
                    
                ))}
            </ul>
            <ul>
                {Object.entries(formData).map(([lname, value]) => (
                    <li key={lname}><strong>{lname}</strong>:{value.toString()}</li>
                    
                ))}
            </ul>
        </div>
        }
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <p>First Name</p>
                    <input fname="fname" onChange={handleChange}value={formData.fname } />
                </label>
                <label>
                    <p>Last Name</p>
                    <input lname="lname" onChange={handleChange} value={formData.lname }/>
                </label>
            </fieldset>


            <button type="submit">Submit</button>
        </form>
    </div>
)
}
export default EmpReim;




