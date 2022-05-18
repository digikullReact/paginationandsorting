import React ,{useState,useMemo} from 'react'

const Memo = () => {

    const [state,setState]=useState(0);
    const [value,setValue]=useState(0);


const heavycalculation=(num)=>{

    for(let i=0;i<100;i++){
        num+=i;
        console.log(i);
    }
    
    return num;

}

    const calulcations=  useMemo(()=>{
        heavycalculation(2)

    },[value]) 




const handleClick=()=>{
    setState(state+1);
}

const handleValue=()=>{
    setValue(value+2);
}

  return (
    <div>
        <h1>{state}</h1>

        <h1> Value- {value}</h1>

        <button onClick={handleClick}>
            Change Increment
        </button>

        <button onClick={handleValue}>
            Change the Value
        </button>
    </div>
  )
}

export default Memo