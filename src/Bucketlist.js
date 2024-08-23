import React from 'react'
import {reducer ,reducer1} from './Bucketreducer'
import { useReducer } from 'react'
import { v4 as uuidv4 } from "uuid";
function Bucketlist() {
let initialstate={
activity:"",
date:""
}
const[state,dispatch]=useReducer(reducer,initialstate)
const [wish,dispatchwish]=useReducer(reducer1,{wish:[]})

const onchangeHandler=(e)=>{
 const {name,value}=e.target
  dispatch(
    {
      type:'set_input',
    payload:{
      name,
      value
    }
    }
  )
}

const onclickHandler=()=>{
const id=uuidv4()
  dispatchwish(
    {
      type:'set_wish',
      payload:{
        id,
        ...state
      }
    }
  )
}
const handleComplete = (id) => {
  dispatchwish({ type: "COMPLETE", payload: id });
}
   console.log(state)
  return (
    <div>
      <input type='text' name='activity' placeholder='write wish' onChange={onchangeHandler} />
      <input type='date' name='date' onChange={onchangeHandler}/>

      <br></br>
      <div>
        <button onClick={onclickHandler}> make a wish</button>
      </div>
      {wish.wish.length > 0 ? (
        <div>
          {wish.wish.map((item) => (
            <div key={item.id} className={item.completed ? "completed" : ""}>
              <div>
                Activity: {item.activity}, Date: {item.date}
              </div>
              <button onClick={() => handleComplete(item.id)}>Complete</button>
              <button
                onClick={() =>
                  dispatchwish({ type: "DELETE", payload: item.id })
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Bucketlist
