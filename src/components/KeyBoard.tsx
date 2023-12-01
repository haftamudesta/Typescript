import Letters from "./Letters";

function KeyBoard() {
    let word='haftamu'
    let gussedLetter=['t']
    return ( 
        <main>
        <div style={{display:'flex',gap:'2.5rem',fontSize:'6rem',fontWeight:'bold',textTransform:'uppercase'}}>
            {word.split("").map((letter,index)=>(
                <span style={{borderBottom:'0.1em solid black'}}>
                    <span style={{visibility:gussedLetter.includes(letter)?'visible':'hidden'}}>{letter}</span> </span>
            ))}
        </div>
        <Letters />
        </main>
     );
}

export default KeyBoard;