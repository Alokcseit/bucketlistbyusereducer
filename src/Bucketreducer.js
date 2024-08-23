const reducer=(state,action)=>{
console.log(state,action)
console.log(action.type)
console.log(action.payload)
console.log(action.payload.value)
console.log("name",action.payload.name)
 switch(action.type){
  case 'set_input':
    return{
      ...state,
      [action.payload.name]:action.payload.value
    }
  default:
    return state
 }

}
const reducer1=(state,action)=>{
    switch(action.type){
      case 'set_wish':
        return{
          ...state,
          wish:[...state.wish,action.payload]
        }
        case 'DELETE':
            return{
              ...state,
              wish:state.wish.filter((item)=>item.id!==action.payload)
            }
            case 'COMPLETE':
                return{
                  ...state,
                  wish:state.wish.filter((item)=>item.id!==action.payload ?{...item,complete:!item.complete}:item)  
                }
      default:
        return state
     }
}

export {reducer,reducer1 } ;