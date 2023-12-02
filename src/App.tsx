import { useDispatch,useSelector } from 'react-redux'
import { actionCreators,State } from './State'
import './App.css'
import { bindActionCreators } from 'redux';


function App() {
  const dispatch=useDispatch();
  const {depositMoney,withdrawMoney,bankruptMoney}=bindActionCreators(actionCreators,dispatch)
  const amount=useSelector((state:State)=>state.bank)

  return (
    <>
      <div>
        <h1>{amount}</h1>
        <button onClick={()=>{depositMoney(90)}}>Deposit</button>
        <button onClick={()=>{withdrawMoney(80)}}>Withdraw</button>
        <button onClick={()=>{bankruptMoney()}}>Bankrupt</button>
      </div>
    </>
  )
}

export default App
