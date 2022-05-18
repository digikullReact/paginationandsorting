import React from 'react'
import { useStore } from '../zustandstore/store'

const Zustand = () => {
    const count = useStore(state => state.count);  //useSelector --->
    const increaseCount=useStore(state=>state.increaseCount);
    const removeAllCount=useStore(state=>state.removeAllCount);

    const increment=()=>{
        increaseCount();
    }

    const removeAll=()=>{
        removeAllCount();
    }
  return (
    <div>

    <h1>{count}</h1>


    <button onClick={increment}>
        Increase Count
    </button>

    <button onClick={removeAll}>
RemoveAll
    </button>


    </div>
  )
}

export default Zustand