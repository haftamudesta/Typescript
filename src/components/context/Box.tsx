import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Box() {
    let theme=useContext(ThemeContext)
    return ( 
        <div style={{backgroundColor:theme.primary.main, color:theme.secondry.main}}>
            <h1>Theme context </h1>
        </div>
     );
}

export default Box;