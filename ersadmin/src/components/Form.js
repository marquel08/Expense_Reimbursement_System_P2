import React from 'react'
import {useForm} from 'react-hook-form';
import List from './List';

export default function Form(){

    const {register, handleSubmit, resetField} = useForm();

    const onSumbit = (data) =>{
        console.log(data)
    }

    return(
        <div className="form max-w-sm mx-auto w-96">
            <h1 className='font-bold pb-4 text-xl'>Reimbursement</h1>

            <form id='form' onSumbit={handleSubmit(onSumbit)}>
                <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder="Full Name" className="form-input"></input>
                </div>
                <select className="form-input" {...register('type')}>
                    <option value="Travel" defaultValue>Travel</option>
                    <option value="Lodging">Lodging</option>
                    <option value="Food">Food</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder="Total Amount" className="form-input"></input>
                </div>
                <div className="submit-btn">
                <button className='border py-2 text-white bg-indigo-500 w-full'>Submit Reimbursement Request</button>
                </div>
                </div>
            </form>
            <List></List>
        </div>
    )
}