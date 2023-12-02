import { ActionType } from "../Action-Types"
interface DepositAction{
    type:ActionType.DEPIST,
    payload:number
}
interface WithdrawAction{
    type:ActionType.WITHDRAW,
    payload:number
}

interface BankrupAction{
    type:ActionType.BANKRUPT,
}

export type Action=DepositAction|WithdrawAction|BankrupAction;