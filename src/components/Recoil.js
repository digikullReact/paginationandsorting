import React from 'react'
import { useRecoilState } from 'recoil'
import { countState } from '../atoms/count';

const Recoil = () => {

    const [value, setValue] = useRecoilState(countState);

    const increment=()=>{
        setValue(value+1)

    }

    const decrement=()=>{
        setValue(value-1)

    }
  return (
    <div>

        <h1>{value}</h1>


<button onClick={increment}>
    Increment 
</button>




<button onClick={decrement}>
    Decrement 
</button>




    </div>
  )
}

export default Recoil