import React from 'react'
import { useReducer } from 'react'
import reducer from './Reducer'
function ReducerCounter() {
    let initialState = 0
    const[count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <button onClick={()=>dispatch('increse')}>increse</button>
      {
        count
      }
      <button onClick={()=>dispatch('decrese')}>decrese</button>
    </div>
  )
}

export default ReducerCounter
