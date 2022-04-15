import React from 'react'

const obj= [
    {
        type: "Travel",
        color: 'rgb(54, 162, 235)',
        percent: 45
    },
    {
        type: "Lodging",
        color: 'rgb(255, 99, 132)',
        percent: 20
    },
    {
        type: "Food",
        color: 'rgb(54, 162, 235)',
        percent: 10
    }
]

export default function Labels(){
    return(
        <>
        {obj.map((v,i) => <LabelComponent key={i} data={v}></LabelComponent>)}
        </>
    )
}

function LabelComponent({data}){
    if(!data) return <></>
    return(
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className='w-2 h-2 rounded py-3' style={{background:data.color ?? 'rgb(54, 162, 235)'}}></div>
                <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{data.percet ?? ''}%</h3>
        </div>
    )
}