import { useState } from "react";
type AthUser={
    name:string,
    email:string
}
const User=() =>{
    const [user,setUser]=useState<AthUser|null>(null);
    //const [user,setUser]=useState<AthUser>({} as AthUser ) but no need of logout button and handleLogOut function. this is useState type assertion
    const handleLogIn=()=>{
        setUser({
            name:"haftamu",
            email:"haftamu2007@gmail.com"
        })
    }
    const handleLogOut=()=>{
        setUser(null)
    }

    return ( 
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <h2>user name is: {user?.name}</h2>
            <h2>User email is: {user?.email}</h2>
        </div>
     );
}

export default User;