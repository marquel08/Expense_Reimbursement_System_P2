import React from 'react'
import { useForm } from 'react-hook-form';
import List from './List';
import {default as api} from '../store/apiSlice';
import { Link } from "react-router-dom";
export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    
    const onSubmit=(data)=>{
        console.log(data)

    }
    const cardStyles = {
        container: {
          
          flexDirection: 'center',
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
          display: "flex",
          height: 400,
          width: 400,
          boxShadow: "0 0 3px 10px #cec7c759",
          padding: 20,
          textAlign: "center",
          borderRadius: 20,
          
        },
      
      };
  return (
    <div className="form max-w-sm mx-auto w-96">
        
        <h1 className='font-bold pb-4 text-xl'>Enter info here</h1>

        <form style={cardStyles.container} id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                <input type="text" {...register('name')} placeholder='Dinner, Uber, Motel 6' className='form-input' />
                </div>
                <select className='form-input' {...register('type')}>
                    <option value="Food" defaultValue>Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Lodging">Lodging</option>
                    </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
                </div>
                <div className="submit-btn">
                <Link to="/thanks" type="submit" className="btn btn-dark btn-lg btn-block">Submit Reimbursement</Link>

                </div>
            </div>    
        </form>

        <List></List>
    </div>
  )
}