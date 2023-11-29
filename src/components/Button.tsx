type ButtopProp={
    handleClick:()=>void;
}

const Button=(prop:ButtopProp) =>{
    return ( 
        <button onClick={prop.handleClick}>click</button>
     );
}

export default Button;