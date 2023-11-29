import { useReducer } from "react";

type CounterState={
    count:number
}
// type UpdateAction={
//     type:string,//'INCREMENT'|'DECCREMENT'|'RESET'
//     payload:number
// }
type UpdateAction={
    type:'INCREMENT'|'DECCREMENT'
    payload:number
}
type ResetAction={
    type:'RESET'
}
type CounterAction=UpdateAction | ResetAction//descriminated union
const initialState={count:0}

function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'INCREMENT':
        return {count:state.count+action.payload}
        case 'DECCREMENT':
        return {count:state.count-action.payload}
        case 'RESET':
            return initialState
        default:
            return state
    }

}
const Counter=()=> {
    const [state,dispatch]=useReducer(reducer,initialState)
     
    return ( 
        <div>
            <h1>Counter App</h1>
            <h2>counter:{state.count}</h2>
            <button onClick={()=>dispatch({type:'INCREMENT',payload:12})}>increment by 12</button>
            <button onClick={()=>dispatch({type:'DECCREMENT',payload:12})}>deccrement by 12</button>
            <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
        </div>
     );
}

export default Counter;