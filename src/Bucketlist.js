import React from 'react'
import reducer from './Bucketreducer'
import { useReducer } from 'react'
function Bucketlist() {
let initialstate=[]
const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
      <input type='text' placeholder='make wish' onChange={(e)=>e.target.value} />
    </div>
  )
}

export default Bucketlist
