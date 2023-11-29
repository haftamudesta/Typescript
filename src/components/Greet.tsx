type greetProps={
    name:string
    messageCount:number
    isLogedIn:boolean
}

const  Greet=(prop:greetProps) =>{
    return ( 
        <div>
            <h1>
                {prop.isLogedIn? `Welcome ${prop.name}! you have ${prop.messageCount} unread messages`:"Welcome guest"}
            </h1>
        </div>
     );
}

export default Greet;