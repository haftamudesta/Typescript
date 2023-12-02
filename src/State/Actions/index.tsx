import { ActionType } from "../Action-Types"
interface DepositAction{
    type:ActionType.DEPIST |ActionType.WITHDRAW,
    payload:number
}
// interface WithdrawAction{
//     type:ActionType.WITHDRAW,
//     payload:number
// }

interface BankrupAction{
    type:ActionType.BANKRUPT,
}

export type Action=DepositAction|BankrupAction;//|WithdrawAction