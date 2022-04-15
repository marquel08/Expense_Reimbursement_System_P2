import React from 'react'
import 'boxicons';

const obj= [
    {
        name: "Travel",
        color: 'rgb(54, 162, 235)',
    },
    {
        name: "Lodging",
        color: 'rgb(255, 99, 132)',
    },
    {
        name: "Food",
        color: 'rgb(54, 162, 235)',
    }
]

export default function List(){
    return(
        <div className="flex flex-col py-6 gap-3">
            <h1 className='py-4 font-bold text-xl'>Reimbursement Request History</h1>
            { obj.map((v,i)=><Reimbursement key={i} category={v}></Reimbursement>)}
        </div>
    )
}

function Reimbursement({category}){
    if(!category)return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:'8px solid ${category.color ?? "rgb(54, 162, 235)"}'}}>
            <button className='px-3'><box-icon color={category.color ?? "rgb(54, 162, 235)"}size="15px" name="trash" /></button>
            <span className="block w-full">{category.name ?? ''}</span>
        </div>
    )
}