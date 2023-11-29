type personProp={
    name:{
        first:string,
        last:string
    }
}

const Person=(props:personProp)=> {
    return ( 
        <h2>
            {props.name.first} {props.name.last}
        </h2>
     );
}

export default Person;