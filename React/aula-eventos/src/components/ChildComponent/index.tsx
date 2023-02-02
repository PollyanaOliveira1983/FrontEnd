import { useState } from "react"

type Props = {
    onNewValue?: Function;
}

export default function ChildComponent({onNewValue} : Props) {

    function handleClick(){
        const newCount = count + 1;
        setCount(newCount);
        if(onNewValue) {
            onNewValue(newCount);
        }        
    }
    
    const [count, setCount] = useState(0);

    return(
        <div style={{border: "1px solid red", padding:"10px" }}>
            {count}
            <button onClick={handleClick}>OK</button>
        </div>
    )
}