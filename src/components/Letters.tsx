import "../App.css"

const KEYS=[
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
]

function Letters() {
    return ( <div 
        style={{display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(75px,1fr))',
        gap:'0.5rem'}}>
            {KEYS.map(key=>{
                return(
                    <button className="key_btn" key={key}>{key}</button>
                )
            })}
        </div> );
}

export default Letters;