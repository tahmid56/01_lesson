import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, increaseByamount } from './counterSlice'



const Counter = () => {
    const [amount, setAmount] = useState(0);
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    const handleReset = ()=>{
      dispatch(reset());
      setAmount(0);
    }
  return (
    <section>
        <p>{count}</p>
        <input type="text" value={amount} onChange={e=>setAmount(e.target.value)}></input>
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
        <div>
          <button onClick={()=> dispatch(increaseByamount(Number(amount)))}>Increase by {amount}</button>
          <button onClick={()=> handleReset()}>Reset</button>
        </div>
    </section>
  )
}

export default Counter