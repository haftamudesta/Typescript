import { Dispatch } from "redux"
import { ActionType } from "../Action-Types"
import { Action } from "../Actions"

export  const depositMoney=(amount:number)=>{
return (dispatch:Dispatch<Action>)=>{
    dispatch({
        type:ActionType.DEPIST,
        payload:amount
    })
}
}

export  const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
    }

    export  const bankruptMoney=()=>{
        return (dispatch:Dispatch<Action>)=>{
            dispatch({
                type:ActionType.BANKRUPT,
            })
        }
        }