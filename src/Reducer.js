const reducer=(state,action)=>{
  console.log(state,action)
  switch(action){
    case 'increse':
      return state+1
    case 'decrese':
      return state-1
    default:
      return state
  }
}
export default reducer