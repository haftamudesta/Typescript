
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Statas from './components/Status'
import Button from './components/Button'
import User from './components/User'
import Counter from './components/Counter'
import Box from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'

function App() {
  const personName={
    first:"Haftamu",
    last:"Desta"
  }

  const nameList=[
    {
      first:"Hussein",
      last:"Mohamad"
    },
    {
      first:"haftamu",
      last:"Desta"
    },
    {
      first:"haftamu",
      last:"Desta"
    },
  ]

  return (
    <>
    <Greet name="Haftamu" messageCount={12} isLogedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Statas status="success" />
      <Button handleClick={()=>{
        console.log("button clicked");
      }} />
      <User />
      <Counter />
      <ThemeContextProvider>
      <Box />
      </ThemeContextProvider>
    </>
  )
}

export default App
