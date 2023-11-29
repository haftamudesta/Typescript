type StatusProp={
    status:"loading"|"success"|"error"
}

const Statas=(prop:StatusProp)=> {
    let message;
    if(prop.status==="loading"){
        message="Loading"
    }else if(prop.status==="success"){
        message="Data fetched successfully"
    }else if(prop.status==="error"){
        message="Error fetching data"
    }
    return ( 
        <div>
            <h2>{message}</h2>
            
        </div>
     );
}

export default Statas;